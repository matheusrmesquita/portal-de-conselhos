import { useState } from 'react';
import HeroSearch from '../HeroSearch';
import InfoModal from '../InfoModal';
import heroImage from '../../assets/Imagem hero.jpg';

export const HeroBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative text-white pt-24 pb-32 px-4 flex items-center justify-center min-h-[400px]">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className="absolute inset-0 z-0 bg-gray-900/75 mix-blend-multiply"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-md">
                    Consulta Pública de Conselhos do DF
                </h2>
                <p className="text-gray-100 max-w-3xl mx-auto mb-10 text-lg md:text-xl font-light drop-shadow">
                    Acompanhe as decisões, legislações e atas dos conselhos distritais e participe ativamente do controle social.
                </p>

                <HeroSearch />

                <div className="flex justify-center mt-6">
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
            </div>
            <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};
