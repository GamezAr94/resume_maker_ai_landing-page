'use client';

// src/components/landing/FounderStorySection.tsx

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- Reusable component for the new Metric Cards ---
// This is simpler than the original because we are not animating numbers.
interface MetricCardProps {
    title: string;
    description: string;
    icon: React.ReactNode; // We can pass an SVG icon here
}

const MetricCard = ({ title, description, icon }: MetricCardProps) => (
    <div className="metric-card text-center p-4">
        <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 mt-1">{description}</p>
    </div>
);

// --- Main Founder Story Section Component ---
export default function FounderStorySection() {
    const sectionRef = useRef<HTMLElement>(null);

    // GSAP animations will run once the component is mounted
    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        // Animate the main founder testimonial card
        gsap.from(element.querySelector('.founder-card'), {
            scrollTrigger: {
                trigger: element.querySelector('.founder-card'),
                start: 'top 85%', // Start animation when the card is 85% from the top
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50, // Animate from 50px below
            duration: 0.8,
            ease: 'power3.out',
        });

        // Animate the metric cards
        gsap.from(element.querySelectorAll('.metric-card'), {
            scrollTrigger: {
                trigger: element.querySelectorAll('.metric-card'),
                start: 'top 90%', // Start animation when the cards are 90% from the top
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            stagger: 0.2, // Animate each card with a 0.2s delay
            ease: 'power3.out',
        });
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        A Tool Built From Real Frustration
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        I created this AI after experiencing the tedious,
                        repetitive nature of the job hunt myself.
                    </p>
                </div>

                {/* Single, Wide Founder Testimonial Card */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="founder-card bg-gray-50/80 p-8 rounded-xl border border-gray-200 text-center shadow-sm">
                        <div className="flex justify-center mb-4">
                            {/* Placeholder for your avatar - you can replace this with an <Image> component */}
                            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-3xl font-bold text-gray-400">
                                    {/* Your Initial Here */}Y
                                </span>
                            </div>
                        </div>
                        {/*
                        <p className="text-lg text-gray-700 italic leading-relaxed">
                            &quot;I built this because today's tools miss the
                            point. Generic AI forgets you instantly, and most
                            'AI' resume builders just rephrase what you type,
                            section by section. They can't make strategic
                            choices, like picking your best project for a
                            specific role. This tool is different. It's built on
                            a single, comprehensive profile, allowing the AI to
                            think and tailor for you.&quot;
                        </p>
                            */}
                        {/*
                        <p className="text-lg text-gray-700 italic leading-relaxed">
                            &quot;I was tired of the endless cycle of using
                            generic AI. I'd copy my experience, paste a job
                            description, and wrestle with prompts for every
                            single application. I thought, 'There has to be a
                            better way.' This tool is my solution: an AI that
                            already knows you and does the hard work for
                            you.&quot;
                        </p>
                            */}
                        <p className="text-lg text-gray-700 italic leading-relaxed">
                            &quot;I was tired of the endless cycle of teaching
                            AI who I was—whether it was a generic chatbot or a
                            resume builder that just rephrased small paragraphs.
                            None of them understood my full career. This tool is
                            the solution: a single, intelligent profile that
                            allows the AI to do the hard work for you, every
                            single time.&quot;
                        </p>
                        <div className="mt-6 font-bold text-gray-900 text-lg">
                            {/* Your Name Here */}
                            Arturo G.
                        </div>
                        <div className="text-sm text-gray-500">Founder</div>
                    </div>
                </div>

                {/* New Product-Centric Metrics Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <MetricCard
                        title="1 Master Profile"
                        description="Your entire career, ready to deploy in one place."
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        }
                    />
                    <MetricCard
                        title="Countless Resumes"
                        description="A unique, tailored resume for every single job application."
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                        }
                    />
                    <MetricCard
                        title="Hours of Your Time Back"
                        description="Go from job description to application-ready in seconds, not hours."
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    );
}
