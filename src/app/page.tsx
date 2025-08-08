import BenefitsSection from '@/components/landing/BenefitsSection';
import FaqSection from '@/components/landing/Faq';
import FounderStorySection from '@/components/landing/FounderStory';
import Hero from '@/components/landing/Hero';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import ProblemSection from '@/components/landing/ProblemSection';
//import TestimonialsSection from '@/components/landing/TestimonialsSection';
import WaitlistForm from '@/components/landing/WaitlistForm';

export default function Home() {
    return (
        <main>
            <Hero />
            <ProblemSection />
            <HowItWorksSection />
            <BenefitsSection />
            {/*<TestimonialsSection />*/}
            <FounderStorySection />
            <FaqSection />
            <WaitlistForm />
        </main>
    );
}
