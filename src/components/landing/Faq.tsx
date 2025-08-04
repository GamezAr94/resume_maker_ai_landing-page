'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Les données pour notre FAQ. C'est bien de les séparer du code JSX.
const faqData = [
    {
        question: 'What is ResumeGenius AI?',
        answer: "It's a smart resume builder that uses AI to create a tailored resume for every job you apply to. You build your master profile once, and our AI selects the most relevant information to highlight for each specific job description, saving you hours of work.",
    },
    {
        question: 'How is this different from other resume builders?',
        answer: 'While other builders offer templates, our AI does the strategic work for you. It analyzes job descriptions and customizes your resume content to match, ensuring you always present your best self for the role and pass through ATS filters.',
    },
    {
        question: 'What are the benefits of joining the waitlist?',
        answer: 'By joining, you get exclusive early access before the public launch, a special lifetime discount on our premium plans, and free credits to start generating resumes immediately.',
    },
    {
        question: 'When will it launch and how much will it cost?',
        answer: "We are planning to launch in the coming months. Final pricing isn't set, but waitlist members will receive a significant discount as a thank you for being an early supporter.",
    },
    {
        question: 'Can I cancel my waitlist signup?',
        answer: 'Absolutely. There is no commitment. You can unsubscribe from our mailing list at any time with a single click.',
    },
];

// Un composant pour chaque question/réponse
interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
    return (
        <div className="faq-item border-b border-gray-200 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left"
            >
                <span className="text-lg font-medium text-gray-800">
                    {question}
                </span>
                {/* L'icône change de direction si la question est ouverte */}
                <span
                    className={`transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>
            {/* La réponse s'affiche ou se cache avec une transition CSS */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
            >
                <p className="text-gray-600">{answer}</p>
            </div>
        </div>
    );
};

export default function FaqSection() {
    // 'useState' pour garder en mémoire l'index de la question ouverte. 'null' = aucune n'est ouverte.
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.from(sectionRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
            opacity: 0,
            duration: 1,
        });
    }, []);

    const handleItemClick = (index: number) => {
        // Si on clique sur la question déjà ouverte, on la ferme (set to null).
        // Sinon, on met à jour l'index avec la nouvelle question ouverte.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="bg-white py-20 sm:py-28">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div>
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
