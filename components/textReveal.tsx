'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger)

const TextAnimation = ({ text, style }: { text: string, style?: string,scrub?: boolean }) => {
    const textRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!textRef.current) return

        const split = SplitText.create(textRef.current, {
            type: 'lines, words',
            mask:'lines'
        })
        gsap.set(split.chars, { 
            force3D: true,
            willChange: 'transform, opacity'
        });
        gsap.from(split.lines, {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
                once: true,
            },
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.15,
            autoAlpha: 0,
            yPercent: 100,
        })

        return () => split.revert()
    }, { scope: textRef })



    return (
        <div ref={textRef} className={`${style} will-change-auto`}>
            {text}
        </div>
    );
};

export default TextAnimation;