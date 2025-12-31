import { motion } from 'framer-motion';
import { TestimonialsColumn } from './testimonials-columns';

const testimonials = [
    {
        text: 'Consegui a minha carta em apenas 20 dias com a Scconas! Tinha reprovado duas vezes antes, mas o método deles é incrível. O instrutor identificou os meus erros e corrigiu tudo rapidamente.',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Miguel Santos',
        role: 'Comerciante – Lisboa, Portugal',
    },
    {
        text: 'Precisava urgentemente da carta para o meu novo emprego. A Scconas salvou-me! Formação intensiva aos fins de semana e passei à primeira. Recomendo a toda a gente com pressa.',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Ana Rodrigues',
        role: 'Gestora de projeto – Porto, Portugal',
    },
    {
        text: 'Depois de chumbar no exame, estava desanimado. A equipa da Scconas analisou os meus erros, fez aulas focadas e em 15 dias tinha a carta na mão. Valeu cada cêntimo!',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        name: 'João Silva',
        role: 'Engenheiro – Braga, Portugal',
    },
    {
        text: 'A formação express da Scconas é perfeita para quem trabalha. Aulas flexíveis, simulador profissional e acompanhamento personalizado. Tirei a carta sem stress em 3 semanas.',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Beatriz Costa',
        role: 'Enfermeira – Coimbra, Portugal',
    },
    {
        text: 'Já tinha as bases mas faltava-me confiança. O coaching individual da Scconas deu-me a segurança que precisava. Passei à segunda tentativa com 85% de aproveitamento!',
        image: 'https://randomuser.me/api/portraits/men/41.jpg',
        name: 'Ricardo Pereira',
        role: 'Empresário – Faro, Portugal',
    },
    {
        text: 'Como mãe ocupada, não tinha tempo para uma escola tradicional. A Scconas adaptou-se aos meus horários e consegui a carta em tempo recorde. Serviço 5 estrelas!',
        image: 'https://randomuser.me/api/portraits/women/28.jpg',
        name: 'Sofia Martins',
        role: 'Professora – Setúbal, Portugal',
    },
    {
        text: 'Reprovei três vezes noutras escolas. Na Scconas, percebi finalmente onde errava. O método intensivo funciona mesmo. Em 2 semanas estava pronto e passei!',
        image: 'https://randomuser.me/api/portraits/men/67.jpg',
        name: 'Pedro Oliveira',
        role: 'Consultor – Aveiro, Portugal',
    },
    {
        text: 'A formação acelerada é ideal para quem já sabe conduzir mas precisa de aperfeiçoar. Instrutores experientes, horários flexíveis e resultados garantidos. Top!',
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        name: 'Mariana Fernandes',
        role: 'Arquiteta – Viseu, Portugal',
    },
    {
        text: 'Estava sem carta há 2 anos por ter chumbado. A Scconas deu-me uma segunda oportunidade com um programa personalizado. Hoje conduzo com total confiança!',
        image: 'https://randomuser.me/api/portraits/men/29.jpg',
        name: 'Tiago Sousa',
        role: 'Motorista profissional – Leiria, Portugal',
    },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
    return (
        <section className="relative my-5 bg-primary/20 p-5">
            <div className="m z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true }}
                    className="mx-auto flex w-full flex-col items-center justify-center"
                >
                    <h2 className="mt-5 text-xl font-bold tracking-tighter text-white sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                        Que pessoas {''}
                        <span className="text-primary">pensar</span> de nós
                    </h2>
                    <p className="mt-5 text-center text-sm text-white opacity-75 lg:w-2/3">
                        Os nossos valores são a base da nossa identidade,
                        orientando as nossas ações e decisões rumo a um futuro
                        marcado pela integridade, respeito e solidariedade.
                    </p>
                </motion.div>

                <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                    <TestimonialsColumn
                        testimonials={firstColumn}
                        duration={15}
                    />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        className="hidden md:block"
                        duration={19}
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        className="hidden lg:block"
                        duration={17}
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
