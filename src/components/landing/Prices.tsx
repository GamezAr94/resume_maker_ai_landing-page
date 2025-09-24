'use client';

import Link from 'next/link';

// --- Helper component for the checkmark icon ---
const CheckIcon = () => (
    <svg
        className="w-5 h-5 text-orange-500 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a1 1 0 011.42-1.42L10 14.17l6.88-6.88a1 1 0 111.42 1.42L11.12 16.7a.997.997 0 01-1.41.02l-.42-.43z"
        />
    </svg>
);

const PricingSection = () => {
    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
                        Find the perfect plan
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Start for free, and upgrade when you&apos;re ready. For
                        a limited time, get{' '}
                        <span className="font-bold text-orange-500">
                            7 free tokens
                        </span>{' '}
                        just for signing up!
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-sm mx-auto lg:max-w-none">
                    {/* --- One-Time Purchase Card --- */}
                    <div className="border-2 border-orange-500 rounded-xl p-8 flex flex-col relative shadow-lg">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-md font-bold px-5 py-2 rounded-full uppercase tracking-wider">
                            Best Value
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Credit Packs
                        </h3>
                        <p className="mt-4 text-gray-500 h-[4.5rem]">
                            A one-time purchase for whenever you need it.
                            Credits never expire.
                        </p>
                        <Link
                            href="https://app.fazume.com/sign-up"
                            className="mt-6 w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors text-center"
                        >
                            Start for Free
                        </Link>
                        <ul className="mt-8 space-y-4 text-left">
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    <strong>20 credits</strong> for $12.00
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    <strong>70 credits</strong> for $35.00
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    <strong>125 credits</strong> for $57.00
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* --- Monthly Plan Card --- */}
                    <div className="border border-gray-200 rounded-xl p-8 flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Monthly
                        </h3>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-5xl font-extrabold text-gray-900">
                                $22
                            </span>
                            <span className="ml-1 text-xl font-medium text-gray-500">
                                /month
                            </span>
                        </div>
                        <p className="mt-2 text-gray-500 font-medium">
                            50 tokens per month
                        </p>
                        <Link
                            href="https://app.fazume.com/sign-up"
                            className="mt-6 w-full border border-gray-400 text-gray-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                        >
                            Start for Free
                        </Link>
                        <ul className="mt-8 space-y-4 text-left">
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    Perfect for active job seekers
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    Credits roll over month-to-month
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    <strong>10% OFF</strong> all Credit Pack
                                    purchases
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* --- Yearly Plan Card --- */}
                    <div className="border border-gray-200 rounded-xl p-8 flex flex-col relative">
                        <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                            SAVE $44
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Yearly
                        </h3>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-5xl font-extrabold text-gray-900">
                                $18.34
                            </span>
                            <span className="ml-1 text-xl font-medium text-gray-500">
                                /month
                            </span>
                        </div>
                        <p className="mt-2 text-gray-500 font-medium">
                            Billed as $220/year. 600 tokens included.
                        </p>
                        <Link
                            href="https://app.fazume.com/sign-up"
                            className="mt-6 w-full border border-gray-400 text-gray-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                        >
                            Start for Free
                        </Link>
                        <ul className="mt-8 space-y-4 text-left">
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    Best value for long-term success
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    Full year of credits upfront
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-gray-600">
                                    <strong>20% OFF</strong> all Credit Pack
                                    purchases
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
