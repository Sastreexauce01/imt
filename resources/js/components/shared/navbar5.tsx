'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
// import { features, navLinks } from '@/data/nav';
import { cn } from '@/lib/utils';
import { login } from '@/routes';
import { Link, usePage } from '@inertiajs/react';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export const features = [
    {
        title: 'Dashboard',
        description: 'Overview of your activity',
        href: '#',
    },
    {
        title: 'Analytics',
        description: 'Track your performance',
        href: '#',
    },
    {
        title: 'Settings',
        description: 'Configure your preferences',
        href: '#',
    },
    {
        title: 'Integrations',
        description: 'Connect with other tools',
        href: '#',
    },
];

export const navLinks = [

   {
        href: '#acceuil',
        name: 'Home',
    },

    {
        href: '/about',
        name: 'Qui sommes-nous ?',
    },

    
    {
        href: '/contact',
        name: 'Contact',
    },
];

const Navbar = () => {
    const { url } = usePage();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 🔥 styles selon scroll
    const baseStyle =
        ' md:px-15  lg:px-30  w-full px-6 py-4 transition-all duration-300 fixed top-0 left-0 z-50';

    const topStyle = 'bg-transparent shadow-none text-white'; // style en haut de page

    const scrolledStyle =
        'bg-background/70 backdrop-blur-lg shadow-xl shadow-primary/10'; // style quand scroll
    const containerStyle = cn(baseStyle, isScrolled ? scrolledStyle : topStyle);

    return (
        <section
            // className={cn(
            //     'z-10 hidden px-5 py-4 shadow-xl shadow-primary/15 transition-all duration-300 md:px-15',
            //     isScrolled && 'fixed top-0 flex w-full bg-background/50 backdrop-blur-lg transition-all duration-150',
            // )}

            className={containerStyle}
        >
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex cursor-pointer items-center gap-2"
                    >
                        <img
                            src="/logo.png"
                            className="max-h-10"
                            alt="Shadcn UI Navbar"
                        />
                    </Link>

                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            {navLinks.map((item, index) => {
                                const isActive = url === item.href;
                                return (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuLink
                                            href={item.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                isActive &&
                                                    'font-bold text-secondary', // ✅ lien actif en gras
                                                'bg-transparent transition-all duration-100 ease-in',
                                            )}
                                        >
                                            {item.name}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link
                        href={login()}
                        className="hidden cursor-pointer items-center gap-4 lg:flex"
                    >
                        <Button className="cursor-pointer bg-primary text-secondary">
                            Mon Espace
                        </Button>
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4 text-black" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="top"
                            className="max-h-screen overflow-auto"
                        >
                            <SheetHeader>
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <img
                                            src="/images/logo_scconas.jpg"
                                            className="max-h-8"
                                            alt=""
                                        />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col p-4">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="mt-4 mb-2"
                                >
                                    <AccordionItem
                                        value="solutions"
                                        className="border-none"
                                    >
                                        <AccordionTrigger className="text-base hover:no-underline">
                                            Souscrire en ligne
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="grid md:grid-cols-2">
                                                {features.map(
                                                    (feature, index) => (
                                                        <a
                                                            href={feature.href}
                                                            key={index}
                                                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                                        >
                                                            <div
                                                                key={
                                                                    feature.title
                                                                }
                                                            >
                                                                <p className="mb-1 font-semibold text-foreground">
                                                                    {
                                                                        feature.title
                                                                    }
                                                                </p>
                                                                <p className="text-sm text-muted-foreground">
                                                                    {
                                                                        feature.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    ),
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <div className="flex flex-col gap-6">
                                    {navLinks.map((item, index) => (
                                        <Link
                                            href={item.href}
                                            key={index}
                                            className="font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    className="mt-6 flex flex-col gap-4"
                                    href={login()}
                                >
                                    <Button className="cursor-pointer bg-primary text-secondary">
                                        Mon Espace
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export { Navbar };
