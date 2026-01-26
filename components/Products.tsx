'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextAnimationChar from './TextCharsAnim'
import SliderWrapper from './SliderWrapper'

gsap.registerPlugin(ScrollTrigger)

const Products = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const pinRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null)
    const textCard = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!wrapperRef.current || !pinRef.current || !trackRef.current) return

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.set(trackRef.current, { force3D: true, z: 0.01 });
            const getScrollAmount = () =>
                trackRef.current!.scrollWidth - window.innerWidth

            const EXTRA_SPACE = () => window.innerWidth * 0.2

            gsap.to(trackRef.current, {
                x: () => -(getScrollAmount() + EXTRA_SPACE()),
                ease: "none",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    pin: true,
                    start: "top top",
                    end: () => `+=${getScrollAmount() + EXTRA_SPACE()}`,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            })
           
        })

        // Text reveal
        gsap.fromTo(textCard.current,
            { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: textCard.current,
                    start: 'top 80%',
                    end:'bottom 20%',
                    scrub:0.5,
                },
            }
        )
    }, { scope: wrapperRef })

    return (
        <section ref={wrapperRef} className="overflow-hidden  bg-milk">
            <div ref={pinRef} className="min-h-screen  flex items-center justify-center lg:justify-start px-5">
                <div
                    ref={trackRef}
                    className="flex flex-col lg:flex-row flex-nowrap  will-change-transform  px-1 py-[5%] gap-y-24"
                >
                    {/* 1. Text section */}
                    <div className="w-screen flex-none flex text-dark-brown justify-center">
                        <div className="text-center font-antonio uppercase font-bold text-5xl md:text-8xl xl:text-[130px]">
                            <TextAnimationChar text="We have 6" />
                            <div style={{ willChange: 'clip-path' }} ref={textCard} className="inline-block bg-milk -rotate-4 p-4">
                                <div className="bg-mid-brown px-6 py-4">
                                    <p className="text-milk">freaking</p>
                                </div>
                            </div>
                            <TextAnimationChar text="delicious flavors" />
                        </div>
                    </div>

                    {/* 2. Slider Cards */}

                    <SliderWrapper />


                </div>
            </div>
        </section>
    )
}

export default Products