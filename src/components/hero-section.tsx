import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

export default function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center relative overflow-hidden mx-auto py-10 md:py-0 justify-center'>
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-gray-400">Unlock the Wisdom of the <span className='bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-gray-400'>Quran</span></h1>
        <p className="mt-4 font-normal text-base md:text-large text-neutral-300 max-w-lg mx-auto">Embark on a transformative journey to deepen your connection with the Quran. Our expert-led courses cover Tajweed, Recitation, and Memorization, guiding learners of all levels to master the Quran with precision and understanding.</p>
        <div className="mt-4">
            <Link href={"/courses"}>
            <Button borderRadius='1.75rem' className="bg-black border-2 text-white font-semibold border-slate-800" >Explore Courses</Button>
            </Link>
        </div>
      </div>



    </div>
  )
}
