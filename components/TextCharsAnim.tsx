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
        gsap.set(textRef.current, { opacity: 1, visibility: 'visible' });
        const split = SplitText.create(textRef.current, {
            type: 'chars, lines',
            mask:'lines'
        })
        gsap.set(split.chars, {
            yPercent:100, 
            autoAlpha: 0, 
            force3D: true,
            willChange: 'transform, opacity'
        });

        gsap.to(split.chars, {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
                once: true,
            },
            
            ease: 'power3.out',
            stagger:0.04,
            delay:delay,
            autoAlpha: 1,
            yPercent: 0,
        })

        return () => split.revert()
    }, { scope: textRef })



    return (
        <div ref={textRef} className={`${style} `} style={{opacity:0, visibility:'hidden'}}>
            {text}
        </div>
    );
};

export default TextAnimationChar;