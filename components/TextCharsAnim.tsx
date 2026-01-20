'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger)

const TextAnimationChar = ({ text, style, delay=0 }: { text: string, style?: string,scrub?: boolean, delay?: number }) => {
    const textRef = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        if (!textRef.current) return

        const split = SplitText.create(textRef.current, {
            type: 'chars, lines',
            mask:'lines'
        })

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
                once: true,
            },
            
            ease: 'power3.out',
            stagger: {
                amount:0.5
            },
            delay:delay,
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

export default TextAnimationChar;