'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';

gsap.registerPlugin(SplitText);

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!paragraphRef.current || !containerRef.current) return;

        // 1. Make the base paragraph visible immediately before splitting
        // This prevents the 'opacity-0' class from hiding the children
        gsap.set(paragraphRef.current, { opacity: 1, visibility: 'visible' });

        // 2. Create the split
        const textSplit = new SplitText(paragraphRef.current, {
            type: 'chars',
            charsClass: 'split-char' // Adding a class helps debug/style
        });

        // 3. Set the initial state of the characters
        // We use autoAlpha (opacity + visibility) for better performance
        gsap.set(textSplit.chars, { 
            autoAlpha: 0, 
            force3D: true,
            willChange: 'transform, opacity'
        });

        const tl = gsap.timeline({
            onComplete: onComplete,
            delay: 0.5,
        });

        tl.fromTo(textSplit.chars, 
            {
                yPercent: (i) => i % 2 === 0 ? 100 : -100,
                autoAlpha: 0,
            },
            {
                yPercent: 0,
                autoAlpha: 1,
                stagger: 0.03, // Using a fixed number is often smoother than 'amount' on low-end
                duration: 0.8,
                ease: 'power2.out',
            }
        )
        .to(containerRef.current, {
            autoAlpha: 0,
            duration: 0.5,
        }, '+=0.5');

        return () => {
            textSplit.revert();
        };
    }, { scope: containerRef });

    return (
        // Added 'visibility: hidden' to prevent a flash of text before JS loads
        <div 
            ref={containerRef}
            className='fixed inset-0 z-[9999] flex items-center justify-center bg-dark-brown text-white'
             
        >
            <p 
                ref={paragraphRef} 
                className='font-lobster text-7xl md:text-9xl'
                style={{ opacity: 0 }} // Start hidden, JS will reveal
            >
                Spylt
            </p>
        </div>
    );
};

export default IntroAnimation;