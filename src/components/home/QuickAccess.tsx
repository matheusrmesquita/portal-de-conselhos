import CountUp from 'react-countup';

export const QuickAccess = () => {
    return (
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
    );
};
