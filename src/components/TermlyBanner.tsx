'use client';

import Script from 'next/script';

export default function TermlyBanner() {
    const uuid = '8cab5cd3-0553-46d1-b03f-eb64becf868d'; // Your website UUID from the image

    return (
        <Script
            id="termly-cmp"
            src="https://app.termly.io/resource-locker/8cab5cd3-0553-46d1-b03f-eb64becf868d/termly.js"
            async
            data-uuid={uuid}
        />
    );
}
