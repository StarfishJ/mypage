"use client";

import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <section id="contact" className="overflow-x-clippy-32 text-white max-w-[1200px] mt-10 mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -20}}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.6, delay: 0.2}}
                        className="text-7xl font-bold text-gray-300"
                    >
                       Get in <span className="text-purple-500">touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20}}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.6, delay: 0.4}}
                        className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Email</p>
                            <a
                              href="mailto:jamesxsj8441@gmail.com"
                              className="text-3xl lg:text-4xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
                            >
                              jamesxsj8441@gmail.com
                               <span className="text-gray-500">↗</span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Address</p>
                            <address className="text-xl not-italic leading-relaxed">
                                422 Yale Ave N, Seattle, WA 98109
                            </address>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full h-full min-h-[450px] rounded-2xl overflow-hidden shadow-lg"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.999185487959!2d-122.34926418421875!3d47.61996237919243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f7847757b%3A0x11f3a799e2e6180!2s422%20Yale%20Ave%20N%2C%20Seattle%2C%20WA%2098109!5e0!3m2!1sen!2sus!4v1718856000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}