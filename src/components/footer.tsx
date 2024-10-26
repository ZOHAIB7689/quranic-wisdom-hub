import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-gray-400 p-12">
      <div className="max-w-6xl mx-auto grid gap-8 px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h1 className="text-gray-200 font-bold mb-2">About Us</h1>
          <p className="">
            At Quranic Wisdom Hub, we make Quran learning engaging and
            accessible, guiding learners of all levels toward spiritual growth.
          </p>
        </div>
        <div className="flex flex-col pl-2 justify-around">
            <h1 className="text-gray-200 font-bold mb-2">Quick Links</h1>
          <a href="/">Home</a>
          <a href="/#">About</a>
          <a href="/courses">Courses</a>
          <a href="/contact">Contact</a>
        </div>
        <div><h1 className="text-gray-200 font-bold mb-2">Quick Links</h1>
        <a href="/#">Facebook</a><hr />
        <a href="/#">Twitter</a><hr />
        <a href="/#">Instagram</a>
        </div>
        <div>
              <h1 className="text-gray-200 font-bold mb-2">Contact Us</h1>
            <p>D.H.A phase 2 10C12 Karachi 
                Email: wisdomhub.quranic@gmail.com
                phone :(000) 000 00000
            </p>
      

        </div>
      </div>
      <p className="text-center text-xs pt-2">@2024 Quranic Hub. All Rights Reserved</p>
    </div>
  );
}
