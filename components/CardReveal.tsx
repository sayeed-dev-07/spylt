'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

interface prop {
    text: string,
    white?: boolean,
    bgColor: string,
    rotate?: string
}

gsap.registerPlugin(ScrollTrigger)

const CardReveal = ({ text, white = true, bgColor, rotate }: prop) => {

    const cardRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger:{
                trigger:cardRef.current,
                start:'top 60%',
                end:'bottom 30%',
                scrub:0.5,
            }
            
        })
            .to(cardRef.current, {
                clipPath: ' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'power3.out',
            })

    })

    return (
        <div style={{ clipPath: 'polygon(49% 0, 49% 0, 50% 100%, 50% 100%)', willChange: 'clip-path' }} ref={cardRef} className={`bg-black p-1 sm:p-3  w-fit mx-auto ${rotate}`}>
            <div style={{ backgroundColor: bgColor }} className={`${white ? 'text-milk' : 'text-black'}  text-5xl md:text-8xl  xl:text-[150px] text-center font-antonio uppercase font-bold tracking-tighter pb-5 py-3 px-3 sm:px-14 `}>
                {text}
            </div>
        </div>
    );
};

export default CardReveal;