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

// We are creating detailed metadata for search engines.
// The title is descriptive and keyword-rich.
// The description clearly explains the value proposition.
export const metadata: Metadata = {
    title: 'IntelliResume | AI Resume Builder to Automate Your Job Hunt',
    description:
        'Stop manually tailoring resumes. IntelliResume uses AI to build a master profile and create a unique, targeted resume for every job application. Save time and land more interviews.',
    // You can also add keywords, although they are less important for Google now
    keywords:
        'AI resume builder, resume tailoring, automated resume, job application, ATS resume, career tool',
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: siteUrl,
        title: 'IntelliResume | AI Resume Builder',
        description:
            'Stop manually tailoring resumes. Let our AI build a unique, targeted resume for every job.',
        // You should create a specific social sharing image (e.g., 1200x630px)
        // and place it in your `public` folder.
        images: [
            {
                // TODO ART: Update this URL to your actual social sharing image
                url: '/social-sharing-image.png',
                width: 1200,
                height: 630,
                alt: 'IntelliResume AI Resume Builder Banner',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IntelliResume | AI Resume Builder',
        description:
            'Stop manually tailoring resumes. Let our AI build a unique, targeted resume for every job.',
        // TODO ART: Add your Twitter handle if you have one
        images: ['/social-sharing-image.png'],
        // Add your Twitter handle if you have one
        // creator: '@yourTwitterHandle',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // TODO Learn how to add structured data for better SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'IntelliResume',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
            'An AI-powered resume builder that automates resume tailoring for job applications.',
        offers: {
            '@type': 'Offer',
            price: '0', // Since there's a free waitlist
            priceCurrency: 'USD',
        },
        // Add your aggregate rating here once you have real reviews
        // aggregateRating: {
        //   '@type': 'AggregateRating',
        //   ratingValue: '4.9',
        //   ratingCount: '88'
        // },
    };
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
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
