'use client'
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger)


const Hero = () => {
    const textRef = useRef<HTMLParagraphElement | null>(null)
    const textRef2 = useRef<HTMLParagraphElement | null>(null)
    const textContainer = useRef<HTMLDivElement | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    useEffect(() => {
        const timer = setTimeout(() => {
            videoRef.current?.play()
        }, 2000) // delay in ms

        return () => clearTimeout(timer)
    }, [])

    useGSAP(() => {
        if (!textContainer.current || !textRef.current || !textRef2.current) return

        const ctx = gsap.context(() => {
            const splitTitle = SplitText.create(textRef.current, {
                type: 'chars,lines',
                mask: 'lines',
            })

            const splitDesc = SplitText.create(textRef2.current, {
                type: 'lines',
                mask: 'lines',
            })

            gsap.set([...splitTitle.chars], {
                y: 100,
                autoAlpha: 0,
            })

            const tl = gsap.timeline({
                delay: 3
            })
        
            tl.from(textContainer.current, {
                y: 60,
                autoAlpha: 0,
                duration: 0.6,
                ease: 'power3.out',
            })
                .to(splitTitle.chars, {
                    y: 0,
                    autoAlpha: 1,
                    stagger: { amount: 0.5 },
                    ease: 'power3.out',
                })
                .from(
                    splitDesc.lines,
                    {
                        y: 20,
                        stagger: { amount: 0.2 },
                        ease: 'power3.out',
                    },
                    '-=0.4'
                )
            return () => {
                splitTitle.revert()
                splitDesc.revert()
            }
        }, textContainer)

        return () => ctx.revert()
    }, [])


    return (
        <div className='hero h-screen w-full flex-center relative '>
<<<<<<< HEAD
            <div className='background relative w-full h-full after:content-[""] after:w-full after:h-full after:absolute after:inset-0 after:z-2 after:bg-black/15'>
=======
            <div className='background relative w-full h-full after:content-[""] after:w-full after:h-full after:absolute after:inset-0 after:z-2 after:bg-black/5'>
>>>>>>> 4d96ff6 (Initial commit)
                <video ref={videoRef} muted playsInline className='absolute inset-0 z-[-1] h-full w-full object-cover'>
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
            </div>
<<<<<<< HEAD
            <div ref={textContainer} className='absolute h-full w-full top-0 left-0 inset-0 flex-center   text-5xl md:text-8xl  xl:text-[150px] flex flex-col z-5 gap-y-8 md:gap-y-5 '>
=======
            <div ref={textContainer} className='absolute h-full w-full top-0 left-0 inset-0 flex-center   text-5xl md:text-8xl  xl:text-[145px] flex flex-col z-5 gap-y-8 md:gap-y-5 '>
>>>>>>> 4d96ff6 (Initial commit)
                <div className='font-antonio uppercase font-bold text-center'>
                    <p ref={textRef} className='text-dark-brown tracking-tighter mb-2'>Freaking Delicious
                    </p>
                    <div className='sm:p-3 p-1.5  transform -rotate-2 bg-milk'>
<<<<<<< HEAD
                        <div className='px-2 pb-3 py-0.5 bg-light-brown leading-12 sm:leading-20 md:leading-30 xl:leading-45'>
=======
                        <div className='px-2 pb-3 py-0.5 bg-mid-brown leading-12 sm:leading-20 md:leading-30 xl:leading-40'>
>>>>>>> 4d96ff6 (Initial commit)
                            <p className='text-[#fce1cd] tracking-tighter'>Protein + Caffeine</p>
                        </div>
                    </div>
                </div>
                <p ref={textRef2} className='text-xl font-semibold text-red-brown font-normal font-nunito max-w-[500px] mx-auto text-center tracking-tight px-2 leading-tight '>Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</p>
                <Button text='Chug a Spylt' />
            </div>
        </div>
    );
};

export default Hero;