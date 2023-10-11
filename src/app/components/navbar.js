"use client";
import { useState, useContext, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { MousePositionContext } from '@/app/context/mouseContext';

export default function Navbar() {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isVisible, setIsVisible] = useState(true);


    const {
        handleMouseOver,
        handleMouseLeave,
        defaultStyle,
    } = useContext(MousePositionContext);

    useEffect(() => {
        function handleScroll() {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Scrolling down
            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);


    const navlist = `p-4 w-fit relative duration-200  rounded-sm hover:font-semibold hover:bg-black/20 hover:text-white/70 bg-gradient-to-b  backdrop-blur-sm lg:static lg:bg-gray-200 `;

    const customStyleForDesignLi = {
        top: "-5px",
        left: "0",
        filter: "blur(5px)",
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
    };

    return (
        <div className={`fixed top-0 w-full p-12 flex text-3xl font-extralight transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>

            <div className="w-1/3 ">
                <ul className="flex space-x-12">
                    <li className={navlist}
                        onMouseOver={(e) => handleMouseOver(e, customStyleForDesignLi)}
                        onMouseLeave={handleMouseLeave}>
                        Industrial
                    </li>
                    <li className={navlist}
                        onMouseOver={(e) => handleMouseOver(e, customStyleForDesignLi)}
                        onMouseLeave={handleMouseLeave}>
                        Design
                    </li>
                    <li className={navlist}
                        onMouseOver={(e) => handleMouseOver(e, customStyleForDesignLi)}
                        onMouseLeave={handleMouseLeave}>
                        Portfolio
                    </li>
                </ul>
            </div>
            <div className="w-1/3 flex justify-center text-center">
                <div className={navlist}
                    onMouseOver={(e) => handleMouseOver(e, customStyleForDesignLi)}
                    onMouseLeave={handleMouseLeave}>
                    núi
                </div>
            </div>
            <div className="w-1/3 flex justify-end text-end">
                <div className={navlist}
                    onMouseOver={(e) => handleMouseOver(e, customStyleForDesignLi)}
                    onMouseLeave={handleMouseLeave}>
                    About
                </div>
            </div>
        </div >
    );
}
