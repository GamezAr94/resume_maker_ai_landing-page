'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // NEW: Import the ScrollToPlugin
import Link from 'next/link';
import React from 'react';

// NEW: Register the plugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // GSAP animation for the header on initial load
        gsap.from(headerRef.current, {
            duration: 1,
            yPercent: -100,
            opacity: 0,
            ease: 'power3.out',
        });
    }, []);

    // NEW: Function to handle smooth scrolling
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        e.preventDefault(); // Prevent the default instant jump
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            // Use GSAP to scroll smoothly to the target section
            gsap.to(window, {
                duration: 1.2, // Animation duration in seconds
                scrollTo: {
                    y: href,
                    offsetY: 80, // Offset to account for the fixed header's height
                },
                ease: 'power2.inOut', // Easing function for a nice effect
            });
        }
    };

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-xl font-bold text-gray-800"
                        >
                            Fazume
                        </Link>
                    </div>

                    {/* NEW: Navigation links for desktop view */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#how-it-works"
                            onClick={handleScroll}
                            className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                        >
                            How It Works
                        </a>
                        <a
                            href="#features"
                            onClick={handleScroll}
                            className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#about"
                            onClick={handleScroll}
                            className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#faq"
                            onClick={handleScroll}
                            className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                        >
                            FAQ
                        </a>
                    </nav>

                    <div className="flex items-center">
                        {/* The "Get Started" button remains the same */}
                        <a
                            href="https://app.fazume.com"
                            rel="noopener noreferrer"
                            className="bg-orange-500 text-white font-semibold text-sm py-1.5 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-sm"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
