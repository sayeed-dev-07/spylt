'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import TextColorReveal from './TextColorReveal';
import TextAnimation from './textReveal';

gsap.registerPlugin(ScrollTrigger)

const TextSection = () => {
    const textSectionRef = useRef(null)
    const textCard = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textCard.current,
                start: 'top 90%',
                end: 'bottom 30%',
                scrub: 0.5,
                invalidateOnRefresh: true,
            }
        })
        tl.from(textCard.current, {
            clipPath:'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            ease: 'power3.inOut',
        })

    },{scope: textSectionRef})

    return (
        <div ref={textSectionRef} className='py-[5%]  text-[#8c4f42] h-[110vh] text-center bg-red-brown text-5xl md:text-8xl  xl:text-[130px] font-antonio uppercase flex items-center   sm:justify-center justify-start flex-col overflow-hidden font-bold  tracking-tighter'>
            <TextColorReveal text='Stir up your
                fearless past and'/>
            <div style={{clipPath:'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)', willChange:'clip-path'}} ref={textCard} className='p-4 w-fit bg-red-brown rotate-8 relative z-10 will-change-transform'>
                <div className='px-6 py-3 pb-5 bg-light-brown'>
                    <p className='text-red-brown text-nowrap'>FUEL UP</p>
                </div>
            </div>
            <TextColorReveal text='your future with every
                gulp of Perfect Protein'/>
            <TextAnimation style='font-normal text-lg capitalize font-nunito w-full max-w-[500px] text-milk mx-auto text-center mt-12 tracking-tight px-2 leading-tight' text='Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.' />
        </div>
    );
};

export default TextSection;