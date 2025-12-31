import { cn } from '@/lib/utils';
import { ChartNoAxesCombined, CircleAlert, CreditCard, FilePlus, MessageSquareText, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlideUp } from './animation';

interface Feature {
    heading: string;
    description: string;
    icon: React.ReactNode;
}

interface Feature43Props {
    title?: string;
    features?: Feature[];
    description?: string;
}

const WhyWork = ({
    title = 'Scconas Assurances, comment ça marche ?',

    features = [
        {
            heading: 'Estimation de prime',
            description: 'Fournissez les informations nécessaires pour établir votre devis. C’est instantané et sans obligation de souscription.',
            icon: <ChartNoAxesCombined className="size-6" />,
        },
        {
            heading: 'Inscription',
            description: 'Identifiez-vous pour sauvegarder vos parcours. Votre numéro de téléphone suffit.',
            icon: <Users className="size-6" />,
        },
        {
            heading: 'Souscription',
            description: 'Automobile, Moto à 2 roues, Multirisque Habitation et voyage. Un seul compte pour gérer toutes vos souscriptions.',
            icon: <FilePlus className="size-6" />,
        },
        {
            heading: 'Paiement en ligne',
            description: "Par Orange ou par Carte bancaire. C'est vous qui choisissez. C'est rapide et sécurisé.",
            icon: <CreditCard className="size-6" />,
        },
        {
            heading: 'Déclaration de sinistres',
            description: 'Faites vos déclarations en ligne et suivez en temps réel l’avancement de votre dossier sans vous déplacer.',
            icon: <CircleAlert className="size-6" />,
        },
        {
            heading: 'Assistance en temps réel',
            description: 'Ecrivez-nous via Chat et WhatsApp pour une prise en charge effective par nos équipes.',
            icon: <MessageSquareText className="size-6" />,
        },
    ],
    description = '',
}: Feature43Props) => {
    return (
        <section className="bg-primary/50 px-5 py-32 text-white lg:px-15">
            <div className="">

                {title && (
                    <div className="mx-auto mb-16 max-w-4xl space-y-4 text-center">
                        <h2 className="text-xl font-medium   text-white lg:text-4xl">{title}</h2>
                        <p className="text-sm text-center text-white/75 lg:text-xl">{description}</p>
                    </div>
                )}

                <div
                    className={cn(
                        'grid gap-10 md:grid-cols-2',
                        features.length == 4 ? 'lg:grid-cols-2' : 'lg:grid-cols-3',
                    )}
                >
                    {features.map((feature, i) => (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3  ,once: true  }}
                            variants={SlideUp(i / 24)}
                            key={i}
                            className="relative flex flex-col gap-6 rounded-xl bg-white/20 p-8 text-white transition-all duration-150 ease-in hover:bg-gray-300 hover:text-black"
                        >
                            <div className="absolute top-0 left-1/2 w-1/2 -translate-x-1/2 rounded-3xl border-2 border-secondary"></div>
                            <div className="mb-5 flex size-16 items-center justify-center  text-primary rounded-md bg-secondary">{feature.icon}</div>
                            <h3 className="mb-2 text-xl font-semibold ">{feature.heading}</h3>
                            <p className="">{feature.description}</p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { WhyWork };