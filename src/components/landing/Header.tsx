'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.from(headerRef.current, {
            duration: 1,
            yPercent: -100,
            opacity: 0,
            ease: 'power3.out',
        });
    }, []);

    const scrollToWaitlist = () => {
        const waitlistSection = document.getElementById('waitlist-form');
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: 'smooth' });
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
                        <span className="text-xl font-bold text-gray-800">
                            IntelliResume
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="hidden sm:block text-gray-500 text-sm">
                            Coming Soon
                        </span>
                        <button
                            onClick={scrollToWaitlist}
                            className="bg-orange-100 text-orange-700 font-semibold text-sm py-1.5 px-3 rounded-full hover:bg-orange-200 transition-colors duration-300"
                        >
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
