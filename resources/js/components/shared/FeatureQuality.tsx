import { motion } from 'framer-motion';
import { Clock, Target, Trophy, Zap } from 'lucide-react';
import { SlideUp } from './animation';

interface Feature {
    heading: string;
    description: string;
    icon: React.ReactNode;
}

interface Feature43Props {
    title?: string;
    features?: Feature[];
    buttonText?: string;
    buttonUrl?: string;
}

const FeatureQuality = ({
    features = [
        {
            heading: 'Formação Express',
            description:
                'Obtenha a sua carta em 15 a 30 dias com o nosso método intensivo',
            icon: <Zap className="size-6" />,
        },
        {
            heading: 'Horários Flexíveis',
            description:
                'Aulas de manhã, tarde, noite e fins de semana adaptadas a si',
            icon: <Clock className="size-6" />,
        },
        {
            heading: 'Especialistas em Recandidatos',
            description:
                'Análise dos seus erros e treino focado para garantir a aprovação',
            icon: <Target className="size-6" />,
        },
        {
            heading: '92% de Aprovação',
            description:
                'Taxa de sucesso comprovada com instrutores certificados',
            icon: <Trophy className="size-6" />,
        },
    ],
}: Feature43Props) => {
    return (
        <section className="relative bg-primary px-5 md:px-10">
            <div className="container">
                <div className="grid gap-10 text-white md:grid-cols-2 lg:grid-cols-4 ">
                    {features.map((feature, i) => (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }}
                            variants={SlideUp(0.1)}
                            key={i}
                            className="flex flex-col p-5 transition-all duration-200 ease-in hover:bg-white/20"
                        >
                            <div className="mb-5 flex size-12 items-center justify-center rounded-full   transition-all duration-200 ease-in  bg-gray-500 text-white">
                                {feature.icon}
                            </div>
                            <h3 className="mb-2 text-sm font-semibold">
                                {feature.heading}
                            </h3>
                            <p className="text-xs text-white/75">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { FeatureQuality };
