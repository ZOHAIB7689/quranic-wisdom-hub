"use client"

import React from "react";
import CourseData from "../data/courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";



interface Course{
    id : number,
    title :string,
    slug:string, // Corrected typo from 'slugs' to 'slug'
    description :string,
    price:number,
    instructor: string,
    isFeatured:boolean,
    image: string // Added missing property 'image'
}

export default function FeaturedCourses() {
const featuredCourses =CourseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"> Learn the best</p>
      </div>
      <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        
            {featuredCourses.map((course :Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-zinc900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6  flex flex-col bg-slate-800   items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-neutral-200 mt-4 mb-2">{course.title}</p>
                    <p className="text-sm text-neutral-400 flex-grow">{course.description}</p>
                    <Link href={`/courses/${course.slug}`}>Learn More</Link>
                  </div>
                </BackgroundGradient>





              </div>
              
            ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/courses"
        className="px-4 py-2 rounded-lg hover:bg-teal-700 bg-sky-700 hover:border-2 border border-stone-800 transition duration-200"
        > View all courses</Link> </div>
    </div>
  );
}
