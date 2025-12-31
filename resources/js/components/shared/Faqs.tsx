export function Faqs() {
    return (
        <FaqSection
            title="Perguntas frequentes."
            description="Tudo o que precisa de saber sobre a nossa plataforma."
            items={DEMO_FAQS}
            contactInfo={{
                title: 'Still have questions?',
                description: "We're here to help you",
                buttonText: 'Contate-nos',
                onContact: () => console.log('Contact support clicked'),
            }}
        />
    );
}

export const DEMO_FAQS = [
    {
        question: 'Quanto tempo leva para tirar a carta?',
        answer: 'Com os nossos programas acelerados, pode obter a carta em 15 a 30 dias. O tempo exato depende da sua disponibilidade e do nível de experiência prévia que já possui.',
    },
    {
        question: 'E se eu já reprovei no exame?',
        answer: 'Não há problema! Somos especializados em ajudar quem já reprovou. Analisamos os seus erros, fazemos aulas focadas nas suas dificuldades e preparamos-lhe para passar à próxima tentativa.',
    },
    {
        question: 'Posso fazer aulas aos fins de semana?',
        answer: 'Sim! Oferecemos horários flexíveis incluindo fins de semana e noites. O nosso programa intensivo de fim de semana permite obter a carta em 3 fins de semana consecutivos.',
    },
    {
        question: 'Quanto custa a formação acelerada?',
        answer: 'Os preços variam conforme o programa escolhido (15 dias, 30 dias, fins de semana). Contacte-nos para um orçamento personalizado. Oferecemos também facilidades de pagamento.',
    },
    {
        question: 'Qual é a taxa de aprovação?',
        answer: 'Temos uma taxa de aprovação de 89-92% ao primeiro exame para novos alunos, e 92% ao segundo exame para quem já reprovou anteriormente. O nosso método intensivo é comprovadamente eficaz.',
    },
];

export const DRIVING_LICENSE_FAQS = [
    {
        question: 'Preciso fazer o código teórico novamente?',
        answer: 'Depende. Se já tem o código aprovado e ainda está dentro do prazo de validade, não precisa repetir. Se expirou, temos um programa de revisão express do código em apenas 1 semana.',
    },
    {
        question: 'Quantas aulas de condução vou precisar?',
        answer: 'Para quem já tem bases, normalmente 8 a 12 aulas intensivas são suficientes. Fazemos uma avaliação inicial gratuita para determinar o número exato de aulas que precisa.',
    },
    {
        question: 'O que inclui o programa de remise a nível?',
        answer: 'Inclui avaliação dos seus erros anteriores, aulas focadas nas suas dificuldades, treino com simulador profissional, exame simulado e acompanhamento personalizado até à aprovação.',
    },
    {
        question: 'Posso escolher o meu instrutor?',
        answer: 'Sim! Todos os nossos instrutores são certificados e especializados em formação acelerada. Pode escolher o que melhor se adapta ao seu ritmo de aprendizagem e disponibilidade.',
    },
];

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';
import * as React from 'react';
import { Badge } from '../ui/badge';
import { SlideLeft, SlideUp } from './animation';

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    description?: string;
    items: {
        question: string;
        answer: string;
    }[];
    contactInfo?: {
        title: string;
        description: string;
        buttonText: string;
        onContact?: () => void;
    };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
    ({ className, title, description, items, contactInfo, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    'my-10 w-full bg-gradient-to-b from-primary/50 to-transparent py-16 backdrop-blur-xs md:px-15 lg:px-30',
                    className,
                )}
                {...props}
            >
                <div className="container">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }} // once: true,
                        variants={SlideUp(0.2)}
                        className="mx-auto mb-12 max-w-4xl text-center"
                    >
                        <h2 className="mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-2xl font-semibold text-secondary md:text-4xl">
                            {title}
                        </h2>
                        {description && (
                            <p className="text-sm text-gray-100 md:text-xl">
                                {description}
                            </p>
                        )}
                    </motion.div>

                    <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
                        {/* FAQ Items */}
                        <div className="mx-auto max-w-full space-y-2 lg:w-3/5">
                            {items.map((item, index) => (
                                <FaqItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Contact Section */}
                        {contactInfo && (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }} // once: true,
                                variants={SlideLeft(0.2)}
                                className="flex h-full max-w-md flex-col justify-between gap-5 rounded-lg text-center"
                            >
                                <img
                                    src="/interrogation.png"
                                    alt="point ??"
                                    className="h-50 md:h-80"
                                />

                                <p className="mb-1 text-xl font-medium text-secondary md:text-3xl">
                                   Outras perguntas
                                </p>

                                <Link
                                    href="#contact"
                                    className="cursor-pointer"
                                >
                                    <Button
                                        // href={contact()}
                                        className="min-h-15 min-w-50 cursor-pointer bg-primary px-4 text-2xl text-secondary"
                                        onClick={contactInfo.onContact}
                                    >
                                        {contactInfo.buttonText}
                                    </Button>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        );
    },
);
FaqSection.displayName = 'FaqSection';

// Internal FaqItem component
const FaqItem = React.forwardRef<
    HTMLDivElement,
    {
        question: string;
        answer: string;
        index: number;
    }
>((props, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { question, answer, index } = props;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }} // once: true,
            variants={SlideUp(index / 3)}
            className={cn(
                'group w-full rounded-lg',

                'transition-all duration-200 ease-in-out',
                'border border-border/50',
                isOpen
                    ? 'bg-gradient-to-br from-background via-muted/70 to-background transition-all duration-200 ease-in'
                    : 'hover:bg-muted/50 hover:text-primary',
            )}
        >
            <Button
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-auto w-full justify-between bg-primary/80 px-1.5 py-4 transition-all duration-200 ease-in hover:bg-transparent hover:text-primary"
            >
                <h3
                    className={cn(
                        'flex max-w-11/12 items-center justify-between gap-2 text-left text-base font-medium text-wrap transition-colors duration-200 md:text-xl',
                        'text-secondary hover:text-primary',
                        isOpen && 'text-secondary',
                    )}
                >
                    <Plus color="#FC3650" />
                    {question}
                    {/* <span className='text-wrap max-w-8/12 '>{question}</span> */}
                </h3>

                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        'flex-shrink-0 rounded-full p-0.5',
                        'transition-colors duration-200',
                        isOpen ? 'text-primary' : 'text-muted-foreground',
                    )}
                >
                    <Badge className="h-6 min-w-6 rounded-full bg-secondary px-1 font-mono tabular-nums">
                        <ChevronDown className="h-4 w-4" color="#FC3650" />
                    </Badge>
                </motion.div>
            </Button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }} // once: true,
                        variants={SlideUp(0.1)}
                        className=""
                    >
                        <div className="px-6 pt-2 pb-4">
                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-xl leading-relaxed text-black"
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});
FaqItem.displayName = 'FaqItem';

export { FaqSection };
