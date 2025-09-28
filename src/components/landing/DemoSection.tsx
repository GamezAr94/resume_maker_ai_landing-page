'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DemoSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        // Animate the section elements as they scroll into view
        gsap.from(
            element.querySelectorAll('.section-title, .video-container'),
            {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            },
        );
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20 sm:py-28">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="section-title text-3xl sm:text-4xl font-bold text-gray-900">
                        See Fazume in Action
                    </h2>
                </div>

                {/* This is the click-to-play video container */}
                <div className="video-container relative max-w-4xl mx-auto mt-12">
                    <div className="relative h-0 pb-[56.25%] rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-900/10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full border-0"
                            src="https://www.youtube.com/embed/3_IX698PJdQ?si=dZMHg8tLGmxS2Pse&rel=0"
                            title="Fazume AI Demo Video (Click to Play)"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
