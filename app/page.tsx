'use client'
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import TextSection from "@/components/TextSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containeRef = useRef<HTMLDivElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:heroRef.current,
        start:'top top',
        end:'+=100%',
        scrub:true,
      }
    })
    tl.to(heroRef.current,{
      rotate:'14deg',
      scale:0.8
    })
  },{scope:containeRef})

  return (
    <div ref={containeRef} className="overflow-hidden">
     <div className="z-2 will-change-transform" ref={heroRef}>
        <Hero/>
     </div>
     <div className="z-5 relative">
      <TextSection/>
     </div>
     <Products/>
    </div>
  );
}