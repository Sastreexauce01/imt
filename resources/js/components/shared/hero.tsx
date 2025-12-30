import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SlideLeft, SlideRight } from './animation';

const Hero = () => {
    const services = [
        {
            img: '/image1.jpg',
            badge: 'Reforço expresso',
            title: 'Carta em 15 dias - Especial reprovados',
            description:
                'Programa personalizado para quem reprovou. Análise dos seus erros, 10h de condução focada e exame rápido. 92% de aprovação na 2ª tentativa.',
            href: '/formacoes/reforco-rapido',
        },
        {
            img: '/image4.jpg',
            badge: 'Stage intensivo fim de semana',
            title: 'Carta em 3 fins de semana',
            description:
                'Para quem trabalha durante a semana. Sessões intensivas sábado-domingo, simulador profissional e exame simulado. Obtenha a carta sem tirar férias.',
            href: '/formacoes/stage-weekend',
        },
        {
            img: '/image3.png',
            badge: 'Coaching individual',
            title: 'Acompanhamento VIP para sucesso garantido',
            description:
                'Instrutor dedicado, horários flexíveis e exame prioritário. Pacote completo até à obtenção da carta.',
            href: '/formacoes/coaching-vip',
        },
    ];

    // const stats = [
    //     {
    //         icon: Users,
    //         value: '2,500+',
    //         label: 'Élèves formés',
    //     },
    //     {
    //         icon: Award,
    //         value: '89%',
    //         label: 'Taux de réussite',
    //     },
    //     {
    //         icon: TrendingUp,
    //         value: '15 ans',
    //         label: "D'expérience",
    //     },
    // ];

    // Variants pour les animations

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Carousel de fond */}
            <Carousel
                className="absolute inset-0 h-full w-full"
                opts={{
                    loop: true,
                    duration: 40,
                }}
                plugins={[
                    Fade(),
                    Autoplay({
                        delay: 7000,
                        stopOnInteraction: false,
                    }),
                ]}
            >
                <CarouselContent className="h-full">
                    {services.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="relative h-screen w-full"
                        >
                            {/* Image de fond avec parallax */}
                            <motion.div
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 7, ease: 'easeOut' }}
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${item.img})` }}
                            >
                                {/* Gradient overlay amélioré */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />

                                {/* Overlay avec motif */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                        backgroundSize: '40px 40px',
                                    }}
                                />
                            </motion.div>

                            {/* Contenu */}
                            <div className="relative z-10 flex h-full flex-col">
                                <div className="container flex flex-1 items-center px-4 lg:px-8">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{
                                            amount: 0.3,
                                            once: true,
                                        }}
                                        variants={SlideLeft(0.2)}
                                        animate="visible"
                                        className="grid w-full items-center gap-8 text-white lg:grid-cols-1"
                                    >
                                        <div className="flex flex-col items-center p-8 text-center lg:items-start lg:p-16 lg:text-left">
                                            {/* Badge animé */}
                                            <motion.span
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{
                                                    amount: 0.3,
                                                    once: true,
                                                }}
                                                variants={SlideLeft(0.2)}
                                                className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-2.5 text-sm font-semibold ring-1 ring-white/20 backdrop-blur-md"
                                            >
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                                                </span>
                                                {item.badge}
                                            </motion.span>

                                            {/* Titre principal */}
                                            <motion.h1 className="mb-6 text-5xl leading-tight font-black text-pretty lg:text-7xl">
                                                {item.title}
                                            </motion.h1>

                                            {/* Description */}
                                            <motion.p
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{
                                                    amount: 0.3,
                                                    once: true,
                                                }}
                                                variants={SlideRight(0.2)}
                                                className="mb-10 max-w-2xl text-lg leading-relaxed text-white/90 lg:text-xl"
                                            >
                                                {item.description}
                                            </motion.p>

                                            {/* CTA Buttons */}
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{
                                                    amount: 0.3,
                                                    once: true,
                                                }}
                                                variants={SlideLeft(0.2)}
                                                className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start"
                                            >
                                                <Button
                                                    size="lg"
                                                    className="group h-14 gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-8 text-lg font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
                                                    asChild
                                                >
                                                    <a href={item.href}>
                                                        Découvrir la formation
                                                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </a>
                                                </Button>

                                                <Button
                                                    size="lg"
                                                    variant="outline"
                                                    className="h-14 border-2 border-white/40 bg-white/10 px-8 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/60 hover:bg-white/20"
                                                >
                                                    Nous contacter
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Statistiques flottantes */}
            {/* <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="absolute bottom-8 left-0 right-0 z-20 px-4 lg:bottom-16"
            >
                <div className="container mx-auto">
                    <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/20 lg:gap-8 lg:p-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={statsVariants}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center gap-2 text-white"
                            >
                                <stat.icon className="h-8 w-8 text-blue-400 lg:h-10 lg:w-10" />
                                <div className="text-2xl font-black lg:text-4xl">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-medium text-white/80 lg:text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div> */}

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-32 left-1/2 z-20 hidden -translate-x-1/2 lg:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="flex flex-col items-center gap-2 text-white/60"
                >
                    <span className="text-xs font-medium tracking-wider uppercase">
                        Défiler
                    </span>
                    <div className="h-8 w-5 rounded-full border-2 border-white/40">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="mx-auto mt-1 h-2 w-1 rounded-full bg-white/60"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export { Hero };
