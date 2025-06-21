"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
    {
        id: 1,
        value: '5+',
        label: "Years of Experience",
        description: "Dedicated to honing software development skills.",
    },
    {
        id: 2,
        value: '10+',
        label: "Technologies Mastered",
        description: "Proficient in various programming languages and frameworks.",
    },
]

export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false});
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50}}
            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
            transition={{ duration: 0.8, ease: "easeInOut"}}
            className="mx-auto px-4 py-32 text-white glass"
        >
            <motion.h2
             initial={{ opacity: 0, y: 20}}
             animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
             transition={{ delay: 0.2, duration: 0.6}}
             className="text-6xl font-bold mb-10 text-center"
            >
             Key Metrics
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={metric.id}
                        initial={{ opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6}}
                        className="flex flex-col items-center text-center"
                    >
                        <motion.h3
                         initial={{ scale: 0.5}}
                         animate={isInView ? {scale: 1} : {scale: 0.5}}
                         transition={{ delay: 0.6 + index * 0.1, duration: 0.4, type: "spring"}}
                         className="text-5xl font-bold mb-2 text-purple-300"
                        >
                         {metric.value}
                        </motion.h3>
                        <p className="text-xl font-semibold mb-2">{metric.label}</p>
                        <p className="text-gray-300">{metric.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}