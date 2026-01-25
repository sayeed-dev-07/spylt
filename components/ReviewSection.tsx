'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const ReviewSection = () => {
    const reviewContainer = useRef<HTMLDivElement | null>(null)
    const p1Ref = useRef<HTMLParagraphElement | null>(null)
    const p2Ref = useRef<HTMLParagraphElement | null>(null)
    const p3Ref = useRef<HTMLParagraphElement | null>(null)

    useGSAP(() => {
        // This timeline triggers when the top of this section 
        // enters the bottom of the viewport
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: reviewContainer.current,
                start: 'top bottom', // Start animating as soon as the top enters from the bottom
                end: 'top top',    // Finish animating once it is fully covering the video
                scrub: 0.5,
            }
        })

        tl.to(p1Ref.current, {
            yPercent: -20,
            xPercent: 15,
            ease: "none"
        }, 0)

        tl.to(p2Ref.current, {
            yPercent: -10,
            xPercent: 5,
            ease: "none"
        }, 0)

        tl.to(p3Ref.current, {
            yPercent: -20,
            xPercent: -15,
            ease: "none"
        }, 0)

    }, { scope: reviewContainer }) // Scoping keeps selectors clean

    return (
        <div 
            ref={reviewContainer} 
            className='h-[130vh] w-full relative z-10 text-black bg-milk uppercase text-5xl md:text-8xl font-antonio tracking-wider font-bold xl:text-[220px] text-center py-[10%] flex flex-col gap-y-24'
        >
            <p ref={p1Ref} className="will-change-transform">What&apos;s</p>
            <p ref={p2Ref} className='text-light-brown will-change-transform'>everyone</p>
            <p ref={p3Ref} className="will-change-transform">thinking</p>
        </div>
    );
};

export default ReviewSection;