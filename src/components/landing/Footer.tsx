'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

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
                            FAZUME AI
                        </h3>
                        <p className="mt-2 max-w-sm">
                            AI-powered resumes for the modern job seeker.
                        </p>
                    </div>

                    {/* Column 2: Call to Action */}
                    <div className="footer-col">
                        <h4 className="font-semibold text-white">
                            Ready to Upgrade Your Career?
                        </h4>
                        <p className="mt-2">
                            Create an account and get your 7 free resumes.
                        </p>
                        <div className="mt-4">
                            <a
                                href="https://app.fazume.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-orange-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-orange-600 transition-colors shadow-md"
                            >
                                Go to App
                            </a>
                        </div>
                    </div>

                    {/* Colonne 3: Contact */}
                    <div className="footer-col">
                        <h4 className="font-semibold text-white">Contact</h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/cookie-policy">Cookie Policy</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms and Conditions</Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="termly-display-preferences"
                                >
                                    Consent Preferences
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Ligne de séparation et copyright */}
                <div className="copyright mt-12 border-t border-slate-800 pt-8 text-center text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Fazume AI. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
