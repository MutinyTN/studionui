'use client'
import { useEffect, createContext, useState } from 'react';
import { motion } from "framer-motion";
export const MousePositionContext = createContext({});


const defaultStyle = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    position: 'fixed',
    filter: "blur(1px)",
    top: '20px',
    left: '20px',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
}

const MousePositionProvider = ({ children }) => {

    const [style, setStyle] = useState(defaultStyle);
    const [mouse, setMouse] = useState([0, 0]);
    const [isSpecialHovering, setIsSpecialHovering] = useState(false);
    const [specialLocation, setSpecialLocation] = useState([0, 0])

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isSpecialHovering) {
                setMouse([e.clientX, e.clientY]);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isSpecialHovering]);




    const handleMouseOver = (event, customStyle = {}, customLocation = null) => {
        setIsSpecialHovering(true);

        let desiredX, desiredY;

        if (customLocation) {
            [desiredX, desiredY] = customLocation;
        } else {
            const target = event.currentTarget;
            const rect = target.getBoundingClientRect();
            desiredX = rect.right - 10;
            desiredY = rect.top + rect.height / 2;
        }
        setSpecialLocation([desiredX, desiredY]);

        setStyle({
            ...defaultStyle,
            ...customStyle,

        });
    };

    const handleMouseLeave = () => {
        setIsSpecialHovering(false);
        setStyle(defaultStyle);
    };


    return (
        <MousePositionContext.Provider value={{
            style,
            setStyle,
            handleMouseOver,
            handleMouseLeave
        }}>
            <motion.div
                initial={false}
                animate={isSpecialHovering ? { x: specialLocation[0], y: specialLocation[1], scale: 5 } : { x: mouse[0], y: mouse[1] }}
                transition={{ type: 'spring', stiffness: 500, damping: 50 }}
                style={style}
            />
            {children}
        </MousePositionContext.Provider>
    );
}


export { MousePositionProvider };
