'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import build_profile_image from '../../../public/build_profile.png';
import job_details_image from '../../../public/job_details.png';
import resume_view_image from '../../../public/resume_view.png';
import Image from 'next/image';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- Reusable component for each step card in the timeline ---
interface StepCardProps {
    stepNumber: string;
    title: string;
    description: string;
    imageSide: 'left' | 'right';
    children?: React.ReactNode; // To pass the illustrative image
}

const StepCard = ({
    stepNumber,
    title,
    description,
    imageSide,
    children,
}: StepCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // Animate each card as it enters the viewport
    useEffect(() => {
        const element = cardRef.current;
        if (!element) return;

        gsap.fromTo(
            element,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%', // Start animation when 85% of the card is visible
                    toggleActions: 'play none none none',
                },
            },
        );
    }, []);

    const textOrder = imageSide === 'right' ? 'md:order-1' : 'md:order-2';
    const imageOrder = imageSide === 'right' ? 'md:order-2' : 'md:order-1';

    return (
        <div
            ref={cardRef}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 mb-24"
        >
            {/* Text Block */}
            <div className={textOrder}>
                <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 font-bold text-xl rounded-full">
                        {stepNumber}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {title}
                    </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Image Block */}
            <div className={imageOrder}>{children}</div>
        </div>
    );
};

// --- Main How It Works Section Component ---
export default function HowItWorksTimeline() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Animate the main title
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 85%',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
        });

        // Animate the timeline line drawing itself
        gsap.from(timelineRef.current, {
            scrollTrigger: {
                trigger: timelineRef.current,
                start: 'top center',
                end: 'bottom center',
                scrub: 1, // Smoothly animates with scroll
            },
            scaleY: 0, // Animate the scale from 0 to 1
            transformOrigin: 'top center',
            ease: 'none',
        });
    }, []);

    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 md:mb-24">
                    <h2
                        ref={titleRef}
                        className="text-3xl sm:text-4xl font-bold text-gray-900"
                    >
                        Create a Job-Winning Resume in 3 Easy Steps
                    </h2>
                </div>

                {/* The Timeline Container */}
                <div className="relative">
                    {/* The vertical line that will be animated */}
                    <div
                        ref={timelineRef}
                        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200"
                        style={{ transform: 'translateX(-50%)' }}
                    ></div>

                    {/* Steps Container */}
                    <div className="relative z-10">
                        <StepCard
                            stepNumber="1"
                            title="Build Your Master Profile"
                            description="Manually add your experience, education, and skills in this one-time step. Think of it as creating your personal career database. The richer the detail and achievements you include, the more powerful our AI becomes at generating a resume that truly stands out."
                            imageSide="right"
                        >
                            <div className="min-h-[300px] md:min-h-[500px] lg:min-h-[600px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                                <Image
                                    src={build_profile_image}
                                    alt="Image showing how to complete the master profile"
                                    width={2400} // Increased intrinsic width
                                    height={1600} // Increased intrinsic height
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                            </div>
                        </StepCard>

                        <StepCard
                            stepNumber="2"
                            title="Paste the Job Description"
                            description="Just paste in a job description, and our AI acts as your personal career strategist. It analyzes the role and the company, then digs through your profile to find the most compelling achievements and skills that make you the ideal candidate."
                            imageSide="left"
                        >
                            <div className="min-h-[300px] md:min-h-[500px] lg:min-h-[600px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                                <Image
                                    src={job_details_image}
                                    alt="Image showing how to paste the job details to the Resume generator AI tool"
                                    width={2400} // Increased intrinsic width
                                    height={1600} // Increased intrinsic height
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                            </div>
                        </StepCard>

                        <StepCard
                            stepNumber="3"
                            title="Generate & Apply"
                            description="In one click, get a new resume built from the best parts of your profile, perfectly matched to the job. It's ready to go—just pick a template, give it a final review, and download. You have full editing power if you need it."
                            imageSide="right"
                        >
                            <div className="min-h-[300px] md:min-h-[500px] lg:min-h-[600px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                                <Image
                                    src={resume_view_image}
                                    alt="Image showing how to paste the job details to the Resume generator AI tool"
                                    width={2400} // Increased intrinsic width
                                    height={1600} // Increased intrinsic height
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                            </div>
                        </StepCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
