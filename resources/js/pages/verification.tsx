import { Footer } from '@/components/shared/Footer';
// import { Link } from '@inertiajs/react';


const verification = () => {
    // const methodes = [
    //     {
    //         label: 'Entrar com Cartão de Cidadão ou Chave Móvel Digital',
    //         src: 'https://autenticacao.imt-ip.pt/resources/bf8nu/login/imt-theme/img/autenticacaogov.png',
    //     },

    //     {
    //         label: 'Entrar com Número de Identificação Fiscal',
    //         src: 'https://autenticacao.imt-ip.pt/resources/bf8nu/login/imt-theme/img/logo-at.png',
    //     },
    // ];
    return (
        <div className="flex flex-col items-center gap-15">
            <div className="my-5 flex w-full flex-row items-center justify-between px-5 lg:px-30">
                {/* <img src="/logo.png" alt="" /> */}

                <img
                    src="https://autenticacao.imt-ip.pt/resources/bf8nu/login/imt-theme/img/logo-IMT.svg"
                    alt=""
                    className="hidden lg:flex"
                />

                <img
                    src="https://autenticacao.imt-ip.pt/resources/bf8nu/login/imt-theme/img/logo-IMT-pq.svg"
                    className="flex lg:hidden"
                />

                <img
                    src="https://autenticacao.imt-ip.pt/resources/bf8nu/login/imt-theme/img/cabecalhoFundo.png"
                    alt=""
                    className="hidden md:flex"
                />
            </div>

            <p className="my-15 text-2xl font-bold text-[#0578B7]">
                A minha Carta de Condução
            </p>

            <div className="my-5 flex w-full flex-col items-center gap-10 bg-[#F5F5F7] px-5 py-10 text-[#7991A4] lg:px-30">
                <p className="text-sm font-bold text-[#555555] lg:text-xl">
                    Consulte a situação da sua Carta de Condução
                </p>

                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row">
                   
                        <div className="flex flex-col items-center gap-5 c">
                            <p className="text-sm text-center lg:text-xl">
                                Entrar com{' '}
                                <b className="text-[#6C757D]">
                                    Cartão de Cidadão
                                </b>{' '}
                                ou{' '}
                                <b className="text-[#6C757D]">
                                    {' '}
                                    Chave Móvel Digital
                                </b>
                            </p>

                            <img
                                src="https://autenticacao.imt-ip.pt/resources/bf8nu/login/imt-theme/img/autenticacaogov.png"
                                alt=""
                                className="h-28 w-full rounded-md border-1 border-green-600 object-center transition-all duration-150 ease-in-out hover:border-blue-600 lg:max-w-64"
                            />
                        </div>
                  

                   
                        <div className="flex flex-col items-center gap-5">
                            <p className="text-sm text-center lg:text-xl">
                                Entrar com {''}
                                <b className="text-[#6C757D]">
                                    Número de Identificação Fiscal
                                </b>
                            </p>

                            <img
                                src="https://autenticacao.imt-ip.pt/resources/bf8nu/login/imt-theme/img/logo-at.png"
                                alt=""
                                className="h-28 max-w-64 rounded-md border-1 border-green-600 object-center transition-all duration-150 ease-in-out hover:border-blue-600"
                            />
                        </div>
               
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default verification;
