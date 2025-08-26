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
        id: 2, year: "2025", title: "AI travel planner mobile app", 
        description: "A mobile app that uses AI to plan trips and provide recommendations for activities and attractions.\n Stack: React Native (Expo), TypeScript / JavaScript, Firebase, Google Places & Maps APIs, Gemini AI.\n\nAI-powered cross-platform travel app generating personalized itineraries using Google Gemini AI. Key features include real-time attraction suggestions, hotel/flight integration, and user profile/trip history.", 
        image: project2, link: "https://youtube.com/shorts/BrywLxQclu4?si=o-ofd5huGjJcP_Iz",
        videoId: "BrywLxQclu4",
    },
    {
        id: 3, year: "2025", title: "E-mall: Distributed Microservices E-Commerce (user & seller UI)", description: "multi-vendor E-Commerce SaaS by using Microservice Architecture. Stack: Express.js, Next.js, Apache Kafka, MongoDB, Docker, Nx, Prisma, AWS (ECS, EC2, CloudWatch), Socket.IO, Stripe", 
        image: project3, link: "https://youtu.be/h4ty4_51Eec?si=sNAAJs5VFFLj6f7a",
        videoId: "h4ty4_51Eec",
    },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [showVideo, setShowVideo] = useState(false);
    const color = useMotionValue(COLORS_TOP[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [color])

    // 当选择的项目改变时，重置视频状态
    useEffect(() => {
        setShowVideo(false);
    }, [selectedProject]);

    const handleImageClick = () => {
        if ((selectedProject.id === 2 || selectedProject.id === 3) && selectedProject.videoId) {
            setShowVideo(true);
        } else if (selectedProject.link) {
            window.open(selectedProject.link, '_blank');
        }
    };

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
                                {selectedProject.id === 2 || selectedProject.id === 3 ? (
                                    showVideo ? (
                                        <span onClick={() => setShowVideo(false)} className="cursor-pointer">
                                            Hide Video
                                        </span>
                                    ) : (
                                        <span>Click image to watch demo</span>
                                    )
                                ) : (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        Preview
                                    </a>
                                )}
                            </p>
                        )}
                    
                    </div>
                ))}
            </div>

            <div className="relative">
                {(selectedProject.id === 2 || selectedProject.id === 3) && showVideo ? (
                    <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`}
                            title={selectedProject.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-xl"
                        ></iframe>
                        <button 
                            onClick={() => setShowVideo(false)}
                            className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                ) : (
                    <div 
                        onClick={handleImageClick}
                        className="cursor-pointer relative group"
                    >
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            height={450}
                            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out group-hover:opacity-90"
                        />
                        {(selectedProject.id === 2 || selectedProject.id === 3) && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            </div>

        </motion.section>
    )
}