'use client';

// src/components/landing/HowItWorksSection.tsx

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Le composant Step est maintenant plus complet, avec l'image
interface StepProps {
    stepNumber: string;
    title: string;
    description: string;
    imageSide: 'left' | 'right';
    className: string;
}

const Step = ({
    stepNumber,
    title,
    description,
    imageSide,
    className,
}: StepProps) => {
    // Détermine l'ordre pour l'alternance de l'image
    const textOrder = imageSide === 'right' ? 'md:order-1' : 'md:order-2';
    const imageOrder = imageSide === 'right' ? 'md:order-2' : 'md:order-1';

    return (
        // Les étapes sont superposées
        <div
            className={`step-content absolute inset-0 w-full h-full flex items-center ${className}`}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Bloc de Texte */}
                <div className={textOrder}>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center justify-center w-10 h-10 bg-orange-100 text-orange-600 font-bold text-xl rounded-full">
                            {stepNumber}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                            {title}
                        </h3>
                    </div>
                    <p className="text-gray-600 text-lg">{description}</p>
                </div>

                {/* Bloc d'Image */}
                <div
                    className={`${imageOrder} h-80 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center`}
                >
                    <span className="text-gray-400">Illustrative Image</span>
                </div>
            </div>
        </div>
    );
};

export default function HowItWorksSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        // Animation simple pour le titre principal de la section
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

        // On sélectionne les 3 étapes
        const steps = gsap.utils.toArray('.step-content') as HTMLElement[];

        // La timeline principale pour l'animation de scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                pin: true,
                scrub: 1,
                start: 'top top',
                end: '+=2000', // L'animation se déroule sur une distance de 2000px de scroll
            },
        });

        // **CORRECTION IMPORTANTE**
        // On cache les étapes 2 et 3 au début, mais l'étape 1 est visible.
        // C'est ça qui corrige le problème de l'écran vide !
        gsap.set(steps.slice(1), { autoAlpha: 0 });

        // On anime la transition entre chaque étape
        steps.forEach((step, i) => {
            if (i > 0) {
                // On commence la transition à partir du deuxième élément
                tl
                    // On fait disparaître l'étape précédente
                    .to(
                        steps[i - 1],
                        { autoAlpha: 0, y: -50, duration: 0.5 },
                        '+=1',
                    ) // "+=1" ajoute une pause d'1 seconde
                    // On fait apparaître l'étape actuelle
                    .fromTo(
                        step,
                        { y: 50, autoAlpha: 0 },
                        { y: 0, autoAlpha: 1, duration: 0.5 },
                    );
            }
        });
    }, []);

    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                <h2
                    ref={titleRef}
                    className="text-3xl sm:text-4xl font-bold text-gray-900"
                >
                    Create a Job-Winning Resume in 3 Easy Steps
                </h2>
            </div>

            {/* Ce conteneur est essentiel pour le 'pinning' */}
            <div ref={sectionRef} className="relative h-screen mt-16">
                <Step
                    stepNumber="1"
                    title="Build Your Master Profile ONCE"
                    description="Quickly add your experience, education, and skills manually. Or to save hours of typing, kickstart your profile by importing the data export from your LinkedIn. This becomes your personal career database, ready for the AI."
                    imageSide="right"
                    className="step-1"
                />
                <Step
                    stepNumber="2"
                    title="Paste the Job Description"
                    description="From now on, you just have to paste in a job description, and our AI acts as your personal career strategist. It analyzes the role and the company, then digs through your profile to find the most compelling achievements and skills that make you the ideal candidate."
                    imageSide="left"
                    className="step-2"
                />
                <Step
                    stepNumber="3"
                    title="Generate Your Perfect Resume and Apply!"
                    description="In one click, get a new resume built from the best parts of your profile, perfectly matched to the job. It's ready to go—just pick a template, give it a final review, and download. You have full editing power if you need it."
                    imageSide="right"
                    className="step-3"
                />
            </div>
        </section>
    );
}
