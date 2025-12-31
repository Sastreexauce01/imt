import { SlideLeft, SlideRight } from '@/components/shared/animation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/layouts/layout';
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Mail, MapPinCheck, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { toast } from 'sonner';

const Contact = () => {
    const socialLinks = [
        {
            icon: <FaInstagram className="size-5" />,
            href: '#',
            label: 'Instagram',
        },
        {
            icon: <FaFacebook className="size-5" />,
            href: '#',
            label: 'Facebook',
        },
        { icon: <FaTwitter className="size-5" />, href: '#', label: 'Twitter' },
        {
            icon: <FaLinkedin className="size-5" />,
            href: '#',
            label: 'LinkedIn',
        },
    ];

    const { data, setData, post, processing, errors, reset } = useForm({
        surname: '',
        name: '',
        email: '',
        tel: '',
        subject: '',
        content: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                console.log('✅ Message envoyé avec succès');
                // Optionnel: afficher un toast de succès
                // toast.success(' Message envoyé avec succès');
            },
            onError: (errs) => {
                console.error('❌ Erreurs de validation :', errs);
                // Optionnel: afficher un toast d'erreur
            },
        });
    };

    return (
        <Layout>
            <main className="relative flex flex-col items-center justify-center gap-10 p-5 py-32 lg:px-30">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="flex flex-col items-center gap-5">
                    <h2 className="text-2xl font-bold text-secondary lg:text-4xl">
                        Vamos manter o contacto.
                    </h2>
                    <p className="text-xm space-y-2 text-center text-white md:text-xl">
                        Tem alguma dúvida ou gostaria de saber mais sobre os
                        nossos serviços? Estamos aqui para lhes responder!
                    </p>
                </div>

                {/* section contact */}

                <div className="flex flex-col overflow-hidden rounded-2xl shadow-xs shadow-primary/20 lg:flex-row">
                    {/* section1  */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }} // once: true,
                        variants={SlideRight(0.2)}
                        className="flex flex-col items-start justify-between gap-8 bg-primary bg-[url(/images/circle.png)] bg-bottom-right bg-no-repeat p-5 text-white lg:w-2/5"
                    >
                        <div>
                            <h2 className="text-2xl font-bold">
                                Detalhes de contacto
                            </h2>
                            <p className="text-sm text-white/80">
                                Se tiver mais alguma dúvida e quiser obter uma
                                resposta,
                            </p>
                        </div>

                        <div className="flex w-full flex-col items-start justify-center gap-5 text-sm">
                            <span className="flex items-center justify-between gap-5">
                                <MapPinCheck className="" /> Plateau,20 Avenue
                                Delafosse,10 BP 2220 Abidjan 10
                            </span>

                            <span className="flex items-center justify-between gap-5">
                                <Phone className="" />
                                +351 962 395 172
                            </span>
                            <span className="flex items-center justify-between gap-5">
                                <Mail className="" /> Imt.pt@gmail.com
                            </span>
                        </div>

                        <ul className="flex items-center space-x-6 text-white">
                            {socialLinks.map((social, idx) => (
                                <li
                                    key={idx}
                                    className="font-medium hover:text-secondary"
                                >
                                    <a
                                        href={social.href}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* section2  */}

                    <motion.form
                        onSubmit={handleSubmit}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={SlideLeft(0.2)}
                        className="flex flex-1 flex-col items-start justify-between gap-8 bg-white/20 p-4 backdrop-blur-lg"
                    >
                        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
                            <div className="grid gap-2">
                                <Label htmlFor="surname" className="text-xs">
                                    Primeiro Nome{' '}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="João"
                                    id="surname"
                                    value={data.surname}
                                    onChange={(e) =>
                                        setData('surname', e.target.value)
                                    }
                                    disabled={processing}
                                    required
                                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-secondary"
                                />
                                {errors.surname && (
                                    <p className="text-sm text-red-500">
                                        {errors.surname}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-xs">
                                    Apelido{' '}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Silva"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    disabled={processing}
                                    required
                                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-secondary"
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-xs">
                                    Email<span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="email"
                                    placeholder="joao.silva@email.pt"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    disabled={processing}
                                    required
                                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-secondary"
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tel" className="text-xs">
                                    Telemóvel
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="tel"
                                    placeholder="912 345 678"
                                    id="tel"
                                    value={data.tel}
                                    onChange={(e) =>
                                        setData('tel', e.target.value)
                                    }
                                    disabled={processing}
                                    required
                                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-secondary"
                                />
                                {errors.tel && (
                                    <p className="text-sm text-red-500">
                                        {errors.tel}
                                    </p>
                                )}
                            </div>
                        </div>

                        <RadioGroup
                            defaultValue="Pedir informações"
                            className="grid gap-4"
                            value={data.subject}
                            onValueChange={(value) => setData('subject', value)}
                            disabled={processing}
                        >
                            <Label htmlFor="subject" className="font-semibold">
                                Selecione o assunto{' '}
                                <span className="text-red-500">*</span>
                            </Label>

                            <div className="flex w-full flex-col items-start justify-between gap-5 lg:flex-row">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="Pedir informações"
                                        id="Pedir informações"
                                    />
                                    <Label htmlFor="Pedir informações">
                                        Pedir informações
                                    </Label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="Agendar avaliação"
                                        id="Agendar avaliação"
                                    />
                                    <Label htmlFor="Agendar avaliação">
                                        Agendar avaliação
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="Pedido de orçamento"
                                        id="Pedido de orçamento"
                                    />
                                    <Label htmlFor="Pedido de orçamento">
                                        Pedido de orçamento
                                    </Label>
                                </div>
                            </div>
                            {errors.subject && (
                                <p className="text-sm text-red-500">
                                    {errors.subject}
                                </p>
                            )}
                        </RadioGroup>

                        <div className="grid w-full gap-4">
                            <Label htmlFor="category" className="font-semibold">
                                Tipo de formação pretendida{' '}
                                <span className="text-red-500">*</span>
                            </Label>

                            <Select>
                                <SelectTrigger
                                    className="bg- w-full text-secondary"
                                    defaultValue={'express-15'}
                                >
                                    <SelectValue
                                        placeholder="Formação Express 15 dias"
                                        className="text-white"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="express-15">
                                        Formação Express 15 dias
                                    </SelectItem>
                                    <SelectItem value="express-30">
                                        Formação Acelerada 30 dias
                                    </SelectItem>
                                    <SelectItem value="weekend">
                                        Stage Intensivo Fim de Semana
                                    </SelectItem>
                                    <SelectItem value="vip">
                                        Coaching VIP Individual
                                    </SelectItem>
                                    <SelectItem value="recandidato">
                                        Programa Recandidatos
                                    </SelectItem>
                                    <SelectItem value="outro">Outro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid w-full gap-4">
                            <Label className="font-semibold" htmlFor="content">
                                A sua mensagem{' '}
                                <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                                placeholder="Conte-nos a sua situação: já reprovou? Precisa da carta urgentemente? "
                                id="content"
                                value={data.content}
                                onChange={(e) =>
                                    setData('content', e.target.value)
                                }
                                disabled={processing}
                                required
                                rows={4}
                                className="resize-none border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-secondary"
                            />
                            {errors.content && (
                                <p className="text-sm text-red-500">
                                    {errors.content}
                                </p>
                            )}
                        </div>

                        <div className="w-full place-items-end text-right">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={processing}
                                className="w-full bg-primary text-white transition-all hover:scale-105 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                            >
                                {processing ? (
                                    <>
                                        <Spinner />
                                        carregando...
                                    </>
                                ) : (
                                    'Enviar Pedido'
                                )}
                            </Button>
                        </div>
                    </motion.form>
                </div>

                {/* Section maps */}

                <div className="w-full">
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31808.866298406476!2d-6.652310606703165!3d4.751215854934656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf9613979c0479b5%3A0xb818c2a383cc2f8f!2zU2FuLVDDqWRybywgQ8O0dGUgZCdJdm9pcmU!5e0!3m2!1sfr!2sbj!4v1761702597125!5m2!1sfr!2sbj"
                        className="w-full rounded-xl"
                        height="450"
                        // allowfullscreen=''
                        loading="lazy"
                        // referrerpolicy="no-referrer-when-downgrade"
                    ></iframe> */}

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186776.804561784!2d-14.02673618749997!3d38.738772100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933041a702561%3A0x6e9d0ce4232ae446!2sIMT%20-%20Instituto%20da%20Mobilidade%20e%20dos%20Transportes%2C%20I.P.!5e0!3m2!1sfr!2sbj!4v1767171106132!5m2!1sfr!2sbj"
                        width="600"
                        height="450"
                        loading="lazy"
                        className="w-full rounded-xl"
                    ></iframe>
                </div>
            </main>
        </Layout>
    );
};

export default Contact;
