/* eslint-disable react/jsx-no-comment-textnodes */
'use client'
import React, { useRef } from 'react';
import TextAnimationChar from './TextCharsAnim';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard';

gsap.registerPlugin(ScrollTrigger)

const Products = () => {
    const textCard = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const movingWrap = useRef<HTMLDivElement | null>(null) // New ref for the horizontal track

    useGSAP(() => {
        if (!movingWrap.current || !containerRef.current) return

        gsap.to(movingWrap.current, {
            x: () =>
                -(movingWrap.current!.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: () =>
                    `+=${movingWrap.current!.scrollWidth - window.innerWidth + 100}`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        })

        gsap.from(textCard.current, {
            x: -80,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: textCard.current,
                start: 'top 80%',
            },
        })
    }, { scope: containerRef })


    return (
        /* The containerRef stays pinned in place */
        <div ref={containerRef} className='h-screen overflow-hidden bg-milk'>

            {/* The movingWrap is what actually slides left and right */}
            <div ref={movingWrap} className='flex h-full w-max items-center px-[5vw]'>

                {/* Hero / Text Section */}
                <div className='flex-shrink-0 w-[40vw] flex flex-col justify-center items-center'>
                    <div className='w-full text-center text-dark-brown text-5xl md:text-8xl xl:text-[130px] font-antonio uppercase flex items-center justify-center flex-col font-bold'>
                        <TextAnimationChar text='We have 6' />
                        <div ref={textCard} className='p-4 w-fit bg-milk -rotate-4 relative z-10 will-change-transform'>
                            <div className='px-6 py-3 pb-5 bg-mid-brown'>
                                <p className='text-milk text-nowrap'>freaking</p>
                            </div>
                        </div>
                        <TextAnimationChar delay={0.7} text='delicious flavors' />
                    </div>
                </div>

                <ProductCard Num={0} />
                <ProductCard Num={4} rotate='left' />
                <ProductCard Num={2} />
                <ProductCard Num={3} rotate='left' />
                

            </div>
        </div>
    );
};

export default Products;