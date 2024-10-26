"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";




const content = [
  {
    title: "Why Join Us",
    description:
      "Our platform is dedicated to providing the highest quality Quranic education for learners of all levels. Whether you're a beginner or seeking to advance your recitation, memorization, or understanding of the Quran, our expertly designed courses and experienced instructors are here to guide you every step of the way."
  },
  {
    title: "Our Approach",
    description:
      "We combine traditional Quranic teachings with modern, engaging methods to ensure that every learner gains a deep understanding of the Quran. Our step-by-step curriculum is tailored to fit the needs of each student, offering both flexibility and structure. Learn at your own pace while receiving personalized guidance from our dedicated instructors."
  },
  {
    title: "What We Offer",
    description:
      "We offer a range of Quranic courses, including Quran Basics, Tajweed Essentials, Hifz Program, Recitation Mastery, and more. Each course is meticulously designed to cater to different levels, from beginners to advanced learners. Whether you’re learning to read, recite, or memorize the Quran, we have the perfect course for you."
  },
  {
    title: "Benefits of Joining Us",
    description:
      "By joining our platform, you’ll gain access to expert instructors, personalized learning paths, and a supportive community of learners. We offer flexible learning schedules, interactive lessons, and regular feedback to ensure that you make consistent progress on your Quranic journey."
  },
  {
    title: "How We Work",
    description:
      "Our platform uses a blend of live classes, recorded lessons, and interactive resources. You can learn at your own pace or opt for live sessions with experienced teachers who will guide you through your learning journey. Our goal is to make Quranic education accessible, flexible, and enriching for everyone."
  }
];


function WhyChooseUs() {

  return (
    <div className="">
      <StickyScroll contentClassName="overflow-y-scroll no-scrollbar" content={content} />
    </div>
  )
}

export default WhyChooseUs
