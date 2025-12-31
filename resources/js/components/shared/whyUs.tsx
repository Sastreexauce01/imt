import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, CircleCheck } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { SlideLeft, SlideRight } from './animation';

// interface Feature2Props {
//     title: string;
//     description?: string;
//     imageSrc: string;
//     imageAlt: string;
//     buttonPrimary: {
//         text: string;
//         href: string;
//     };
//     buttonSecondary: {
//         text: string;
//         href: string;
//     };
// }

const WhyUs = () => {
    const title = 'Porquê nos escolher';
    const description =
        'Na nossa escola, não perdemos tempo - e você também não deveria. Especializamo-nos em formação acelerada para quem realmente precisa da carta de condução rapidamente. Com horários flexíveis que se adaptam à sua vida, instrutores certificados focados nos seus pontos fracos e um método intensivo testado por mais de 2.500 alunos aprovados, transformamos a pressão do tempo num aliado. Se já reprovou, se trabalha e não tem meses disponíveis, ou se simplesmente quer a sua liberdade de conduzir agora - escolha quem entende a sua urgência e entrega resultados.';
    const imageSrc =
        'https://t.commonsupport.com/rochester/images/resource/why-us.png';
    const imageAlt = 'sinistre ';
    const buttonPrimary = {
        text: 'Contate-nos',
        href: '/contact',
    };

    const features = [
        'Método Acelerado Comprovado',
        'Instrutores Certificados e Experientes',
        'Taxa de Aprovação de 92%',
        'Horários Flexíveis 7 dias/7',
        'Especialistas em Recandidatos',
        'Simulador Profissional Incluído',
    ];

    return (
        <section className="bg-white/90 px-5 py-0 text-black md:px-10 lg:px-30">
            <div className="">
                <div className="grid items-center gap-4 md:gap-16 lg:grid-cols-2">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }} // once: true,
                        variants={SlideLeft(0.2)}
                        className="order-1 flex flex-col items-center gap-4 py-5 text-center lg:order-1 lg:items-start lg:text-left"
                    >
                        <Badge className="bg-gray-300 p-2 text-sm text-primary">
                            Quem somos
                        </Badge>
                        <h2 className="my-6 mt-0 text-2xl font-semibold text-balance text-black lg:text-5xl">
                            {title}
                        </h2>
                        <Separator className="max-w-15 border-2 border-primary" />
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }} // once: true,
                            variants={SlideRight(0.2)}
                            src={imageSrc}
                            alt={imageAlt}
                            className="min-h-1/2 w-full rounded-md object-cover lg:hidden"
                        />
                        {description && (
                            <p className="mb-8 max-w-xl text-justify text-xl text-gray-500 lg:text-lg">
                                {description}
                            </p>
                        )}

                        <div className="grid w-full grid-cols-1 gap-y-4 md:grid-cols-2">
                            {features.map((item, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-5 text-sm"
                                >
                                    <CircleCheck
                                        size={16}
                                        className="text-primary"
                                    />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <Link classID="" href={buttonPrimary.href}>
                            <Button className="h-12 py-4 text-xl" size={'lg'}>
                                {buttonPrimary.text}{' '}
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.img
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }} // once: true,
                        variants={SlideRight(0.2)}
                        src={imageSrc}
                        alt={imageAlt}
                        className="order-2 hidden h-full w-full object-cover lg:order-1 lg:block"
                    />
                </div>
            </div>
        </section>
    );
};

export { WhyUs };
