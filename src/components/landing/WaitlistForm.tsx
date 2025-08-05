'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { addToWaitlist, FormState } from '@/app/actions';
import { useFormStatus } from 'react-dom';
import StatusModal from '@/components/common/StatusModal';

gsap.registerPlugin(ScrollTrigger);

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-white text-orange-600 font-bold py-2 px-6 rounded-lg hover:bg-orange-50 transition-transform transform hover:scale-105 flex-shrink-0 disabled:bg-gray-200 disabled:cursor-not-allowed"
        >
            {pending ? 'Joining...' : 'Join Waitlist'}
        </button>
    );
}

interface ModalState {
    isOpen: boolean;
    title: string;
    message: string;
    status: 'success' | 'error';
}

export default function WaitlistForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const initialState: FormState = { message: '', success: false };
    const [state, formAction] = useActionState(addToWaitlist, initialState);

    const [modalState, setModalState] = useState<ModalState | null>(null);

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

    useEffect(() => {
        if (state.message) {
            setModalState({
                isOpen: true,
                title: state.success ? 'Success!' : 'Oops!',
                message: state.message,
                status: state.success ? 'success' : 'error',
            });

            if (state.success) {
                formRef.current?.reset();
            }
        }
    }, [state]);

    return (
        <>
            <section
                ref={sectionRef}
                id="waitlist-form"
                className="bg-orange-500 py-20 sm:py-24"
            >
                <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Don&apos;t Miss Out on the Future of Job Applications
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
                        ref={formRef}
                        action={formAction}
                        className="mt-8 flex flex-wrap justify-center items-center gap-3 max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            /* CHANGEMENTS ICI :
              - 'py-2' au lieu de 'py-3' pour réduire la hauteur.
              - 'min-w-0' est une astuce Tailwind pour aider les éléments flex à bien se redimensionner.
            */
                            className="bg-white flex-grow w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition min-w-0"
                        />
                        <SubmitButton />
                    </form>
                </div>
            </section>

            {modalState?.isOpen && (
                <StatusModal
                    title={modalState.title}
                    message={modalState.message}
                    status={modalState.status}
                    onClose={() => setModalState(null)}
                />
            )}
        </>
    );
}
