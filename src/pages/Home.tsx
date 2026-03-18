import { useState } from 'react';
import HeroSearch from '../components/HeroSearch';
import InfoModal from '../components/InfoModal';
import heroImage from '../assets/Imagem hero.jpg';
import CountUp from 'react-countup';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="flex-1 bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="relative text-white pt-32 pb-44 px-4 flex items-center justify-center min-h-[550px]">
                {/* Background Image - Imagem representativa de Brasília/DF */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
                {/* Overlay Escuro Configurável para Acessibilidade AA */}
                <div className="absolute inset-0 z-0 bg-gray-900/75 mix-blend-multiply"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold mb-8 tracking-tight leading-tight drop-shadow-md">
                        Transparência e Participação nos Conselhos do DF
                    </h2>
                    <div className="text-gray-100 max-w-4xl mx-auto text-lg md:text-xl font-normal drop-shadow leading-relaxed space-y-4 mb-10">
                        <p>
                            Aqui você encontra informações sobre os conselhos do Governo do Distrito Federal, como:
                            atribuições, decisões, atas, pautas, calendário de reuniões, membros e formas de contato.
                        </p>
                        <p className="font-medium text-white">
                            Juntos por um DF cada vez melhor para todos!
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            const element = document.getElementById('busca');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="bg-white text-gdf-blue hover:bg-gray-50 px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 text-lg flex items-center justify-center gap-2 border border-white/20 hover:border-white/40"
                    >
                        <span className="font-bold tracking-tight">
                            Localize os conselhos
                        </span>
                    </button>
                </div>
            </section>


            {/* Métricas Section */}
            <section className="px-4 max-w-7xl mx-auto w-full -mt-16 md:-mt-20 relative z-20 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                    {/* Bloco 1 */}
                    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 cursor-default border border-gray-100">
                        <div className="flex items-center justify-between px-6 pt-6 pb-2 bg-white">
                            <span className="text-[10px] sm:text-[11px] font-bold text-[#0062ae] uppercase tracking-wider pr-2 leading-relaxed">Conselhos de<br />Políticas Públicas</span>
                            <div className="text-[#aeb6c4]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                            </div>
                        </div>
                        <div className="px-6 pb-6 pt-4 text-center bg-white flex-1 flex items-center justify-center min-h-[120px]">
                            <h4 className="text-[3.5rem] font-medium text-[#0062ae] tracking-tight leading-none">
                                <CountUp end={116} duration={2.5} enableScrollSpy scrollSpyOnce />
                            </h4>
                        </div>
                    </div>

                    {/* Bloco 2 */}
                    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 cursor-default border border-gray-100">
                        <div className="flex items-center justify-between px-6 pt-6 pb-2 bg-white">
                            <span className="text-[10px] sm:text-[11px] font-bold text-[#0062ae] uppercase tracking-wider pr-2">Membros do Governo</span>
                            <div className="text-[#aeb6c4]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                        </div>
                        <div className="px-6 pb-6 pt-4 text-center bg-white flex-1 flex items-center justify-center min-h-[120px]">
                            <h4 className="text-[3.5rem] font-medium text-[#0062ae] tracking-tight leading-none">
                                <CountUp end={43} duration={2.5} enableScrollSpy scrollSpyOnce />
                            </h4>
                        </div>
                    </div>

                    {/* Bloco 3 */}
                    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 cursor-default border border-gray-100">
                        <div className="flex items-center justify-between px-6 pt-6 pb-2 bg-white">
                            <span className="text-[10px] sm:text-[11px] font-bold text-[#0062ae] uppercase tracking-wider pr-2">Membros da Sociedade</span>
                            <div className="text-[#aeb6c4]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </div>
                        </div>
                        <div className="px-6 pb-6 pt-4 text-center bg-white flex-1 flex items-center justify-center min-h-[120px]">
                            <h4 className="text-[3.5rem] font-medium text-[#0062ae] tracking-tight leading-none">
                                <CountUp end={35} duration={2.5} enableScrollSpy scrollSpyOnce />
                            </h4>
                        </div>
                    </div>

                    {/* Bloco 4 */}
                    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 cursor-default border border-gray-100">
                        <div className="flex items-center justify-between px-6 pt-6 pb-2 bg-white">
                            <span className="text-[10px] sm:text-[11px] font-bold text-[#0062ae] uppercase tracking-wider pr-2">Órgãos Vinculados</span>
                            <div className="text-[#aeb6c4]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                        </div>
                        <div className="px-6 pb-6 pt-4 text-center bg-white flex-1 flex items-center justify-center min-h-[120px]">
                            <h4 className="text-[3.5rem] font-medium text-[#0062ae] tracking-tight leading-none">
                                <CountUp end={46} duration={2.5} enableScrollSpy scrollSpyOnce />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Controle Social - Estilização Premium Athos Bulcão Style */}
            <section className="relative bg-gdf-blue py-20 px-4 overflow-hidden shadow-2xl border-y border-white/10">
                {/* Padrão Athos Bulcão Visual Overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none select-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="athosPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                                <rect width="120" height="120" fill="none" />
                                <circle cx="30" cy="30" r="15" fill="white" />
                                <rect x="70" y="10" width="30" height="30" fill="white" transform="rotate(45 85 25)" />
                                <rect x="20" y="80" width="40" height="10" fill="white" />
                                <path d="M90 70 L110 90 L90 110 Z" fill="white" />
                                <circle cx="100" cy="40" r="8" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#athosPattern)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="text-center md:text-left space-y-4">
                        <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight drop-shadow-lg">
                            Controle Social
                        </h3>
                        <p className="text-blue-50/80 text-lg md:text-xl font-normal max-w-xl leading-relaxed">
                            Fortaleça a transparência pública participando ativamente das decisões que constroem um DF melhor.
                        </p>
                    </div>

                    <div className="relative group">
                        <a
                            href="https://controlesocial.cg.df.gov.br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gdf-blue hover:bg-gray-50 px-14 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 text-lg flex items-center justify-center gap-2 border border-white/20 hover:border-white/40"
                        >
                            Acessar
                        </a>
                    </div>
                </div>

                {/* Detalhe Geométrico Flutuante Sutil */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full opacity-5 blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-5 blur-3xl"></div>
            </section>

            {/* Nova Seção de Busca (Substituindo Listagem Rápida) */}
            <section id="busca" className="px-4 py-28 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto w-full text-center">
                    <div className="mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0062ae] mb-6">Localize um Conselho</h3>
                        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
                            Encontre informações detalhadas sobre as instituições do Distrito Federal utilizando os filtros abaixo para uma pesquisa precisa.
                        </p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-3 px-6 py-3 bg-[#0062ae] hover:bg-[#00418c] rounded-full transition-all duration-300 shadow-lg border border-transparent hover:border-blue-300"
                        >
                            <div className="flex items-center justify-center border border-white/40 rounded-full w-5 h-5 transition-colors">
                                <span className="text-white text-[10px] font-bold">i</span>
                            </div>
                            <span className="text-white font-medium text-base tracking-wide">
                                Entenda os tipos de conselho
                            </span>
                        </button>
                    </div>

                    <div className="relative">
                        <HeroSearch />
                    </div>
                </div>
            </section>

            <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main >
    );
}
