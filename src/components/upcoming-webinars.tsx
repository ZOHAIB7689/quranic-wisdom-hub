"use client"
import React from 'react'
import Link from 'next/link'
import { CardDescription, HoverEffect } from './ui/card-hover-effect'

function UpcomingWebinars() {
  const upcomingWebinars = [
    {
      title: "Unlocking the Secrets of Quranic Sound",
      description:
        "Discover the science behind the sounds of the Quran! This webinar explores the acoustic beauty of Tajweed and how mastering it can create a deeper, emotional connection to the recitation. Get hands-on with sound techniques you’ve never thought of before.",
      slug: "quranic-sound-secrets"
    },
    {
      title: "Hifz Hacks: Modern Memory Techniques for Quran",
      description:
        "Ever thought of applying memory techniques used by world memory champions to your Hifz journey? In this interactive webinar, we’ll explore modern, research-backed methods to supercharge your Quran memorization process.",
      slug: "hifz-hacks"
    },
    {
      title: "Tajweed in 3D: Visualizing Quran Recitation",
      description:
        "Experience Tajweed like never before! This webinar uses 3D visuals and augmented reality concepts to help you visualize how each letter is formed in the mouth, ensuring accuracy in your Quran recitation. A must-attend for visual learners!",
      slug: "tajweed-3d"
    },
    {
      title: "Quran Learning Through Storytelling",
      description:
        "For parents and teachers, this unique webinar turns Quran learning into a storytelling adventure. Learn how to captivate children’s attention by weaving Quranic lessons into exciting stories that ignite curiosity and joy.",
      slug: "quran-storytelling"
    },
    {
      title: "Mindfulness in Quran Recitation: A Spiritual Reset",
      description:
        "Bring mindfulness into your Quran recitation. This webinar teaches techniques to slow down, focus on the meanings of verses, and create a meditative experience that brings peace to both the mind and soul.",
      slug: "mindfulness-quran"
    },
    {
      title: "Dynamic Salah: Enhancing Your Prayer with Quranic Gems",
      description:
        "Learn how to personalize your Salah by incorporating powerful Quranic verses. In this interactive webinar, discover lesser-known gems from the Quran to recite during prayer, deepening your spiritual connection.",
      slug: "dynamic-salah"
    },
    {
      title: "The Art of Listening: Advanced Tajweed through Sound Analysis",
      description:
        "This advanced webinar focuses on the art of listening, using sound analysis to improve your Tajweed. We’ll dive into how sound waves and frequencies impact your recitation and teach you how to fine-tune your listening skills for flawless recitation.",
      slug: "art-of-listening"
    },
    {
      title: "Quran on the Go: Integrating Recitation in a Busy Life",
      description:
        "Learn how to incorporate Quran recitation into your daily routine, even if you're constantly on the move. In this webinar, we’ll share creative tips to make Quran learning fit into a busy lifestyle, without losing its depth and meaning.",
      slug: "quran-on-the-go"
    },
    {
      title: "Healing Through the Quran: Mental Health & Spirituality",
      description:
        "Explore how the Quran can be a source of healing for mental health challenges. This webinar, guided by Islamic scholars and mental health professionals, offers insights into the Quran's therapeutic power for emotional well-being.",
      slug: "healing-through-quran"
    }
  ];
  return (
    <div className='p-12 bg-gray-900 '>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
                    
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Upcoming Webinars
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhace your islamic knowledge</p>


        </div>
        <div className="mt-10">
            <HoverEffect items={upcomingWebinars.map(webinar => ({
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`
            }))} />

        </div>
        <div className="mt-10 text-center">
              <Link href={`/#`}>Learn More</Link>
                

        </div>
         </div>
    </div>
  )
}

export default UpcomingWebinars