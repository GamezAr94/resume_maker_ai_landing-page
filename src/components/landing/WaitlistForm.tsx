'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WaitlistForm() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        gsap.from(element.children, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, []);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thanks again for joining!');
    };

    return (
        <section
            ref={sectionRef}
            id="waitlist-form"
            className="bg-orange-500 py-20 sm:py-24"
        >
            <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Don't Miss Out on the Future of Job Applications
                </h2>
                <p className="mt-4 text-lg text-orange-100">
                    Join 2,847+ professionals already on our waitlist
                </p>

                {/* CHANGEMENTS IMPORTANTS ICI :
          - J'ai enlevé 'flex-col sm:flex-row'. On utilise maintenant 'flex' avec 'flex-wrap'
            pour un meilleur contrôle sur toutes les tailles d'écran.
          - 'max-w-md' limite la largeur maximale du formulaire.
        */}
                <form
                    onSubmit={handleFormSubmit}
                    className="mt-8 flex flex-wrap justify-center items-center gap-3 max-w-md mx-auto"
                >
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        /* CHANGEMENTS ICI :
              - 'py-2' au lieu de 'py-3' pour réduire la hauteur.
              - 'min-w-0' est une astuce Tailwind pour aider les éléments flex à bien se redimensionner.
            */
                        className="bg-white flex-grow w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition min-w-0"
                    />
                    <button
                        type="submit"
                        /*
              CHANGEMENTS ICI :
              - 'py-2' au lieu de 'py-3' pour correspondre à la hauteur de l'input.
              - 'flex-shrink-0' empêche le bouton de devenir trop petit et de passer à la ligne.
            */
                        className="bg-white text-orange-600 font-bold py-2 px-6 rounded-lg hover:bg-orange-50 transition-transform transform hover:scale-105 flex-shrink-0"
                    >
                        Join Waitlist
                    </button>
                </form>
            </div>
        </section>
    );
}
