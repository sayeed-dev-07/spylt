'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const VideoSection = () => {
    const sectionRef = useRef<HTMLDivElement|null>(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()

        // Using 768px to align with Tailwind's 'md' breakpoint
        mm.add("(min-width: 768px)", () => {
            
            // Initial state for desktop only (prevents flash of full video)
            gsap.set(sectionRef.current, { clipPath: 'circle(4% at 50% 50%)' });

            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=100%', // Using relative values is safer for pinning
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                }
            })

            tl.to(sectionRef.current, {
                clipPath: 'circle(100% at 50% 50%)',
                ease: 'none' // Scrubbed animations feel smoother with 'none'
            })
        });

        // Cleanup: On mobile, ensure clipPath is removed if user resizes window
        mm.add("(max-width: 767px)", () => {
            gsap.set(sectionRef.current, { clipPath: 'none' });
        });

    }, { scope: sectionRef })

    return (
        /* Removed the inline style. 
           Added 'md:clip-path-...' to set the initial state in CSS 
           so it's clipped immediately on page load for desktop.
        */
        <div 
            ref={sectionRef} 
            className='relative h-screen w-full overflow-hidden bg-black md:clip-path-[circle(4%_at_50%_50%)]'
        >
            {/* 1. The Video Background */}
            <div className='absolute inset-0 w-full h-full z-0'>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='h-full w-full object-cover'
                >
                    <source src="/videos/pin-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* 2. Centered Content Overlay */}
            <div className='relative z-20 h-full w-full flex items-center justify-center'>
                <div className='p-8 md:p-12 bg-white/20 rounded-full backdrop-blur-md border border-white/30'>
                    <Image alt='play' width={40} height={40} src={'/images/play.svg'} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
            </div>
        </div>
    );
};

export default VideoSection;