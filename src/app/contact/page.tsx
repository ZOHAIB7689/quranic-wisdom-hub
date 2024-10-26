"use client"

import { Meteors } from '@/components/ui/meteors'
import React from 'react'

function ContactUs() {
  return ( 
    <div className="bg-zinc-950 p-5 rounded-lg shadow-md min-h-screen">
      <h1 className="text-3xl md:text-7xl font-bold text-center mt-32 text-gray-200 mb-4">Get in Touch</h1>
     <div className='w-full flex justify-center'> <form className="flex flex-col w-full sm:w-1/2 justify-center gap-4">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="name" className="text-sm  font-bold text-gray-400">Name:</label>
          <input type="text" id="name" name="name" required className="p-2 border border-gray-300 bg-stone-800/50 rounded-md w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold text-gray-400">Email:</label>
          <input type="email" id="email" name="email" required className="p-2 border bg-stone-800/50 border-gray-300 rounded-md w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-bold text-gray-400">Message:</label>
          <textarea id="message" name="message" required className="p-2 bg-stone-800/50 border border-gray-300 rounded-md w-full h-24"></textarea>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white border-none rounded-md cursor-pointer">Send</button>
      </form></div>
         <Meteors number={50} />
    </div>
  )
}

export default ContactUs
