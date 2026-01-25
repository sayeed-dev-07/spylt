'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import TextMoveAnim from './TextMoveAnim';
import { cards } from '@/public/Data/card';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger)

const TesimonialSection = () => {
    const testimonialRef = useRef<HTMLDivElement | null>(null);


    useGSAP(() => {
        gsap.set(testimonialRef.current, { marginTop: '-140vh' });
        const cards = testimonialRef.current?.querySelectorAll('.card')
        // Position all cards below the viewport initially
        gsap.set('.card', { y: '100vh' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: testimonialRef.current,
                start: "top top",
                end: `+=${((cards?.length ?? 0) + 1) * 100}%`,
                pin: true,
                scrub: 1,
            }
        });



        // Animate each card sliding up from bottom
        cards?.forEach((card, index) => {
            tl.to(card, {
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, index * 1);
        });

        // Add pause at end before unpinning
        tl.to({}, { duration: 0.5 });

    }, { scope: testimonialRef });
    const handleCLick = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (e.currentTarget.paused) {
            e.currentTarget.play()
            
        } else {
            e.currentTarget.pause()
        }
    }
    const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement> ): void => {
        e.currentTarget.play()
        
    }
    const handleMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.pause()
    }

    return (
        /* Use h-screen to ensure the pinning doesn't create extra white space */
        <div ref={testimonialRef} className='relative z-10 w-full bg-milk overflow-hidden h-screen'>

            {/* Header Text Area */}
            <div className='relative pt-[10vh]'>
                <TextMoveAnim text="what's" x={500} />
                <TextMoveAnim black={false} text="everyone" x={400} />
                <TextMoveAnim text="talking" x={-600} />
            </div>

            {/* Cards Container - Using your original bottom positioning */}
            <div className='absolute bottom-[5vh] flex items-center justify-center w-full'>
                <div className='flex flex-col md:flex-row items-center justify-center '>
                    {cards.map((card, index) => (
                        <div

                            key={index}
                            className={`card 
                                md:w-[240px] lg:w-[270px] w-[270px] xl:w-[310px] 
                                flex-none rounded-2xl overflow-hidden border-8 border-black 
                                /* YOUR ORIGINAL CSS POSITIONING */
                                -mx-20 -mt-115 first:mt-0 md:mt-0 
                                relative 
                                ${card.rotation} ${card.translation}
                            `}
                            style={{ zIndex: index }}
                        >
                            <video onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e)=>handleMouseOut(e)} onClick={(e) => handleCLick(e)} src={card.src} loop muted playsInline className="w-full h-full object-cover"></video>
                            <div className='absolute  left-[2%] top-[88%] w-fit h-fit  inset-0 flex items-center justify-start gap-x-2'>
                                <div>
                                    <Image src={card.img} alt={card.name} height={40} width={40} className='object-cover h-14 w-14'/>
                                </div>
                                <p className='text-2xl font-antonio'>{card.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TesimonialSection;