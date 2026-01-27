'use client'
import React, { useRef } from 'react';
import TextAnimationChar from './TextCharsAnim';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TextAnimation from './textReveal';
import Button from './Button';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const bgImg = 'https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a799f357e5045354c1d4e9_map.svg'

const Map = () => {
    
    const textCard = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(()=>{
        gsap.fromTo(textCard.current,
            { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: textCard.current,
                    start: 'top 80%',
                    
                    anticipatePin: 1,
                },
            }
        )
    },{scope: containerRef})

    return (
        <div ref={containerRef} className='min-h-[90vh] relative w-full '>
            <div style={{ backgroundImage: `url(${bgImg})` }} className='h-full z-5 absolute inset-0 bg-center bg-cover'>
            </div>
            <div className='absolute z-25 w-full flex flex-col justify-center md:items-start items-center text-6xl inset-0 md:text-8xl  xl:text-[150px] px-2 py-[3%] sm:px-[5%]'>
                <TextAnimationChar delay={0.2} style='font-bold capitalize font-antonio  text-milk  mt-12 tracking-tight px-2 leading-tight ' text='Right around' />
                <div style={{ willChange: 'clip-path' }} ref={textCard} className="inline-block  rotate-4  uppercase font-antonio">
                    <div className="bg-mid-brown px-4 sm:px-6 py-2.5 sm:py-4 pb-3">
                        <p className="text-milk font-bold ">the corner</p>
                    </div>
                </div>
                <div className='my-12'>
                    <TextAnimation style='text-lg md:text-2xl leading-tight max-w-[500px]  md:text-start text-center w-full' text='Buy our drinks at your local store or get them delivered (to your door).'/>
                </div>
                <Button bgColor='#222123' text='find in stores' textColor='#faeade'/>
            </div>
        </div>
    );
};

export default Map;