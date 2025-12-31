import { SlideLeft, SlideRight, SlideUp } from '@/components/shared/animation';
import { WhyWork } from '@/components/shared/WhyWork';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Layout from '@/layouts/layout';
import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { motion } from 'framer-motion';
import {
    ChartNoAxesCombined,
    CreditCard,
    FilePlus,
    PhoneCall,
    SquareCheck,
    Users,
} from 'lucide-react';
export const features = [
    {
        heading: 'A nossa visão',
        description:
            'Ser uma escola de condução de referência em Portugal, reconhecida pela qualidade do ensino, elevada taxa de aprovação e confiança dos nossos alunos.',
        icon: <ChartNoAxesCombined className="size-6" />,
    },
    {
        heading: 'A nossa experiência',
        description:
            'Instrutores certificados e experientes, métodos de ensino modernos, acompanhamento personalizado e preparação completa para os exames teóricos e práticos.',
        icon: <Users className="size-6" />,
    },
    {
        heading: 'A nossa missão',
        description:
            'Formar condutores responsáveis, confiantes e preparados para a estrada, garantindo segurança, profissionalismo e sucesso em todas as etapas do processo.',
        icon: <FilePlus className="size-6" />,
    },
    {
        heading: 'Os nossos serviços',
        description:
            'Carta de condução categoria B, aulas teóricas e práticas, código da estrada, simuladores, horários flexíveis e acompanhamento até à aprovação final.',
        icon: <CreditCard className="size-6" />,
    },
];

