"use client";
import { useState, useContext, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { MousePositionContext } from '@/app/context/mouseContext';

export default function Navbar() {
    const {
        handleMouseOver,
        handleMouseLeave,
        defaultStyle,
    } = useContext(MousePositionContext);

    const navlist = `p-4 w-fit relative duration-200  rounded-sm hover:font-semibold hover:bg-black/20 hover:text-white/70 bg-gradient-to-b  backdrop-blur-sm lg:static lg:bg-gray-200 `;

    const customStyleForDesignLi = {
        backgroundColor:'blue',
        position: "absolute",
        top: "-5px",
        left: "0",
        filter: "blur(5px)",
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
    };

    return (
        <div className="w-full p-12 flex absolute text-3xl font-extralight ">
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
