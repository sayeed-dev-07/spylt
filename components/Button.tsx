'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

interface Props {
  text: string
  bgColor?: string
  textColor?: string
}

const Button = ({
  text,
  bgColor = '#e3a458',
  textColor = '#523122',
}: Props) => {
  const buttonRef = useRef<HTMLDivElement | null>(null)
  const tl = useRef<GSAPTimeline | null>(null)

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Initial states
        gsap.set('.text1', { y: '0%' })
        gsap.set('.text2', { y: '100%' })

        // Timeline
        tl.current = gsap.timeline({ paused: true })
          .to('.text1', {
            y: '-100%',
            duration: 0.35,
            ease: 'power2',
          })
          .to(
            '.text2',
            {
              y: '0%',
              duration: 0.35,
              ease: 'power2',
            },
            0
          )
      }, buttonRef)

      return () => ctx.revert()
    },
    { scope: buttonRef }
  )

  return (
    <div
      ref={buttonRef}
      onMouseEnter={() => tl.current?.timeScale(1).play()}
      onMouseLeave={() => tl.current?.timeScale(1.5).reverse()}
      style={{ backgroundColor: bgColor, color: textColor }}
      className="
        sm:px-12 sm:py-6 py-3 px-6 rounded-full text-lg sm:text-2xl font-antonio uppercase font-semibold
        cursor-pointer overflow-hidden transform-gpu
      "
    >
      <div className="relative h-[1em] overflow-hidden">
        <p className="text1 leading-none">{text}</p>
        <p className="text2 absolute left-0 top-0 leading-none">{text}</p>
      </div>
    </div>
  )
}

export default Button
