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
        gsap.set(testimonialRef.current, { y: '-140vh' })
        const cards = testimonialRef.current?.querySelectorAll('.card')
        // Position all cards below the viewport initially
        gsap.set(".card", { force3D: true })
        gsap.set(testimonialRef.current, { force3D: true })
        const mm = gsap.matchMedia()
        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isDesktop, isMobile } = context.conditions || {};
            if (isDesktop) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: testimonialRef.current,
                        start: "top top",
                        end: `+=${((cards?.length ?? 0) - 3) * 100}%`,
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    }

                });
                cards?.forEach((card, i) => {
                    tl.from(
                        card,
                        { yPercent: 150, ease: "power1.in" },
                        i * 0.3
                    )
                })


                // Add pause at end before unpinning
                // tl.to({}, { duration: 0.2 });
            }
            if (isMobile) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: testimonialRef.current,
                        start: "top top",
                        end: `+=${((cards?.length ?? 0) + 1) * 100}%`,
                        pin: true,
                        scrub: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    }
                });
                cards?.forEach((card, i) => {
                    tl.from(
                        card,
                        { yPercent: 150, ease: "power1.in" },
                        i * 0.5
                    )
                })
            }

            // Animate each card sliding up from bottom



        });

    }, { scope: testimonialRef });
    const handleCLick = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (!e.currentTarget.paused) {
            e.currentTarget.play()
        } else {
            e.currentTarget.pause()
        }
    }
    const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>): void => {
        e.currentTarget.play()

    }
    const handleMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.pause()
    }

    return (
        /* Use h-screen to ensure the pinning doesn't create extra white space */
        <div ref={testimonialRef} className=' z-10 w-full bg-milk overflow-hidden h-screen'>

            {/* Header Text Area */}
            <div className='relative pt-[10vh]'>
                <TextMoveAnim text="what's" x={800} />
                <TextMoveAnim black={false} text="everyone" x={500} />
                <TextMoveAnim text="talking" x={-800} />
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
                            <video onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseOut(e)} onClick={(e) => handleCLick(e)} src={card.src} loop muted playsInline className="w-full h-full object-cover"></video>
                            <div className='absolute  left-[2%] top-[88%] w-fit h-fit  inset-0 flex items-center justify-start gap-x-2'>
                                <div className='absolute top-[88%] left-3 flex items-center gap-2 bg-white/20 backdrop-blur-lg p-1.5 rounded-full pr-14'>
                                    <Image src={card.img} alt={card.name} height={40} width={40} className='rounded-full h-10 w-10 object-cover' />
                                    <p className='text-xl font-antonio leading-none'>{card.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TesimonialSection;