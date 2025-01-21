import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
    const [textIndex, setTextIndex] = useState(0);

    const loadingTexts = [
        "Loading...",
        "Fetching Resources...",
        "Almost There...",
        "Initializing...",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen bg-[#e0c9a6] p-5">
            <div className="w-full h-[99%] flex flex-col items-center justify-center border-2 border-[#1C1C19] text-gray-800">
                <div className="relative w-14 h-14">
                    <motion.div
                        className="absolute inset-0 w-full h-full border-4 border-transparent rounded-md bg-[#1C1C19]"
                        style={{
                            backgroundSize: "200% 100%",
                        }}
                        animate={{
                            backgroundPosition: ["200% 0", "0 0", "200% 0"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    ></motion.div>

                    <motion.div
                        className="absolute inset-0 bg-[#806657] rounded-md"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    ></motion.div>
                </div>

                <motion.h1
                    className="mt-6 text-sm font-medium tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                >
                    {loadingTexts[textIndex]}
                </motion.h1>
            </div>
        </div>
    );
};

export default LoadingPage;
