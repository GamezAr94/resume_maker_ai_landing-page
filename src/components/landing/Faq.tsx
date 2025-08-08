'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Les données pour notre FAQ. C'est bien de les séparer du code JSX.
const faqData = [
    {
        question: 'What is Fazume AI?',
        answer: "It's an intelligent career platform designed to automate the most tedious parts of job hunting. You build a single, detailed 'master profile' with all your experience and skills. Our AI then uses that profile to instantly write a unique, targeted resume for any job description you provide.",
    },
    {
        question: 'How is this different from other resume builders?',
        answer:
            'The difference is our AI\'s "memory" and strategic thinking.\n\n' +
            'Other resume builders are just fancy templates. Their AI might rephrase a sentence, but you still have to manually check every project and keyword.\n\n' +
            'Generic AI (like ChatGPT) has no memory. You have to teach it who you are from scratch for every single application.',
    },
    {
        question: 'What are the benefits of joining the waitlist?',
        answer: "By joining, you become part of our founding community. You'll get exclusive early access and free resume credits to kickstart your job search. Plus, you'll receive updates on our launch and special offers.",
    },
    {
        question: 'Is the waitlist free? Do I need a credit card?',
        answer: 'Yes, the waitlist is 100% free, and no credit card is required. We believe in earning your trust, not tricking you into a subscription. You are simply signing up for launch notifications and exclusive perks.',
    },
    {
        question: 'Can I import my data from LinkedIn?',
        answer: 'Absolutely! We know that building a profile from scratch is time-consuming. You can kickstart your master profile by uploading the data file you can export from your LinkedIn account, saving you hours of setup time.',
    },
    {
        question: 'When will it launch and how much will it cost?',
        answer: "We're working hard to launch in the coming months. Final pricing isn't set yet, but our promise is to be transparent and fair. Waitlist members will be the first to know and will receive the best offer as a thank you for their early support.",
    },
    {
        question: 'Can I cancel my waitlist signup?',
        answer: 'Of course. There is zero commitment. You can unsubscribe from our mailing list at any time with a single click at the bottom of any email.',
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
