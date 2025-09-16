import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/common/GoogleAnalytics';
import Script from 'next/script';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import TermlyBanner from '@/components/TermlyBanner';
import { Suspense } from 'react';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const siteUrl = 'https://www.fazume.com';

export const metadata: Metadata = {
    title: {
        template: '%s | Fazume',
        default: 'Fazume: AI Resume Builder for Tailored Resumes in Seconds',
    },
    description:
        "Land your next role faster. Fazume's AI analyzes job descriptions to build a perfectly tailored resume from your career profile. Try the AI resume builder.",
    keywords:
        'AI resume builder, resume tailor, automated resume, career change resume, professional resume, job-specific resume, ATS resume, resume optimization',
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: siteUrl,
        title: 'Fazume: Job-Specific Resumes in Seconds',
        description:
            'Fazume analyzes your full career profile against a job offer to create the perfect resume, every time.',
        // IMPORTANT: Remember to create this social sharing image (1200x630px)
        // and place it in your `public` folder.
        images: [
            {
                url: '/social-sharing-image.png',
                width: 1200,
                height: 630,
                alt: 'Fazume AI Resume Builder Banner',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fazume: Job-Specific Resumes in Seconds',
        description:
            'Fazume analyzes your full career profile against a job offer to create the perfect resume, every time.',
        images: ['/social-sharing-image.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Fazume',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
            "An AI-powered resume builder that intelligently analyzes a user's entire professional history and a target job description to generate a perfectly tailored, job-specific resume.",
        offers: {
            '@type': 'Offer',
            price: '0', // Represents the free sign-up
            priceCurrency: 'USD',
        },
        // You can add aggregateRating here once you have reviews.
    };

    return (
        <html lang="en">
            <head>
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <GoogleAnalytics measurementId="G-9KQKV8ENKD" />
                <Header />
                <Suspense fallback={null}>
                    <TermlyBanner websiteUUID="8cab5cd3-0553-46d1-b03f-eb64becf868d" />
                </Suspense>
                {children}
                <Footer />
            </body>
        </html>
    );
}
