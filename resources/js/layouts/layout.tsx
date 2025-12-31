// layouts/layout.tsx
import ClickSpark from '@/components/shared/ClickSpark';
import { Faqs } from '@/components/shared/Faqs';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/navbar5';
import ParticlesBackground from '@/components/shared/ParticlesBackground';
import ScrollToTop from '@/components/shared/scroll-top';
import Testimonials from '@/components/shared/Testimonials';
import useFlashMessages from '@/hooks/FlashMessages';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

interface typeProps {
    children: ReactNode;
}

const Layout = ({ children }: typeProps) => {
    useFlashMessages();

    return (
        <div className="relative min-h-screen overflow-hidden bg-transparent">
            <ParticlesBackground />

            {/* ✅ UN SEUL Toaster ici */}
            <Toaster
                position="top-center"
                richColors
                closeButton
                duration={4000}
            />

            <ClickSpark
                sparkColor="#C7D100"
                sparkSize={12}
                sparkRadius={15}
                sparkCount={8}
                duration={500}
            >
                {/* Overlay avec motif */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="fixed inset-0 -z-10 bg-black/70" />

                <Navbar />

                {children}

                <Testimonials />
                <Faqs />
                <Footer />
                <ScrollToTop />
            </ClickSpark>
        </div>
    );
};

export default Layout;
