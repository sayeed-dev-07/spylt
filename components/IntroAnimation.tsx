'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';


gsap.registerPlugin(SplitText)

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
    
    const ParagraphRef = useRef<HTMLParagraphElement | null>(null);
    useGSAP(()=>{
        if (!ParagraphRef.current) {
            return
        }
        const tl = gsap.timeline({onComplete: onComplete, delay:0.5});
        gsap.set(ParagraphRef.current, {
            opacity: 1
        })
        const textSplit = SplitText.create(ParagraphRef.current, {
            type:'chars, words',
        })
        
        tl.fromTo(textSplit.chars,{
            y: (i)=> i % 2 === 0 ? 100 : -100,
            autoAlpha: 0,
        },{
            y:0,
            autoAlpha:1,
            stagger:{
                amount:1,
            },
            ease:'power3.inOut'
        })
        tl.to('.introContainer',{
            autoAlpha:0,
            duration:0.5,
            ease:'power3.out'
        },'+=0.4')
        
        return () => {
            textSplit.revert();
        }
    })
    return (
        <div className='fixed introContainer inset-0 z-9999 flex-center text-9xl  bg-dark-brown text-white'>
            <p ref={ParagraphRef} className='font-lobster transform-gpu opacity-0 will-change-transform'>Spylt</p>
        </div>
    );
};

export default IntroAnimation;