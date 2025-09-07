import BenefitsSection from '@/components/landing/BenefitsSection';
import FaqSection from '@/components/landing/Faq';
import FounderStorySection from '@/components/landing/FounderStory';
import Hero from '@/components/landing/Hero';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import ProblemSection from '@/components/landing/ProblemSection';
//import TestimonialsSection from '@/components/landing/TestimonialsSection';
//import WaitlistForm from '@/components/landing/WaitlistForm';

export default function Home() {
    return (
        <main>
            <Hero />
            <ProblemSection />
            {/* We'll give an ID to the "How it Works" section */}
            <div id="how-it-works">
                <HowItWorksSection />
            </div>

            {/* The benefits section can be our "Features" */}
            <div id="features">
                <BenefitsSection />
            </div>

            {/* The founder story can be "About" */}
            <div id="about">
                <FounderStorySection />
            </div>

            {/* And finally, the FAQ section */}
            <div id="faq">
                <FaqSection />
            </div>
        </main>
    );
}
