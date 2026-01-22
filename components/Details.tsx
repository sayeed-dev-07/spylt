'use client'
import React, { useRef } from 'react';
import TextAnimationChar from './TextCharsAnim';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Details = () => {
    const textCard = useRef(null)
    const containeRef = useRef(null)
    useGSAP(()=>{
        gsap.fromTo(textCard.current,
            { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: textCard.current,
                    start: 'top 80%',
                    end:'+=300px',
                    scrub:true
                },
            }
        )
    })
    return (
        <section className="relative w-full min-h-[110vh] bg-[#e8ddcb] overflow-hidden">

            {/* BIG IMAGE — STICKS TO BOTTOM */}
            <div
                className="
                            absolute inset-x-0 bottom-0
                            bg-no-repeat bg-bottom bg-cover
                            w-full
                            h-[60vh] lg:h-full
                            z-20
                        "
                style={{ backgroundImage: "url('/images/big-img.png')" }}
            />

            {/* SLIDER IMAGE — STICKS TO TOP */}
            <div
                className="
                            absolute inset-x-0 top-0
                            bg-no-repeat bg-top bg-cover
                            w-full
                            h-[30vh]
                            z-10
                        "
                style={{ backgroundImage: "url('/images/slider-dip.png')" }}
            />

            <div className='z-30 px-[3%] absolute w-full h-full top-[20%]'>
                <div className='flex w-full lg:items-center items-start lg:flex-row flex-col gap-y-12 justify-between '>
                    <div className='font-antonio text-5xl md:text-8xl  xl:text-[150px] uppercase text-dark-brown  font-semibold'>
                    <TextAnimationChar text='It still does'/>
                    <div ref={textCard} className='p-4 bg-[#e8ddcb] -rotate-6'>
                        <div className='p-4  leading-[8vw] pb-6 bg-mid-brown tracking-tight'>
                            <p className='text-[#e8ddcb]'>body good</p>
                        </div>
                    </div>
                </div>
                <div className='text-dark-brown  font-nunito text-2xl font-semibold max-w-[400px]   lg:text-center text-start w-full'>
                    <TextAnimationChar text='Milk contains a wide array of nutrients, including vitamins, minerals, and protein, and this is lactose free.' />
                </div>
                </div>
                <div>
                    
                </div>
            </div>
        </section>


    );
};

export default Details;
