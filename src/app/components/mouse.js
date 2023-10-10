"use client"
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

export default function Mouse({ children }) {
    const [mouse, setMouse] = useState([0, 0, false]);
    const [mx, my, isActive] = mouse;

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouse([e.clientX, e.clientY, true]);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <motion.div
                initial={false}
                animate={{ x: mx, y: my }}
                transition={{ type: 'spring', stiffness: 1500, damping: 100 }} // Adjust these values to make it faster/slower
                style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    position: 'fixed',
                    top: 20,
                    left: 20,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                }}
            />
            {children}
        </>
    );
}
