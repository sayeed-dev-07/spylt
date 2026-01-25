/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react';
import ReviewSection from './ReviewSection';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const reviewWrapperRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                // Increased end to account for the extra 20vh height
                end: '+=250%', 
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            }
        });

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            // @ts-ignore
            const { isDesktop } = context.conditions;

            if (isDesktop) {
                gsap.set(sectionRef.current, { clipPath: 'circle(4% at 50% 50%)' });
                tl.to(sectionRef.current, {
                    clipPath: 'circle(100% at 50% 50%)',
                    ease: 'none'
                });
            } else {
                gsap.set(sectionRef.current, { clipPath: 'none' });
            }

            // SLIDE LOGIC:
            // We animate 'y' instead of 'yPercent' for more precision with mixed vh units
            tl.fromTo(reviewWrapperRef.current, 
                { y: "100vh" }, // Start completely below the video
                { y: "0vh", ease: 'none' } // Slide up until the top hits the top
            );
            
            // Optional: If you want the review section to keep sliding 
            // so the user sees the bottom 20vh while still pinned:
            tl.to(reviewWrapperRef.current, {
                y: "-20vh", // Pulls the bottom 20vh into view
                ease: 'none'
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden">
            {/* 1. Video Layer: Fixed at 100vh */}
            <div
                ref={sectionRef}
                className='relative h-screen w-full overflow-hidden bg-black'
            >
                <div className='absolute inset-0 w-full h-full z-0'>
                    <video autoPlay muted loop playsInline className='h-full w-full object-cover'>
                        <source src="/videos/pin-video.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className='relative z-10 h-full w-full flex items-center justify-center'>
                    <div className='p-8 md:p-12 bg-white/20 rounded-full backdrop-blur-md border border-white/30'>
                        <Image alt='play' width={40} height={40} src={'/images/play.svg'} className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                </div>
            </div>

            {/* 2. Review Layer: Set to 120vh */}
            <div 
                ref={reviewWrapperRef}
                className='absolute top-0 left-0 z-20 w-full min-h-[130vh]'
            >
                <ReviewSection />
            </div>
        </div>
    );
};

export default VideoSection;