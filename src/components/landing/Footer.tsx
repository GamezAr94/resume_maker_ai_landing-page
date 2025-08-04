'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = footerRef.current;
        if (!element) return;

        // Une dernière animation simple pour faire apparaître le footer
        gsap.from(element.querySelectorAll('.footer-col, .copyright'), {
            scrollTrigger: {
                trigger: element,
                start: 'top 95%', // Démarre quand le bas de la page est presque atteint
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
        });
    }, []);

    return (
        <footer ref={footerRef} className="bg-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
                {/* Grille responsive pour les 3 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Colonne 1: Logo & Tagline */}
                    <div className="footer-col">
                        <h3 className="text-xl font-bold text-white">
                            ResumeGenius AI
                        </h3>
                        <p className="mt-2 max-w-sm">
                            AI-powered resumes for the modern job seeker.
                        </p>
                    </div>

                    {/* Colonne 2: Liens "Coming Soon" */}
                    <div className="footer-col">
                        <h4 className="font-semibold text-white">
                            Coming Soon
                        </h4>
                        <ul className="mt-4 space-y-2">
                            <li>Early 2026 Launch</li>
                            <li>AI-Powered Resume Builder</li>
                            <li>ATS Optimization</li>
                        </ul>
                    </div>

                    {/* Colonne 3: Contact */}
                    <div className="footer-col">
                        <h4 className="font-semibold text-white">Contact</h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="mailto:hello@resumegeniusai.com"
                                    className="hover:text-white transition-colors"
                                >
                                    hello@resumegeniusai.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Ligne de séparation et copyright */}
                <div className="copyright mt-12 border-t border-slate-800 pt-8 text-center text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} ResumeGenius AI. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
