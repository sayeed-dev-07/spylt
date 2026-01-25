'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const TextMoveAnim = ({ x, black = true, text }: { x: number, black?: boolean, text: string }) => {
    const textConRef = useRef<HTMLParagraphElement | null>(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isDesktop, isMobile } = context.conditions || {};
            if (isDesktop) {
                gsap.to(textConRef.current, {
                    scrollTrigger: {
                        trigger: textConRef.current,
                        start: 'top 70%',
                        end: '+=700%',
                        scrub: 0.5, 
                    },
                    x: x,
                    y:-400
                })
            }
            if (isMobile) {
                gsap.to(textConRef.current, {
                    scrollTrigger: {
                        trigger: textConRef.current,
                        start: 'top 60%',
                        end: '+=650%',
                        scrub: 0.5,
                    },
                    x: x,
                })
            }

        });

    })

    return (
        <p ref={textConRef} className={`uppercase text-[20.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold font-antonio ${black ? 'text-black' : 'text-light-brown'}`}>{text}</p>
    );
};

export default TextMoveAnim;