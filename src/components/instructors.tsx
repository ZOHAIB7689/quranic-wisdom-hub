"use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-backgound'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors=[
   
  {
    id: 1,
    name: "Sheikh Ahmed Ali",
    designation: "Tajweed Expert",
    image: "/teacher3.jpeg"
  },
  {
    id: 2,
    name: "Dr. Aisha Farooq",
    designation: "Quranic Arabic Specialist",
    image: "/female1.jpeg"
  },
  {
    id: 3,
    name: "Imam Abdul Rahman",
    designation: "Hifz Program Leader",
    image: "/molana1.jpeg"
  },
  {
    id: 4,
    name: "Ustadh Kareem Musa",
    designation: "Recitation and Spiritual Coach",
    image: "/teacher5.jpeg"
  },
  {
    id: 5,
    name: "Sister Layla Hassan",
    designation: "Children’s Quran Instructor",
    image: "/female2.jpeg"
  }
];

    






export default function Instructors() {
  return ( 
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4" >Discover the talented professionals who will guide your this journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full" >
        <AnimatedTooltip items={instructors}/>

        </div>
      </WavyBackground>
    </div>
  )
}
