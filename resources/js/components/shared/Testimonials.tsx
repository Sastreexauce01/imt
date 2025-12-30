import { motion } from 'framer-motion';
import { TestimonialsColumn } from './testimonials-columns';

const testimonials = [
  {
    text: "J’ai choisi Scconas Assurances pour assurer mon véhicule, et je ne regrette pas ! Le service est rapide, les démarches simples, et j’ai été indemnisé sans complications après un accident mineur.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Abdoulaye Traoré",
    role: "Commerçant – Abidjan, Côte d’Ivoire",
  },
  {
    text: "Scconas m’a beaucoup aidée lors d’un sinistre habitation. L’équipe a réagi immédiatement et m’a accompagnée jusqu’à la réparation complète de mon domicile. Un service client vraiment professionnel !",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Aminata Diop",
    role: "Enseignante – Bouaké, Côte d’Ivoire",
  },
  {
    text: "Grâce à Scconas, mon entreprise bénéficie d’une couverture complète pour nos véhicules et nos locaux. Les tarifs sont compétitifs et le suivi est sérieux. Je recommande sans hésiter.",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Jean-Benoît Koffi",
    role: "Chef d’entreprise – Yamoussoukro, Côte d’Ivoire",
  },
  {
    text: "J’ai souscrit une assurance santé chez Scconas, et j’ai été agréablement surprise par la qualité du service. Les remboursements sont rapides et transparents, sans paperasse inutile.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Nadia Kouadio",
    role: "Cadre RH – Abidjan, Côte d’Ivoire",
  },
  {
    text: "Scconas Assurances m’a accompagné dans la protection de mon projet agricole. En cas d’imprévus climatiques, j’ai pu bénéficier d’un soutien rapide et efficace. C’est une vraie sécurité.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Samuel N’Guessan",
    role: "Entrepreneur agricole – Korhogo, Côte d’Ivoire",
  },
  {
    text: "En tant que jeune entrepreneure, j’avais besoin d’une assurance fiable pour mon activité. Scconas m’a proposé une offre adaptée à mon budget et à mes besoins. Je me sens vraiment en confiance.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Clarisse Kouassi",
    role: "Fondatrice d’une boutique en ligne – Abidjan, Côte d’Ivoire",
  },
  {
    text: "Je voyage souvent pour le travail, et avec l’assurance voyage de Scconas, je pars serein. En cas de souci, je sais que je peux compter sur leur assistance 24h/24.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Moussa Coulibaly",
    role: "Consultant – San Pedro, Côte d’Ivoire",
  },
  {
    text: "Scconas Assurances m’a permis de protéger ma maison et ma famille à un prix abordable. Le contrat est clair et le service client est toujours disponible pour répondre à mes questions.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Ruth Adéyémi",
    role: "Fonctionnaire – Daloa, Côte d’Ivoire",
  },
  {
    text: "J’ai été impressionné par la réactivité de Scconas lors d’un accident. Tout a été géré en moins d’une semaine. C’est rassurant de savoir qu’on peut compter sur son assurance.",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    name: "Yao Kouamé",
    role: "Chauffeur professionnel – Abidjan, Côte d’Ivoire",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
    return (
        <section className="relative my-5 bg-primary/80  p-5  md:hidden">
            <div className="z-10 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mx-auto flex  flex-col items-center justify-center w-full"
                >
                    {/* <div className="flex justify-center">
                        <div className="rounded-lg border px-4 py-1">Temoignages</div>
                    </div> */}

                    <h2 className="mt-5 text-xl font-bold  text-white tracking-tighter sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                    Ce que les gens  <span className='text-secondary'>pensent</span> de nous
                    </h2>
                    <p className="mt-5 text-center opacity-75  lg:w-2/3  text-sm   text-gray-200 ">Nos valeurs sont le fondement de notre identité, guidant nos actions et nos décisions vers un avenir empreint d'intégrité, de respect et de solidarité..</p>
                </motion.div>

                <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;