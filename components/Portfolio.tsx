"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "@/assets/proj1.png";
import project2 from "@/assets/proj2.png";
import project3 from "@/assets/proj3.png";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const projects = [
    {
        id: 1, year: "2024", title: "SceneSound", 
        description: "A web application that analyzes images and text to recommend music based on the detected scenes. Frontend: Next.js, React, Backend: Python, Flask, Deployment: Vercel (Frontend), Fly.io (Backend), APIs: Spotify Web API", 
        image: project1, link: "https://scene-sound.vercel.app/",
    },
    {
        id: 2, year: "2025", title: "AI travel planner mobile app", description: "A mobile app that uses AI to plan trips and provide recommendations for activities and attractions.", 
        image: project2, link: "",
    },
    {
        id: 3, year: "2025", title: "Ongoing", description: "multi-vendor E-Commerce SaaS by using Microservice Architecture", 
        image: project3, link: "",
    },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]


export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useMotionValue(COLORS_TOP[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",  // This is the easing function
            duration: 10,       // This is the duration of the animation
            repeat: Infinity,   // This is the number of times the animation will repeat
            repeatType: "mirror", // This is the type of repeat
        })
    }, [])

    return (
        <motion.section 
        style={{
            backgroundImage,
        }}
        id="portfolio" className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

            <div>
                <h2 className="text-6xl font-bold mb-10">Selected <span className="text-gray-400">Projects</span></h2>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer mb-8 group"
                    >
                        <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                        <h3 className={`text-3xl font-semibold mb-4 group-hover:text-white transition-colors
                            duration-300 ${selectedProject.id === project.id ? "text-purple-200": ''}`}>
                            {project.title}
                        </h3>
                        {selectedProject.id === project.id && (
                            <div className="border-2 border-purple-200 my-4"></div>
                        )}
                        {selectedProject.id === project.id && (
                            <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                {project.description}
                            </p>
                        )}
                        {selectedProject.id === project.id && (
                            <p className="text-purple-200 transition-all duration-500 ease-in-out">
                                <a href={project.link}>
                                    Preview
                                </a>
                            </p>
                        )}
                    
                    </div>
                ))}
            </div>

            <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                height={450}
                className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            />
            </div>

        </motion.section>
    )
}