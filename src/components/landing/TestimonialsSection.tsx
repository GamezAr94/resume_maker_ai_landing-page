'use client';

// src/components/landing/TestimonialsSection.tsx

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Composant réutilisable pour chaque carte de témoignage ---
interface TestimonialCardProps {
    name: string;
    title: string;
    quote: string;
}

const TestimonialCard = ({ name, title, quote }: TestimonialCardProps) => (
    <div className="testimonial-card bg-gray-50/80 p-6 rounded-xl border border-gray-200 text-center">
        <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                {/* Placeholder pour l'avatar */}
                <span className="text-xl font-bold text-gray-400">
                    {name.charAt(0)}
                </span>
            </div>
        </div>
        <p className="text-gray-700 italic">&quot;{quote}&quot;</p>
        <div className="mt-4 font-bold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
    </div>
);

// --- Composant réutilisable pour chaque métrique ---
interface MetricItemProps {
    finalValue: number;
    label: string;
    plusSign?: boolean;
}

const MetricItem = ({
    finalValue,
    label,
    plusSign = false,
}: MetricItemProps) => {
    // La ref est utilisée pour que GSAP puisse cibler cet élément et changer son texte
    const valueRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = valueRef.current;
        if (!element) return;

        // C'est l'objet que GSAP va animer. On commence à 0.
        const counter = { value: 0 };

        gsap.to(counter, {
            scrollTrigger: {
                trigger: element,
                start: 'top 90%', // Démarre l'animation quand l'élément est presque visible
                toggleActions: 'play none none none', // Joue l'animation une seule fois
            },
            value: finalValue,
            duration: 2, // L'animation dure 2 secondes
            ease: 'power2.out',
            // 'onUpdate' est une fonction qui s'exécute à chaque "frame" de l'animation
            onUpdate: () => {
                // On met à jour le texte avec la valeur arrondie
                element.textContent =
                    Math.round(counter.value).toLocaleString('en-US') +
                    (plusSign ? '+' : '');
            },
        });
    }, [finalValue, plusSign]);

    return (
        <div className="text-center">
            <span
                ref={valueRef}
                className="text-4xl md:text-5xl font-bold text-gray-900"
            >
                0
            </span>
            <p className="text-gray-500 mt-1">{label}</p>
        </div>
    );
};

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        // Animation pour les cartes de témoignages
        gsap.from(element.querySelectorAll('.testimonial-card'), {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Join Thousands of Job Seekers
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        People from top companies are already waiting
                    </p>
                </div>

                {/* Grille des témoignages */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard
                        name="Sarah M."
                        title="Software Engineer"
                        quote="Can't wait for this! I spend way too much time customizing resumes for each job."
                    />
                    <TestimonialCard
                        name="Mike C."
                        title="Marketing Manager"
                        quote="Finally, someone is solving the ATS problem with AI. This is exactly what I need!"
                    />
                    <TestimonialCard
                        name="Emily R."
                        title="Recent Graduate"
                        quote="As a new grad, I need all the help I can get. This AI solution sounds perfect!"
                    />
                </div>

                {/* Section des métriques */}
                <div className="mt-20 flex justify-center items-center gap-8 md:gap-16">
                    <MetricItem
                        finalValue={2847}
                        label="People Waiting"
                        plusSign
                    />
                    <MetricItem
                        finalValue={150}
                        label="Companies Represented"
                        plusSign
                    />
                    <MetricItem finalValue={25} label="Countries" plusSign />
                </div>
            </div>
        </section>
    );
}
