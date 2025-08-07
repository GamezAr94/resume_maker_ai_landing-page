'use client';

import Script from 'next/script';

// This component handles the Google Analytics script injection.
// It uses the recommended 'next/script' component for optimal performance.

interface GoogleAnalyticsProps {
    measurementId: string;
}

export default function GoogleAnalytics({
    measurementId,
}: GoogleAnalyticsProps) {
    // We don't render anything if no measurement ID is provided.
    if (!measurementId) {
        return null;
    }

    return (
        <>
            {/* The first script loads the Google Analytics library asynchronously. */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />
            {/* The second script initializes Google Analytics and sets up pageview tracking. */}
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                // We use a template literal to inject the measurement ID.
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${measurementId}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    );
}
