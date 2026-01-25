'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const TesimonialSection = () => {
    const testimonialRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()
        gsap.set(testimonialRef.current, {
            marginTop: '-140vh'
        })
        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isDesktop, isMobile } = context.conditions || {};


        });


    })

    return (
        <div ref={testimonialRef} className='h-[120vh] relative z-10 w-full bg-milk'>

        </div>
    );
};

export default TesimonialSection;