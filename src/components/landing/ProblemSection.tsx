'use client';

// src/components/landing/ProblemSection.tsx

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Petits composants pour les icônes. C'est plus propre que de mettre le SVG directement.
const IconManualWork = () => <span className="text-2xl">😩</span>;
const IconRejection = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w.org/2000/svg"
    >
        <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        <path
            d="M4.93 4.93L19.07 19.07"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);
const IconLowResponse = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 3V21H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        <path
            d="M7 17L12 12L15 15L20 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);

export default function ProblemSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // On s'assure que la section existe avant d'animer
        const element = sectionRef.current;
        if (!element) return;

        // Animation pour les titres
        gsap.from(
            element.querySelectorAll('.section-title, .section-subtitle'),
            {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%', // Déclenche quand 80% de la section est visible
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
            },
        );

        // Animation pour les 3 cartes de problème
        gsap.from(element.querySelectorAll('.problem-card'), {
            scrollTrigger: {
                trigger: element,
                start: 'top 70%',
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            stagger: 0.2, // Applique un délai de 0.2s entre chaque carte
            ease: 'power3.out',
        });
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-50/70 py-20 sm:py-28">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="section-title text-3xl sm:text-4xl font-bold text-gray-900">
                        The Job Market is Broken. We're Fixing It.
                    </h2>
                    <p className="section-subtitle mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        95% of resumes never reach human eyes. Generic resumes
                        get lost in ATS systems, and tailoring each one manually
                        takes hours you don't have.
                    </p>
                </div>

                {/* Grille pour les 3 problèmes. Elle est responsive. */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Carte 1 */}
                    <div className="problem-card">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500">
                            <IconManualWork />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            Hours of Manual Work
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Spending 2-3 hours customizing each resume for
                            different jobs.
                        </p>
                    </div>

                    {/* Carte 2 */}
                    <div className="problem-card">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500">
                            <IconRejection />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            ATS Rejection
                        </h3>
                        <p className="mt-2 text-gray-600">
                            95% of resumes are filtered out before reaching
                            hiring managers.
                        </p>
                    </div>

                    {/* Carte 3 */}
                    <div className="problem-card">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500">
                            <IconLowResponse />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            Low Response Rates
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Generic resumes result in less than 2% interview
                            callback rates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
