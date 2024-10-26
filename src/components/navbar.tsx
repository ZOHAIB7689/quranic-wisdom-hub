"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem,  } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActie] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActie}>
        <Link href={"/"}>Home</Link>
        <MenuItem setActive={setActie} item="Our Courses" active={active}>
          <div className="flex flex-col py-0">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/quran-basics">Quran Basics</HoveredLink>
            <HoveredLink href="/#">Tajweed Essentials</HoveredLink>
            <HoveredLink href="/#">Recitation Mastery</HoveredLink>
            <HoveredLink href="/#">Hifz Program</HoveredLink>
            <HoveredLink href="/#">kids Tajweed</HoveredLink>
            
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActie}
            item="Conatct us"
            active={active}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
