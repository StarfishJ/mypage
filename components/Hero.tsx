"use client";

import { useEffect } from "react";
import Image from "next/image";
import obj from "@/assets/obj1.png";
import profilepic from "@/public/profilepic.jpg";
import { useMotionValue, animate, useMotionTemplate, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"] // This is the array of colors

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0]); // This is the initial color

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",  // This is the easing function
            duration: 10,       // This is the duration of the animation
            repeat: Infinity,   // This is the number of times the animation will repeat
            repeatType: "mirror", // This is the type of repeat
        })
    }, [])

    // This is the background image
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0 4 24px 0 ${color}`

    return (
        <motion.section
         style={{
            backgroundImage,
            border,
            boxShadow,
         }}
         className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
         >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for work
                </span>
                <h1 className="text-white/50 text-7xl font-black">Hi, I&apos;m</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight
                text-transparent text-5xl md:text-7xl">Yuchen Huang</h1>
                <Image src={profilepic} alt="profile pic" width={240} height={90} className="rounded-full" />
                <br />
                <div className="flex bg-white/10 shadow-xl p-2 rounded-3xl justify-center items-center space-x-2 mb-4">
                    <Image 
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <Image 
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <Image 
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <p className="font-semibold">Full Stack Developer</p>
                </div>
            

                <p className="my-2 max-w-xl text-center">Based in Seattle, with over 5 years of experience</p>

                <div className="flex gap-4">
                    <motion.button
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{
                            scale: 1.015,
                        }}
                        whileTap={{
                            scale: 0.985,
                        }}
                        className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                        >
                            <a href="https://github.com/StarfishJ/resumes/blob/main/MSCS-James%20Huang-NEU.pdf">Download CV</a>
                            <FiArrowRight className="" />
                    </motion.button>

                    <motion.button
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{
                            scale: 1.015,
                        }}
                        whileTap={{
                            scale: 0.985,
                        }}
                        className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                        >
                            <a href="https://www.linkedin.com/in/alvinhuangneu/">My Linkedin</a>
                            <FiArrowRight className="" />
                    </motion.button>
                </div>
            </div>

            <div className="bg-circle-container"> 
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>


            </div>
        </motion.section>
    )
}