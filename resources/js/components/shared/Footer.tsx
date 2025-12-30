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
        src: '/images/logo_scconas.jpg',
        alt: 'logo',
        title: '',
    },
    sections = defaultSections,
    description = 'A collection of components for your startup business or side project.',
    socialLinks = defaultSocialLinks,
    copyright = '© Copyright 2025, All Rights Reserved by Scconas',
    legalLinks = defaultLegalLinks,
}: Footer7Props) => {
    return (
        <section className="px-5 py-16 md:px-15 lg:px-30 bg-primary text-white   ">
            <div className="container">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left     ">
                    <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                        {/* Logo */}
                        <div className="flex items-center gap-2 lg:justify-start">
                            <a href={logo.url}>
                                <img src={logo.src} alt={logo.alt} title={logo.title} className="h-10" />
                            </a>
                            <h2 className="text-xl font-semibold">{logo.title}</h2>
                        </div>
                        <p className="max-w-[70%] text-sm text-white">{description}</p>
                        <ul className="flex items-center space-x-6 text-white">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="font-medium hover:text-secondary">
                                    <a href={social.href} aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold">{section.title}</h3>
                                <ul className="space-y-3 text-sm text-white/75">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx} className="font-medium hover:text-secondary">
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-white/65 md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-secondary">
                                <a href={link.href}> {link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export { Footer };