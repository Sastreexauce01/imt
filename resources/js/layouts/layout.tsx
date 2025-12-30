// import { Footer } from '@/components/shared/Footer';
// import Navbar from '@/components/shared/Navbar';
// import ParticlesBackground from '@/components/shared/ParticlesBackground';
// import { Toaster } from '@/components/ui/sonner';
// import useFlashMessages from '@/hooks/FlashMessages';

// import { ReactNode } from 'react';

// interface LayoutProps {
//     children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//     useFlashMessages();
//     return (
//         <div className="relative min-h-screen overflow-hidden bg-transparent">
//             <ParticlesBackground />
//             <Toaster position="top-center" />
//             {/* Background avec overlay */}
//             <div className="fixed inset-0 -z-10 bg-[url(/img/hero_movie.gif)] bg-cover bg-fixed bg-center bg-no-repeat" />

//             {/* Overlay optionnel pour améliorer la lisibilité */}
//             <div className="fixed inset-0 -z-10 bg-black/70" />

//             <Navbar />

//             <Toaster position="top-center" className="bg-white text-primary" />

//             <main className="relative z-0">{children}</main>

//             <Footer />
//         </div>
//     );
// };

// export default Layout;