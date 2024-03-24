import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)
const timeline = gsap.timeline()

function PreLoader() {
  useGSAP(() => {
    timeline.from('#border', {
      delay: 0.8,
      width: 0,
      duration: 0.8,
      ease: "power4.out",
    })
    timeline.to('h1', {
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
    timeline.to('h1', {
      delay: 0.8,
      y: 100,
      duration: 1,
      ease: "power1.out",
    })
    timeline.to('#border', {
      width: 0,
      duration: 0.8,
      ease: "power4.out",
    })
    timeline.to('.preloader', {
      opacity: 0,
      x: "-100%",
      duration: 1,
      display: "none",
      ease: "power4.out",
    })
  })

  return (
    <>
      <div className="preloader w-full h-screen flex items-center justify-center overflow-hidden absolute z-50 bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
        <div id='border' className='border-b-[1.6px] border-zinc-400 overflow-hidden'>
          <h1 className="text-5xl font-bold relative translate-y-full text-nowrap">Short Url.</h1>
        </div>
      </div >
    </>
  )
}

export default PreLoader