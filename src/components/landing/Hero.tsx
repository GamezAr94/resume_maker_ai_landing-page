'use client';
// src/components/landing/Hero.tsx

import { useActionState, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { addToWaitlist, FormState } from '@/app/actions';
import { useFormStatus } from 'react-dom';
import StatusModal from '../common/StatusModal';
import Image from 'next/image';

// --- Icon components remain the same ---
const RocketIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.49984 2.83333L6.49984 5.83333L7.1665 6.5L2.4165 11.25L2.89984 11.7333L4.49984 10.1333L4.93317 10.5667L3.33317 12.1667L3.8165 12.65L8.49984 7.96667L9.1665 8.63333L12.1665 5.63333L9.49984 2.83333Z"
            fill="#D97706"
        ></path>
        <path
            d="M11.5 1.5L13.5 3.5L10.5 6.5L8.5 4.5L11.5 1.5Z"
            fill="#D97706"
        ></path>
    </svg>
);
function SubmitButton() {
    const { pending } = useFormStatus(); // Ce hook nous dit si le formulaire est en cours d'envoi.

    return (
        <button
            type="submit"
            disabled={pending} // Le bouton est désactivé pendant l'envoi
            className="flex-shrink-0 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 disabled:bg-orange-300 disabled:cursor-not-allowed"
        >
            {pending ? 'Joining...' : 'Join Waitlist'}
        </button>
    );
}
const UsersIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);
const NoSpamIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
        ></path>
        <path
            d="M8.5 8.5L15.5 15.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);
const PerksIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 6L13.9221 9.83299L18 10.4393L15 13.318L15.6942 17.3607L12 15.34L8.30584 17.3607L9 13.318L6 10.4393L10.0779 9.83299L12 6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>
);

interface ModalState {
    isOpen: boolean;
    title: string;
    message: string;
    status: 'success' | 'error';
}

export default function Hero() {
    const initialState: FormState = { message: '', success: false };
    const [state, formAction] = useActionState(addToWaitlist, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    const [modalState, setModalState] = useState<ModalState | null>(null);

    const heroContentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (state.message) {
            // Au lieu d'une alerte, on met à jour l'état du modal
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

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.launch-badge', { opacity: 0, y: -20, duration: 0.5 })
            .from(
                '.main-headline',
                { opacity: 0, y: -20, duration: 0.8 },
                '-=0.3',
            )
            .from(
                '.sub-headline',
                { opacity: 0, y: -20, duration: 0.8 },
                '-=0.6',
            )
            .from(
                '.waitlist-form',
                { opacity: 0, y: 20, duration: 0.8 },
                '-=0.6',
            )
            .from(
                '.social-proof',
                { opacity: 0, y: 20, duration: 0.8 },
                '-=0.6',
            )
            .from(
                imageRef.current,
                { opacity: 0, y: 100, duration: 1.2 },
                '-=0.8',
            );
    }, []);

    return (
        <>
            <section className="relative bg-orange-50/50 pt-24 pb-12 overflow-hidden">
                <div
                    ref={heroContentRef}
                    className="max-w-4xl mx-auto px-4 text-center z-10"
                >
                    <span className="launch-badge inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 text-sm font-medium text-yellow-800 mb-4">
                        <RocketIcon />
                        <span>Launching Soon</span>
                    </span>

                    <h1 className="main-headline text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Never Manually Tailor Your Resume Again
                    </h1>

                    <p className="sub-headline max-w-2xl mx-auto mt-6 text-lg text-gray-600">
                        Build your detailed career profile with us once. From
                        then on, just paste a job description. Our AI will
                        instantly craft a targeted resume for that specific job
                        using the best information from your profile.
                    </p>

                    {/* --- FORMULAIRE MODIFIÉ --- */}
                    <form
                        ref={formRef}
                        action={formAction}
                        // J'ai augmenté la largeur maximale du formulaire de 'max-w-md' à 'max-w-lg'
                        className="waitlist-form mt-8 flex items-center gap-3 justify-center max-w-lg mx-auto"
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            // 'flex-1' dit à l'input de prendre tout l'espace disponible
                            className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition min-w-0"
                        />
                        <SubmitButton />
                    </form>

                    <div className="social-proof mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <UsersIcon />
                            <span>100% free to join</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <NoSpamIcon />
                            <span>No spam, ever</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <PerksIcon />
                            <span>Early access perks</span>
                        </div>
                    </div>
                </div>

                <div
                    ref={imageRef}
                    className="relative max-w-5xl mx-auto mt-12 px-4"
                >
                    <Image
                        src="/Hero_banner.png"
                        alt="Screenshot of the IntelliResume AI app showing a tailored resume being generated from a master profile."
                        layout="responsive"
                        width={800}
                        height={600}
                        className="rounded-xl shadow-2xl"
                    />
                </div>
            </section>

            {modalState?.isOpen && (
                <StatusModal
                    title={modalState.title}
                    message={modalState.message}
                    status={modalState.status}
                    onClose={() => setModalState(null)} // La fonction pour fermer le modal
                />
            )}
        </>
    );
}
