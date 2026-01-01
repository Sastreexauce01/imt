import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface Footer7Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultSections = [
    {
        title: 'Nos Produits',
        links: [
            { name: 'Assurance de Santé', href: '#' },
            { name: 'Assurance Auto', href: '#' },
            { name: 'Assurance Voyage', href: '#' },
            { name: 'Assurance des Grosses Pathologies', href: '#' },
        ],
    },
    {
        title: 'Notre entreprise',
        links: [
            { name: 'A propos de Scconas', href: '#' },
            { name: 'Pourquoi Scconas', href: '#' },
            { name: 'Contactez-nous', href: '#' },
            { name: 'Mentions Légales', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Assurance de Santé', href: '#' },
            { name: 'Assurance Auto', href: '#' },
            { name: 'Assurance Voyage', href: '#' },
            { name: 'Assurance des Grosses Pathologies', href: '#' },
        ],
    },
];

const defaultSocialLinks = [
    { icon: <FaInstagram className="size-5" />, href: '#', label: 'Instagram' },
    { icon: <FaFacebook className="size-5" />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter className="size-5" />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedin className="size-5" />, href: '#', label: 'LinkedIn' },
];

const defaultLegalLinks = [
    { name: 'Termes et conditions', href: '#' },
    { name: 'Politique de confidentialite', href: '#' },
];

const Footer = ({
    logo = {
        url: '/',
        src: 'https://autenticacao.imt-ip.pt/resources/bf8nu/login/imt-theme/img/logo-IMT-pq.svg',
        alt: 'logo',
        title: '',
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sections = defaultSections,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    description = 'A collection of components for your startup business or side project.',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    socialLinks = defaultSocialLinks,
    copyright = '© Copyright 2025, Todos os direitos reservados por IMt PT',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    legalLinks = defaultLegalLinks,
}: Footer7Props) => {
    return (
        <section className="bg-white px-5 py-16 text-black md:px-15 lg:px-30 w-full  ">
            <div className="w-full ">
                <div className="flex w-full flex-col lg:flex-row   justify-between gap-10  lg:items-start lg:text-left">

                    <div className="flex w-full flex-col items-center justify-between gap-6 lg:items-start">
                        {/* Logo */}
                        <div className="flex items-center gap-2 lg:justify-start">
                            <a href={logo.url}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    title={logo.title}
                                    className="h-10"
                                />
                            </a>
                            {/* <h2 className="text-xl font-semibold">
                                {logo.title}
                            </h2> */}
                        </div>
                    </div>

                    <p className="w-full text-center text-xs font-semibold md:text-right md:text-sm">
                        Instituto da Mobilidade e dos Transportes, I.P.
                    </p>
                </div>


                <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t py-8 text-xs font-medium text-black md:flex-row md:items-center md:text-left">
                    <p className="order-2 text-xs lg:order-1">{copyright}</p>
                </div>
            </div>
        </section>
    );
};

export { Footer };
