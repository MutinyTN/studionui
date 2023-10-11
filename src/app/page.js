"use client"
import Image from 'next/image'
import { useState, useContext, useEffect, useRef } from 'react';
import { MousePositionContext } from '@/app/context/mouseContext';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value = MotionValue, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageComponentCustom({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section >
      <div ref={ref} className='w-full'>
        <Image src={`/${id}.jpg`} alt="A London skyscraper" width={1000} height={1000} />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className=''>
      {[1, 2, 3, 4, 5].map((image) => (
        <ImageComponentCustom id={image} key={image} />
      ))}
      <motion.div className=" fixed
  left-0
  right-0
  h-2
  bg-white
  bottom-[100%]" style={{ scaleX }} />
    </main>

  )
}
