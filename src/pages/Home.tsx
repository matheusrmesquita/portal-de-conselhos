import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSearch from '../components/HeroSearch';
import InfoModal from '../components/InfoModal';
import { conselhosMock, getBadgeStyle } from '../utils/mockData';
import heroImage from '../assets/Imagem hero.jpg';
import CountUp from 'react-countup';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="flex-1 bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="relative text-white pt-24 pb-32 px-4 flex items-center justify-center min-h-[400px]">
                {/* Background Image - Imagem representativa de Brasília/DF */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
                {/* Overlay Escuro Configurável para Acessibilidade AA */}
                <div className="absolute inset-0 z-0 bg-gray-900/75 mix-blend-multiply"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-md">
                        Consulta Pública de Conselhos do DF
                    </h2>
                    <p className="text-gray-100 max-w-3xl mx-auto mb-10 text-lg md:text-xl font-light drop-shadow">
                        Acompanhe as decisões, legislações e atas dos conselhos distritais e participe ativamente do controle social.
                    </p>

                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-3 px-5 py-2.5 bg-[#0062ae] hover:bg-[#00418c] rounded-full transition-all duration-300 shadow-lg border border-transparent hover:border-blue-300"
                        >
                            <div className="flex items-center justify-center border border-white/40 rounded-full w-5 h-5 transition-colors">
                                <span className="text-white text-[10px] font-bold">i</span>
                            </div>
                            <span className="text-white font-medium text-sm tracking-wide">
                                Entenda os tipos de conselho
                            </span>
                        </button>
                    </div>

                    <HeroSearch />
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

            {/* Listagem Rápida */}
            <section className="px-4 pt-16 pb-32 max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-[#0062ae] rounded-full"></div>
                        <h3 className="text-2xl font-bold text-[#0062ae] hc-black-on-yellow">Conselhos em Destaque</h3>
                    </div>
                    <Link to="/resultados" className="flex items-center gap-2 text-[#0062ae] hover:text-[#00418c] font-medium transition-colors hc-black-on-yellow">
                        Ver todos
                        <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conselhosMock.slice(0, 6).map(conselho => (
                        <Link
                            to={`/conselho/${conselho.id}`}
                            key={conselho.id}
                            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wide ${getBadgeStyle(conselho.tipo)}`}>
                                    {conselho.tipo}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#0062ae] transition-colors">
                                {conselho.nome}
                            </h4>
                            <p className="text-sm text-gray-500 mb-6 flex-1 line-clamp-3">
                                {conselho.descricao}
                            </p>

                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
                                <span className="text-gray-400 font-medium truncate pr-4">
                                    {conselho.orgaoVinculado}
                                </span>
                                <span className="text-[#0062ae] font-semibold group-hover:translate-x-1 transition-transform bg-[#0062ae]/5 p-2 rounded-full group-hover:bg-[#0062ae]/10">
                                    <ArrowRight className="h-4 w-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/resultados" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                        Ver todos os conselhos <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main >
    );
}
