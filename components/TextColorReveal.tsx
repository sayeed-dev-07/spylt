/* eslint-disable react-hooks/refs */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText)

const TextColorReveal = ({ text }: { text: string }) => {
    const textContainer = useRef<HTMLParagraphElement | null>(null)

    useGSAP(() => {
        const splitText = SplitText.create(textContainer.current, {
            type: 'words, lines',
            mask: 'lines',
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textContainer.current,
                start: 'top 60%',
                end: '+=300px',
                scrub: true,
            }
        })
        tl.to(splitText.words, {
            color: '#faeade',
            stagger:0.4,
            ease: 'power3'
        })
    })

    return (
        <p className='max-w-300 w-full text-[#8c4f42]' ref={textContainer}>
            {text}
        </p>
    );
};

export default TextColorReveal;