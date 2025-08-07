import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center text-center bg-gray-50 py-20 sm:py-40">
                <h1 className="text-6xl font-bold text-orange-500">404</h1>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                    Page Not Found
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
                >
                    Go Back Home
                </Link>
            </main>
            <Footer />
        </>
    );
}
