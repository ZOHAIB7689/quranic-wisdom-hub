"use client"

import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const testimonials = [
  {
    name: "Ahmed Ali",
    title: "Student of Recitation Mastery",
    quote:
      "This platform has been a game changer for my Quran recitation. The lessons are structured perfectly, and I feel my recitation has improved significantly."
  },
  {
    name: "Sarah Khan",
    title: "Mother & Tajweed Essentials Learner",
    quote:
      "The Tajweed Essentials course made it easy for me to fit learning into my busy schedule. It’s flexible and thorough, making it perfect for moms like me."
  },
  {
    name: "Muhammad Usman",
    title: "Hifz Program Participant",
    quote:
      "The Hifz Program has helped me stay focused on my memorization goals. The guidance and structure made a huge difference in my progress."
  },
  {
    name: "Ayesha Fatima",
    title: "Recitation Mastery Enthusiast",
    quote:
      "The Recitation Mastery course is amazing! The personalized feedback helped me identify and correct my mistakes, and I’ve gained confidence in my recitation."
  },
  {
    name: "Bilal Ahmed",
    title: "Quran Basics Learner",
    quote:
      "I am very impressed with the quality of teaching on this platform. It’s clear and simple, and it has deepened my understanding of Quran basics."
  },
  {
    name: "Zainab Malik",
    title: "Parent of Kids Tajweed Learner",
    quote:
      "The Kids Tajweed course was perfect for my children. They loved the interactive lessons, and their recitation has improved drastically!"
  },
  {
    name: "Omar Hassan",
    title: "Tajweed Essentials Student",
    quote:
      "I’ve tried other platforms, but this one stands out with its detailed Tajweed lessons. I now understand the intricacies of correct recitation."
  },
  {
    name: "Fatima Zahra",
    title: "Hifz Program Student",
    quote:
      "Memorizing the Quran has always been a dream, and this platform made it easier to achieve. The structured lessons helped me stay on track."
  },
  {
    name: "Hassan Javed",
    title: "Recitation Mastery Learner",
    quote:
      "Reciting the Quran with proper Tajweed was always difficult for me, but after joining the Recitation Mastery course, I feel confident in my abilities."
  },
  {
    name: "Amina Siddiqui",
    title: "Parent of Hifz Program Learner",
    quote:
      "Enrolling my son in the Hifz Program was one of the best decisions I made. He’s progressing rapidly, and the instructors are incredibly supportive."
  },
  {
    name: "Yusuf Ibrahim",
    title: "Tajweed Essentials Learner",
    quote:
      "I learned the rules of Tajweed in a simple and practical way. The lessons are easy to follow, and the instructors provide valuable feedback."
  },
  {
    name: "Nadia Bukhari",
    title: "Parent of Kids Tajweed Student",
    quote:
      "My daughter loves the Kids Tajweed course. The lessons are fun and engaging, and she’s excited to recite the Quran with proper pronunciation."
  }
];


function Testimonials() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.18] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear Our Harmony: Voices of Success</h2>
   <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px8"><div className='w-full max-w-6xl '>
    <InfiniteMovingCards
    items={testimonials}
    direction='right'
    speed='slow'
    />
   </div>
   </div>
    </div>
  )
}

export default Testimonials
