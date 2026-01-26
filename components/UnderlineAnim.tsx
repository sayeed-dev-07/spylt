/* eslint-disable react-hooks/refs */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const UnderlineAnim = ({ text }: { text: string }) => {
    const lineRef = useRef<HTMLDivElement | null>(null);

    // useGSAP handles scoping and cleanup automatically
    const { contextSafe } = useGSAP(() => {
        // Initial state: ensure the line is hidden to the left
        gsap.set(lineRef.current, { x: '-105%' });
    });

    const handleMouseEnter = contextSafe(() => {
        // Animate from left (-100%) to center (0%)
        gsap.to(lineRef.current, {
            x: 0,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto' // Important: stops any current "leave" animation
        });
    });

    const handleMouseLeave = contextSafe(() => {
        // Animate from center (0%) out to the right (100%)
        gsap.to(lineRef.current, {
            x: '100%',
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
                // Once off-screen to the right, instantly reset to the left
                gsap.set(lineRef.current, { x: '-104%' });
            }
        });
    });

    return (
        <div 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            className='inline-block cursor-pointer overflow-hidden w-fit'
        >
            <p className="pb-1">{text}</p>
            <div 
                ref={lineRef} 
                className='h-[2px] w-full bg-milk'
            ></div>
        </div>
    );
};

export default UnderlineAnim;