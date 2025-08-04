'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Icônes pour les différents états
const IconSuccess = () => (
    <svg
        className="w-16 h-16 text-green-500 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
    </svg>
);

const IconError = () => (
    <svg
        className="w-16 h-16 text-red-500 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
    </svg>
);

// Définition des props que le modal accepte
interface StatusModalProps {
    title: string;
    message: string;
    status: 'success' | 'error';
    onClose: () => void;
}

export default function StatusModal({
    title,
    message,
    status,
    onClose,
}: StatusModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Animation d'apparition avec GSAP
    useEffect(() => {
        gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 },
        );
        gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' },
        );
    }, []);

    // Fonction pour gérer la fermeture
    const handleClose = () => {
        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.2,
            ease: 'power3.in',
        });
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: onClose,
        });
    };

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleClose} // Permet de fermer en cliquant sur le fond
        >
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-xl p-8 text-center max-w-sm mx-auto"
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique dans le modal
            >
                {status === 'success' ? <IconSuccess /> : <IconError />}

                <h3 className="text-2xl font-bold mt-4 text-gray-900">
                    {title}
                </h3>
                <p className="mt-2 text-gray-600">{message}</p>

                <button
                    onClick={handleClose}
                    className={`mt-6 w-full py-3 rounded-lg font-semibold text-white transition-colors ${
                        status === 'success'
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-red-500 hover:bg-red-600'
                    }`}
                >
                    OK
                </button>
            </div>
        </div>
    );
}
