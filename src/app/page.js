"use client"
import Image from 'next/image'
import { useState, useContext, useEffect, useRef } from 'react';
import { MousePositionContext } from '@/app/context/mouseContext';

export default function Home() {

  const {
    handleMouseOver,
    handleMouseLeave,
    defaultStyle,
  } = useContext(MousePositionContext);

  const mouseOverHandle = (event) => {
    let desiredX, desiredY;

    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    desiredX = rect.width / 2; // center of the width
    console.log(desiredX)
    desiredY = rect.top + rect.height / 2; // center of the height

    handleMouseOver(event, {})
  }
  return (
    <main className="flex min-h-screen flex-col space-y-12 items-center p-32">
      <div className='' >
        <Image
          src="/cd-player.jpg"
          href='/'
          alt="Abrites Logo"
          className=""
          width={1000}
          height={1000}
          priority
        />


      </div>

    </main>
  )
}
