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
            'Other resume builders are just fancy templates. Generic AI (like ChatGPT) has no memory. You have to teach it who you are from scratch for every single application. Fazume learns from your master profile to act as your personal career expert.',
    },
    {
        question: 'How does the "15 free resumes" offer work?',
        answer: "Simple! When you create a free account, you get 15 resume credits added instantly. You can use these to generate fifteen complete, AI-tailored resumes to try out the full power of the platform. No credit card required, and the credits don't expire.",
    },
    {
        question: 'How much does Fazume cost after I use my free credits?',
        answer: "After you've used your free credits, you can upgrade to a paid plan to generate more resumes and unlock advanced features. We offer simple, affordable subscription options. You can view the full details on our pricing page once you're logged in.",
    },
    {
        question: 'Can I import my data from LinkedIn?',
        answer: 'Not yet, but a direct LinkedIn import feature is in active development! For now, building your master profile is a manual process. The powerful part is that you only have to do it once. That single, detailed profile becomes the permanent "brain" for our AI, enabling you to generate hundreds of perfectly tailored resumes in the future without ever manually entering your work history again.',
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes, we take your data security and privacy very seriously. All information is encrypted, and we will never share your personal career data with third parties. Your profile is for your eyes only.',
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
