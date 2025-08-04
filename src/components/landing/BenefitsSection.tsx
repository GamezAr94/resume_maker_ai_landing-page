'use client';

// src/components/landing/BenefitsSection.tsx

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Les composants pour les icônes restent les mêmes ---
const IconEarlyAccess = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13 10V3L4 14H11L11 21L20 10L13 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
// ... (les autres icônes ici, pas besoin de les répéter)
const IconPricing = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 8V12L14 14M21.65 11.35C21.65 16.75 16.75 21.65 11.35 21.65C5.95 21.65 1.05 16.75 1.05 11.35C1.05 5.95 5.95 1.05 11.35 1.05C13.43 1.05 15.33 1.68 16.88 2.88L19.13 0.63C19.52 0.24 20.15 0.24 20.54 0.63L22.67 2.76C23.06 3.15 23.06 3.78 22.67 4.17L20.42 6.42C21.18 7.91 21.65 9.58 21.65 11.35Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
const IconCredits = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 12V22H4V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M22 7H2V12H22V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 22V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C9.48 2 12 5.5 12 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C14.52 2 12 5.5 12 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
const IconSuccess = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 2.00035 16.07 2.91001"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M22 4L12 14.01L9 11.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
const IconSaveTime = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);
const IconATS = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        <path
            d="M14 2V8H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        <path
            d="M9 15.5L11 17.5L15 13.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);

interface BenefitCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    iconBgColor: string;
    iconTextColor: string;
}

const BenefitCard = ({
    icon,
    title,
    description,
    iconBgColor,
    iconTextColor,
}: BenefitCardProps) => (
    // **CHANGEMENT ICI**: On ajoute la classe "invisible" pour cacher la carte avant l'animation.
    <div className="benefit-card invisible bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBgColor} ${iconTextColor}`}
        >
            {icon}
        </div>
        <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

export default function BenefitsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        // **CHANGEMENT ICI**: On utilise gsap.to() et la propriété 'autoAlpha'.
        // 'autoAlpha' est comme 'opacity', mais il gère aussi la propriété 'visibility' pour de meilleures performances.
        // On anime DE l'état invisible (défini dans le HTML) VERS l'état visible (autoAlpha: 1).
        gsap.to(element.querySelectorAll('.benefit-card'), {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%', // On peut ajuster ce '80%' si besoin
            },
            autoAlpha: 1, // Rend les éléments visibles
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-50 py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Why Join the Waitlist?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Be among the first to experience the future of job
                        applications.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Les BenefitCard sont les mêmes qu'avant */}
                    <BenefitCard
                        icon={<IconEarlyAccess />}
                        title="Early Access"
                        description="Be the first to use ResumeGenius AI before public launch."
                        iconBgColor="bg-green-100"
                        iconTextColor="text-green-600"
                    />
                    <BenefitCard
                        icon={<IconPricing />}
                        title="Special Pricing"
                        description="50% off lifetime discount for early supporters."
                        iconBgColor="bg-yellow-100"
                        iconTextColor="text-yellow-600"
                    />
                    <BenefitCard
                        icon={<IconCredits />}
                        title="Free Credits"
                        description="Start with 5 free resume generations (worth $25)."
                        iconBgColor="bg-red-100"
                        iconTextColor="text-red-600"
                    />
                    <BenefitCard
                        icon={<IconSuccess />}
                        title="Higher Success Rate"
                        description="3x more interviews with AI-optimized resumes."
                        iconBgColor="bg-orange-100"
                        iconTextColor="text-orange-600"
                    />
                    <BenefitCard
                        icon={<IconSaveTime />}
                        title="Save 10+ Hours"
                        description="Per job application with automated tailoring."
                        iconBgColor="bg-blue-100"
                        iconTextColor="text-blue-600"
                    />
                    <BenefitCard
                        icon={<IconATS />}
                        title="ATS Guaranteed"
                        description="100% ATS-compatible formatting and keywords."
                        iconBgColor="bg-pink-100"
                        iconTextColor="text-pink-600"
                    />
                </div>
            </div>
        </section>
    );
}
