import { Footer } from '@/components/shared/Footer';
import { Hero } from '@/components/shared/hero';
import { Navbar } from '@/components/shared/navbar5';
import ParticlesBackground from '@/components/shared/ParticlesBackground';
import ScrollToTop from '@/components/shared/scroll-top';
import Testimonials from '@/components/shared/Testimonials';
import { Toaster } from '@/components/ui/sonner';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    console.log(auth);

    return (
        <div className="relative min-h-screen overflow-hidden bg-transparent">
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <Navbar />
            <Hero />

            <div className="relative z-0"></div>

            <ParticlesBackground />
            <Toaster position="top-center" className="bg-white text-primary" />
            {/* Background avec overlay */}
            <div className="fixed inset-0 -z-10 bg-[url(/img/hero_movie.gif)] bg-cover bg-fixed bg-center bg-no-repeat" />

            {/* Overlay optionnel pour améliorer la lisibilité */}
            <div className="fixed inset-0 -z-10 bg-black/70" />

            <Testimonials />
            <ScrollToTop />
            <Footer />
        </div>
    );
}
