'use client';
// src/components/landing/Hero.tsx

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

// --- Icon components remain the same ---
const RocketIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.49984 2.83333L6.49984 5.83333L7.1665 6.5L2.4165 11.25L2.89984 11.7333L4.49984 10.1333L4.93317 10.5667L3.33317 12.1667L3.8165 12.65L8.49984 7.96667L9.1665 8.63333L12.1665 5.63333L9.49984 2.83333Z"
            fill="#D97706"
        ></path>
        <path
            d="M11.5 1.5L13.5 3.5L10.5 6.5L8.5 4.5L11.5 1.5Z"
            fill="#D97706"
        ></path>
    </svg>
);

export default function Hero() {
    const heroContentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.launch-badge', { opacity: 0, y: -20, duration: 0.5 })
            .from(
                '.main-headline',
                { opacity: 0, y: -20, duration: 0.8 },
                '-=0.3',
            )
            .from(
                '.sub-headline',
                { opacity: 0, y: -20, duration: 0.8 },
                '-=0.6',
            )
            .from(
                '.waitlist-form',
                { opacity: 0, y: 20, duration: 0.8 },
                '-=0.6',
            )
            .from(
                '.social-proof',
                { opacity: 0, y: 20, duration: 0.8 },
                '-=0.6',
            )
            .from(
                imageRef.current,
                { opacity: 0, y: 100, duration: 1.2 },
                '-=0.8',
            );
    }, []);

    return (
        <>
            <section className="relative bg-orange-50/50 pt-24 pb-12 overflow-hidden">
                <div
                    ref={heroContentRef}
                    className="max-w-4xl mx-auto px-4 text-center z-10"
                >
                    <span className="launch-badge inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 text-sm font-medium text-green-800 mb-4">
                        <RocketIcon />
                        <span>Free to Get Started</span>
                    </span>

                    <h1 className="main-headline text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Never Manually Tailor Your Resume Again
                    </h1>

                    <p className="sub-headline max-w-2xl mx-auto mt-6 text-lg text-gray-600">
                        Build your detailed career profile with us once. From
                        then on, just paste a job description. Our AI will
                        instantly craft a targeted resume for that specific job
                        using the best information from your profile.
                    </p>
                    <p className="mt-6 text-md font-semibold text-orange-600 animate-pulse">
                        <svg
                            className="inline-block w-4 h-4 mr-1 -mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                        </svg>
                        Limited Time Offer: Get <strong>7 free resumes</strong>{' '}
                        when you sign up!
                    </p>

                    <div className="mt-10">
                        <a
                            href="https://app.fazume.com/sign-up"
                            rel="noopener noreferrer"
                            className="cta-button inline-block bg-orange-500 text-white font-bold text-lg py-4 px-8 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Get Started for Free
                        </a>
                    </div>
                </div>

                <div
                    ref={imageRef}
                    className="relative max-w-5xl mx-auto mt-12 px-4"
                >
                    <Image
                        src="/hero_image.png"
                        alt="Screenshot of the Fazume app showing a tailored resume being generated from a master profile."
                        layout="responsive"
                        width={800}
                        height={600}
                        className="rounded-xl shadow-2xl"
                    />
                </div>
            </section>
        </>
    );
}
