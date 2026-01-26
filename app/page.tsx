'use client'
import BenefitSection from "@/components/BenefitSection";
import BottomLayer from "@/components/BottomLayer";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Products from "@/components/Products";
import TesimonialSection from "@/components/TesimonialSection";
import TextSection from "@/components/TextSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containeRef = useRef<HTMLDivElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: '1% top',
        end: 'bottom top',
        scrub: true,
      }
    })
    tl.to(heroRef.current, {
      rotate: '12deg',
      scale: 0.92,
      y: 400,
      ease: 'power1.inOut'
    })
  }, { scope: containeRef })

  return (
    <div ref={containeRef} className="overflow-hidden">
      <div className="z-2 will-change-transform" ref={heroRef}>
        <Hero />
      </div>
      <div className="z-5 relative">
        <TextSection />
      </div>
      <Products />
      <Details />
      <BenefitSection />
      <TesimonialSection />
      <div className="mt-[-140vh]">
        <BottomLayer/>
      </div>
      <Map/>
      <Footer/>
    </div>

  );
}