const About = () => {
    const stats = [
        { value: 12, label: 'Anos de experiência' },
        { value: 30, label: 'Empresas parceiras' },
        { value: 450, label: 'Clientes satisfeitos' },
    ];

    return (
        <Layout>
            <main>
                <div className="px-2 py-5 md:px-10 lg:px-20 lg:py-32 bg-gray-500 ">
                    {/* Section Qui sommes-nous */}
                    <div className="mx-auto py-10  ">
                        {/* <div className="grid items-stretch gap-8 lg:grid-cols-2"> */}
                        <div className="flex flex-col items-stretch lg:flex-row  ">
                            {/* Colonne gauche */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                                variants={SlideRight(0.2)}
                                className="flex flex-col items-center justify-between rounded-xl md:items-start lg:w-1/3 lg:gap-4 lg:py-8  "
                            >
                                <Badge className="bg-secondary p-2 px-5 text-sm font-bold text-primary">
                                    Sobre nós
                                </Badge>

                                <h2 className="text-3xl font-bold text-secondary lg:text-4xl">
                                    Quem somos nós?
                                </h2>

                                <Separator className="max-w-20 border-2 border-secondary" />

                                <div className="mt-4 flex w-full items-start">
                                    <img
                                        src="/about-image.png"
                                        alt="Équipe SCCONAS"
                                        className="h-full  w-full rounded-lg object-contain lg:w-4/5"
                                    />
                                </div>
                            </motion.div>

                            {/* Colonne droite */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2 }}
                                variants={SlideLeft(0.2)}
                                className="flex flex-1 flex-col justify-between gap-8 rounded-xl bg-gradient-to-br py-8"
                            >
                                {/* Description */}
                                <p className="text-justify text-sm leading-relaxed text-white md:text-xl">
                                    Na nossa escola, não perdemos tempo - e você
                                    também não deveria. Especializamo-nos em
                                    formação acelerada para quem realmente
                                    precisa da carta de condução rapidamente.
                                    Com horários flexíveis que se adaptam à sua
                                    vida, instrutores certificados focados nos
                                    seus pontos fracos e um método intensivo
                                    testado por mais de 2.500 alunos aprovados,
                                    transformamos a pressão do tempo num aliado.
                                    Se já reprovou, se trabalha e não tem meses
                                    disponíveis, ou se simplesmente quer a sua
                                    liberdade de conduzir agora - escolha quem
                                    entende a sua urgência e entrega resultados.
                                </p>

                                {/* Statistiques */}
                                <div className="grid grid-cols-3 gap-4">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ amount: 0.3 }}
                                            variants={SlideUp(index / 3)}
                                            className={cn(
                                                'flex flex-col justify-between rounded-lg p-2 text-center shadow-md',

                                                index == 0
                                                    ? 'bg-gray-400'
                                                    : 'bg-gray-200',
                                            )}
                                        >
                                            <p className="mb-2 text-xl font-bold text-primary lg:text-3xl">
                                                +
                                                <NumberFlow
                                                    value={stat.value}
                                                />
                                            </p>
                                            <p className="text-xs font-medium text-gray-600 lg:text-xl">
                                                {stat.label}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Contact CTA */}
                                <div className="flex flex-col items-start justify-between gap-10 rounded-xl sm:flex-row md:gap-20">
                                    <Button className="h-full min-w-50 bg-primary px-4 text-xl text-white hover:bg-primary/90">
                                        Contate-nos
                                    </Button>

                                    <div className="flex items-center justify-between gap-4">
                                        <span className="flex rounded-xl bg-primary p-5 text-secondary">
                                            <PhoneCall className="size-8" />
                                        </span>

                                        <div className="flex flex-col gap-2">
                                            <p className="text-xl font-semibold text-gray-200">
                                                Precisar de ajuda?
                                            </p>
                                            <p className="text-2xl font-semibold text-white">
                                                +351 962 395 172
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Section Nos valeurs */}

                <WhyWork
                    title="Os nossos valores"
                    features={features}
                    description="Na nossa empresa, os nossos valores baseiam-se na confiança, profissionalismo e relações próximas, para oferecer a cada cliente um apoio fiável e personalizado."
                />

                {/* section pourquoi nous ? */}

                <div className="container flex flex-col gap-16 py-10 lg:px-30">
                    <div className="grid gap-6 p-2 md:grid-cols-2 lg:gap-8">
                        <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-15">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                                variants={SlideRight(0.2)}
                                className="flex flex-col items-start justify-between gap-10 px-6 py-6 text-white md:p-8"
                            >
                                <div className="flex flex-row items-center gap-5">
                                    <SquareCheck
                                        size={64}
                                        className="min-w-15 text-secondary"
                                    />
                                    <span className="flex flex-col justify-between gap-2">
                                        <h3 className="text-xl font-black text-secondary md:text-2xl">
                                            Formação Acelerada Comprovada
                                        </h3>
                                        <p className="text-sm md:text-xl">
                                            Obtenha a sua carta em 15 a 30 dias
                                            com o nosso método intensivo. Taxa
                                            de aprovação de 92% que fala por si.
                                        </p>
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-5">
                                    <SquareCheck
                                        size={64}
                                        className="h-full min-w-15 text-secondary"
                                    />
                                    <span className="flex flex-col justify-between gap-2">
                                        <h3 className="text-xl font-black text-secondary md:text-2xl">
                                            Horários Ultra Flexíveis
                                        </h3>
                                        <p className="text-sm md:text-xl">
                                            Aulas de manhã, tarde, noite e fins
                                            de semana. Adaptamos aos seus
                                            horários, não o contrário.
                                        </p>
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                                variants={SlideLeft(0.2)}
                                className="overflow-hidden rounded-xl"
                            >
                                <img
                                    src="/image4.jpg"
                                    alt="Formação Acelerada"
                                    className="aspect-16/9 h-full w-full object-cover object-center"
                                />
                            </motion.div>
                        </div>

                        <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-30">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                                variants={SlideRight(0.2)}
                                className="overflow-hidden rounded-xl"
                            >
                                <img
                                    src="/image5.jpg"
                                    alt="Especialistas em Recandidatos"
                                    className="aspect-16/9 h-full w-full object-cover object-center"
                                />
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                                variants={SlideLeft(0.2)}
                                className="flex flex-col items-start justify-between gap-10 px-6 py-6 text-white md:p-8"
                            >
                                <div className="flex flex-row items-center gap-5">
                                    <SquareCheck
                                        size={64}
                                        className="min-w-15 text-secondary"
                                    />
                                    <span className="flex flex-col justify-between gap-2">
                                        <h3 className="text-xl font-black text-secondary md:text-3xl">
                                            Especialistas em Recandidatos
                                        </h3>
                                        <p className="text-sm md:text-xl">
                                            Já reprovou? Somos especialistas em
                                            analisar os seus erros e preparar
                                            para passar na próxima tentativa.
                                        </p>
                                    </span>
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <SquareCheck
                                        size={64}
                                        className="min-w-15 text-secondary"
                                    />
                                    <span className="flex flex-col justify-between gap-2">
                                        <h3 className="gap-2 text-xl font-black text-secondary md:text-3xl">
                                            Tecnologia de Ponta
                                        </h3>
                                        <p className="text-sm md:text-xl">
                                            Simulador profissional, exames
                                            simulados no percurso real e
                                            acompanhamento personalizado até à
                                            aprovação.
                                        </p>
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default About;
