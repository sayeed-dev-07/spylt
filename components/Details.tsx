'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import TextAnimationChar from './TextCharsAnim';
import Vitamin from './Vitamin';
import TextAnimation from './textReveal';

gsap.registerPlugin(ScrollTrigger);

const Details = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textCard = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!textCard.current) return;

        // 1. Optimized ClipPath Reveal with smoothing
        gsap.fromTo(textCard.current,
            { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'none', 
                scrollTrigger: {
                    trigger: textCard.current,
                    start: 'top 90%',
                    end: 'top 40%',
                    scrub: 1, // Adds "momentum" to the reveal
                },
            }
        );

        // 2. Vitamin Items Reveal (Staggered)
        gsap.from('.vitamin-item', {
            autoAlpha: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.vitamin-container',
                start: 'top 90%',
                once: true
            }
        });

        // 3. Subtle Parallax for background images
        gsap.to('.bg-parallax', {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                scrub: true
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative w-full min-h-[110vh] bg-[#e8ddcb] overflow-hidden">
            
            {/* Background Images with GPU acceleration */}
            <div
                className="bg-parallax absolute inset-x-0 bottom-0 bg-no-repeat bg-bottom bg-cover w-full h-[50vh] lg:h-full z-20 will-change-transform"
                style={{ backgroundImage: "url('/images/big-img.png')" }}
            />
            <div
                className="bg-parallax absolute inset-x-0 top-0 bg-no-repeat bg-top bg-cover w-full h-[30vh] z-10 will-change-transform"
                style={{ backgroundImage: "url('/images/slider-dip.png')" }}
            />

            <div className='z-30 px-[3%] absolute w-full h-full top-[20%]'>
                <div className='flex w-full lg:items-center items-start lg:flex-row flex-col gap-y-12 justify-between'>
                    <div className='font-antonio text-5xl md:text-8xl xl:text-[150px] uppercase text-dark-brown font-semibold'>
                        <TextAnimationChar text='It still does'/>
                        
                        {/* Animated Card */}
                        <div 
                            ref={textCard} 
                            className='p-2 sm:p-4 bg-[#e8ddcb] -rotate-6'
                            style={{ willChange: 'clip-path' }}
                        >
                            <div className='p-4 leading-[8vw] pb-6 bg-mid-brown tracking-tight'>
                                <p className='text-[#e8ddcb]'>body good</p>
                            </div>
                        </div>
                    </div>

                    <div className='text-dark-brown font-nunito text-2xl font-semibold max-w-[400px] lg:text-center text-start w-full'>
                        <TextAnimation style='font-semibold text-xl  capitalize font-nunito w-full max-w-[600px]  mx-auto text-start  tracking-tight leading-tight' text='Milk contains a wide array of nutrients, including vitamins, minerals, and protein, and this is lactose free'/>
                    </div>
                </div>

                {/* Vitamin Info Bar */}
                <div className='vitamin-container absolute bottom-[25%] left-0 w-full'>
                    <div className='p-2 sm:p-5 bg-[#e8ddca] w-[98%] sm:w-[90%] mx-auto rounded-full'>
                        <div className='bg-[#fdebd2] items-center rounded-full justify-between flex font-nunito text-dark-brown px-7 sm:px-10 sm:py-8 py-4 w-full'>
                            <div className='vitamin-item flex-1'><Vitamin name='Potassium' amount={245}/></div>
                            <div className="line bg-dark-brown h-12 w-px opacity-20"></div>
                            <div className='vitamin-item flex-1'><Vitamin name='Calcium' amount={500}/></div>
                            <div className="line bg-dark-brown hidden md:block h-12 w-px opacity-20"></div>
                            <div className='vitamin-item flex-1 hidden md:block'><Vitamin name='Vitamin A' amount={176}/></div>
                            <div className="line bg-dark-brown  h-12 w-px opacity-20"></div>
                            <div className='vitamin-item flex-1'><Vitamin name='Iron' border={false} amount={1}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;