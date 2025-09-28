'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

// --- SVG Icon Components ---
const CheckIcon = () => (
    <svg
        className="w-5 h-5 text-green-500 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
        ></path>
    </svg>
);

const UsersIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
    </svg>
);

const ShapeIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        ></path>
    </svg>
);

const BoltIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
    </svg>
);

export default function BetaProgramSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const spotsRemaining = 87; // You can make this dynamic later

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        gsap.from(element.querySelectorAll('.fade-in-item'), {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20 sm:py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section Header */}
                <h2 className="fade-in-item text-3xl sm:text-4xl font-bold text-gray-900">
                    Join Our Beta Program
                </h2>
                <p className="fade-in-item mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Be among the first{' '}
                    <span className="font-bold text-orange-500">
                        100 beta testers
                    </span>{' '}
                    and get{' '}
                    <span className="font-bold text-orange-500">
                        20 free credits
                    </span>{' '}
                    to test our platform!
                </p>

                {/* Beta Access Card */}
                <div className="fade-in-item mt-12 max-w-2xl mx-auto border-2 border-orange-400 rounded-xl p-8 flex flex-col relative shadow-lg text-center">
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        Beta Access
                    </div>

                    <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                        <BoltIcon />
                    </div>

                    <h3 className="text-3xl font-extrabold text-gray-900 mt-4">
                        20 Free Credits
                    </h3>
                    <p className="mt-2 text-gray-500">
                        Perfect for testing all features and providing valuable
                        feedback.
                    </p>

                    <Link
                        href="https://app.fazume.com/sign-up"
                        className="mt-6 w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Start Beta Testing Now
                    </Link>

                    <ul className="mt-8 space-y-3 text-left text-gray-600">
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-3">
                                <strong>20 credits</strong> = 20 resumes
                            </span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-3">
                                Credits never expire - use them at your own pace
                            </span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-3">
                                Full access to all beta features
                            </span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-3">
                                Direct line to our development team
                            </span>
                        </li>
                    </ul>

                    <div className="mt-10 pt-6 border-t border-gray-200">
                        <h4 className="text-md font-semibold text-gray-800">
                            Why Join Our Beta?
                        </h4>
                        <div className="mt-6 grid grid-cols-3 gap-4 text-gray-600">
                            <div className="flex flex-col items-center">
                                <UsersIcon />
                                <span className="text-xs mt-2">
                                    Limited to first 100 users
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <ShapeIcon />
                                <span className="text-xs mt-2">
                                    Shape the product with your feedback
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <BoltIcon />
                                <span className="text-xs mt-2">
                                    Get early access to new features
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spots Remaining */}
                <div className="fade-in-item mt-8">
                    <p className="mt-4 text-sm text-gray-500">
                        Join other early adopters who are already testing and
                        providing feedback.
                    </p>
                </div>
            </div>
        </section>
    );
}
