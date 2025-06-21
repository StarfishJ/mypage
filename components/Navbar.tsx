"use client";     // This is a client component
import Link from "next/link";
import React, { useState } from "react";     // useState is a hook that allows us to use state in a functional component
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"; // Icons for the menu and close button

const navLinks = [
    { title: "About", path: "#about"},
    { title: "Portfolio", path: "#portfolio"},
    { title: "Stack", path: "#stack"},
    { title: "Contact", path: "#contact"},
];

export const Navbar = () => {
    const [nav, setNav] = useState(false); // nav is a state variable that is used to store the state of the navbar
    
    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

    return (
        <div className="fixed z-50 flex justify-center w-full text-white font-bold">

            {/* Desktop Navigation */}
            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl
                            hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
                <ul className="flex flex-row p-2 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className="transform hover:text-white/50  
                                                              transition-all duration-300 ease-in-out">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div onClick={toggleNav} className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 transform transition-transform duration-300
                            ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <ul className="flex flex-col space-y-8 text-center">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    href={link.path} 
                                    className="text-4xl"
                                    onClick={closeNav}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>        
    );
};
