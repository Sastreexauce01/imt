import { FeatureQuality } from '@/components/shared/FeatureQuality';
import { Hero } from '@/components/shared/hero';
import ParticlesBackground from '@/components/shared/ParticlesBackground';
import { WhyUs } from '@/components/shared/whyUs';
import { WhyWork } from '@/components/shared/WhyWork';

import { Toaster } from '@/components/ui/sonner';
import Layout from '@/layouts/layout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { features } from './about';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    console.log(auth);

    // const data = [
    //     { label: 'Years on the Market', value: 20 },
    //     { label: 'Award Won', value: 20 },
    //     { label: 'Owned Vehicles', value: 20 },
    //     { label: 'Num Of Teachers', value: 20 },
    //     { label: 'Training Hours', value: 20 },
    //     { label: 'Graduates', value: 20 },
    // ];

    return (
        <Layout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <ParticlesBackground />
            <Toaster position="top-center" className="bg-white text-primary" />

            <Hero />
            <FeatureQuality />
            <WhyUs />
            <WhyWork
                title="Os nossos valores"
                features={features}
                description="Na nossa empresa, os nossos valores baseiam-se na confiança, profissionalismo e relações próximas, para oferecer a cada cliente um apoio fiável e personalizado."
            />
            <div></div>
        </Layout>
    );
}
