

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react';
import ReviewSection from './ReviewSection';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const reviewWrapperRef = useRef<HTMLDivElement | null>(null);
    const circleImg = useRef(null)
    useGSAP(() => {
        gsap.to(circleImg.current, {
            rotate: '+=360',
            repeat: -1,
            duration: 8,
            ease: 'none'
        })

        const mm = gsap.matchMedia()
        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isDesktop, isMobile } = context.conditions || {};
            if (isDesktop) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '300%',
                        scrub: 0.5,
                        pin: true
                    },
                })
                gsap.set(containerRef.current, {
                    clipPath: 'circle(7.5% at 50% 50%)'
                })
                tl.to(containerRef.current, {
                    clipPath: 'circle(100% at 50% 50%)'
                })
            }
            if (isMobile) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '150%',
                        scrub: 0.5,
                        pin: true
                    },
                })
                gsap.set(containerRef.current, {
                    clipPath: "none"
                })

            }
        });

    })

    return (
        <div ref={containerRef} className=' min-h-screen w-full relative'>
            <video className='w-full h-full object-cover' src="/videos/pin-video.mp4" playsInline loop autoPlay muted ></video>
            <div className='absolute w-full h-full inset-0 flex items-center justify-center'>
                <div className='sm:w-[8vw] w-[12vw] h-[12vw] sm:h-[8vw]'>
                    <div className='rounded-full backdrop-blur-2xl h-full w-full relative flex items-center justify-center'>
                        <Image alt='play' src={'/images/play.svg'} width={120} height={120} className='object-cover w-[4vw] sm:w-[2.5vw]' />
                    </div>
                    <Image ref={circleImg} alt='circle' src={'/images/circle-text.svg'} width={120} height={120} className='object-cover w-[20vw] sm:w-[12vw] absolute inset-0 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2' />
                </div>
            </div>
        </div>
    );
};

export default VideoSection;