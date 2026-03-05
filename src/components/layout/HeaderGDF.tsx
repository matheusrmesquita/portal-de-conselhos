import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import logoGdf from '../../assets/Logo GDF.png';
import { conselhosMock, orgaosMock } from '../../utils/mockData';

const HeaderGDF = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const matchedConselhos = conselhosMock.filter(c =>
        c.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchedOrgaos = orgaosMock.filter(o =>
        o.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const hasSuggestions = (matchedConselhos.length > 0 || matchedOrgaos.length > 0) && searchTerm.trim().length > 0;

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const term = searchTerm.trim();
        if (!term) return;

        const exactConselho = conselhosMock.find(c => c.nome.toLowerCase() === term.toLowerCase());
        const exactOrgao = orgaosMock.find(o => o.toLowerCase() === term.toLowerCase());

        if (exactConselho) {
            navigate(`/conselho/${exactConselho.id}`);
        } else if (exactOrgao) {
            navigate(`/resultados?modo=orgao&orgao=${encodeURIComponent(exactOrgao)}`);
        } else {
            navigate(`/resultados?modo=ambos&conselho=${encodeURIComponent(term)}&orgao=${encodeURIComponent(term)}`);
        }
        setSearchTerm('');
        setShowSuggestions(false);
    };

    const [isAccessibilityMenuOpen, setIsAccessibilityMenuOpen] = useState(false);
    const [fontSize, setFontSize] = useState(1);

    useEffect(() => {
        // Inicializa estado da fonte
        const html = document.documentElement;
        if (html.classList.contains('accessible-font-xl')) {
            setFontSize(3);
        } else if (html.classList.contains('accessible-font-lg')) {
            setFontSize(2);
        } else {
            setFontSize(1);
        }
    }, []);

    const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        setFontSize(val);
        const html = document.documentElement;

        html.classList.remove('accessible-font-lg', 'accessible-font-xl');
        if (val === 2) {
            html.classList.add('accessible-font-lg');
        } else if (val === 3) {
            html.classList.add('accessible-font-xl');
        }
    };

    return (
        <header className="w-full">
            {/* Faixa Superior Institucional (Escura) */}
            <div className="bg-[#4a4a4a] text-gray-200 text-[11px] py-1 shadow-sm relative z-[60] border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
                    <div className="flex items-center gap-4 lg:gap-6 font-medium overflow-x-auto whitespace-nowrap scrollbar-hide flex-1 pr-4">
                        <a href="#" className="hover:text-white transition-colors">Participa DF</a>
                        <a href="#" className="hover:text-white transition-colors">Portal de Dados Abertos</a>
                        <a href="#" className="hover:text-white transition-colors">Transparência</a>
                        <a href="#" className="hover:text-white transition-colors">Ouvidoria</a>
                        <a href="#" className="hover:text-white transition-colors">Acesso a Informação</a>
                        <a href="#" className="hover:text-white transition-colors">Diário Oficial</a>
                        <a href="#" className="hover:text-white transition-colors">Agência Brasília</a>
                        <a href="#" className="hover:text-white transition-colors">Portal do Governo de Brasília</a>
                    </div>
                    <div className="relative flex items-center gap-3 ml-2 border-l border-[#5f5f5f] pl-4 font-medium shrink-0 bg-[#4a4a4a]">
                        <button
                            onClick={() => setIsAccessibilityMenuOpen(!isAccessibilityMenuOpen)}
                            className="hover:text-white transition-colors text-xs font-bold leading-none flex items-center gap-1"
                            aria-label="Opções de Acessibilidade"
                        >
                            <span className="font-normal text-xs mr-1 hidden md:inline">Acessibilidade</span>
                            <span>|</span>
                            <span className="ml-1">Aa</span>
                        </button>

                        {isAccessibilityMenuOpen && (
                            <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-md shadow-2xl border border-gray-100 z-[60] overflow-hidden">
                                {/* Setinha (Triângulo) do Dropdown */}
                                <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>

                                <div className="p-5 flex flex-col items-center border-b border-gray-100 relative bg-white">
                                    <span className="text-gray-600 text-sm font-medium mb-4">Tamanho de fonte</span>

                                    <div className="flex items-center w-full justify-between gap-3 text-[#0062ae]">
                                        <span className="text-sm font-medium">A</span>
                                        <input
                                            type="range"
                                            min="1"
                                            max="3"
                                            step="1"
                                            value={fontSize}
                                            onChange={handleFontSizeChange}
                                            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#0062ae]"
                                            aria-label="Ajustar tamanho da fonte"
                                        />
                                        <span className="text-lg font-medium">A</span>
                                    </div>
                                </div>

                                {/* Toggle de Alto Contraste (Fundo Azul) - Funcionalidade removida conforme pedido */}
                                <div
                                    className="p-4 flex items-center gap-3 cursor-default bg-[#0062ae] hover:bg-[#00418c] transition-colors"
                                >
                                    {/* Botão Tipo Toggle Switch Estilizado */}
                                    <div className="relative w-8 h-4 rounded-full bg-black/20 shadow-inner transition-colors">
                                        <div className="absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform left-0.5"></div>
                                    </div>

                                    <span className="text-white text-sm font-bold">
                                        Alto contraste desligado
                                    </span>
                                </div>
                            </div>
                        )}

                        <span className="text-[#5f5f5f]">|</span>
                        <button className="hover:opacity-80 transition-opacity flex items-center justify-center bg-[#005191] text-white rounded p-0.5" aria-label="Acessibilidade em Libras">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 21v-3.5a2.5 2.5 0 0 0-5 0v1.75a2.25 2.25 0 0 1-4.5 0V11a2 2 0 0 1 4 0v1"></path><path d="M11 21c3.5 0 6.5-2 8-5.5V11a3 3 0 0 0-6 0v2"></path><path d="M12.5 13.5v-2a1.5 1.5 0 0 1 3 0v2"></path><path d="M15.5 13.5v-2a1.5 1.5 0 0 1 3 0v2"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Container Principal do Portal (Branco) */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto py-5 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to="/" className="flex items-center gap-6 group">
                        <img src={logoGdf} alt="Logo GDF" className="h-[52px] w-auto border border-gray-100 rounded shadow-sm group-hover:opacity-90 transition-opacity" />

                        <div className="sm:ml-2 sm:pl-6 sm:border-l sm:border-gray-200 hidden sm:block">
                            <h1 className="text-[22px] font-extrabold text-[#0062ae] tracking-tight leading-none mb-1 group-hover:text-[#00418c] transition-colors">Portal dos Conselhos</h1>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Controladoria Geral do DF</p>
                        </div>
                    </Link>

                    {/* Busca Textual Global */}
                    <div className="w-full md:w-80 lg:w-96 flex relative">
                        <form onSubmit={handleSearch} className="w-full relative group">
                            <input
                                type="text"
                                placeholder="Buscar órgãos ou conselhos..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setShowSuggestions(true);
                                }}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0062ae] focus:bg-white transition-all text-gray-800 placeholder:text-gray-400"
                            />

                            {showSuggestions && hasSuggestions && (
                                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-80 overflow-y-auto">
                                    {matchedConselhos.length > 0 && (
                                        <div className="p-2">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-1 block">Conselhos</span>
                                            {matchedConselhos.map(c => (
                                                <button
                                                    key={c.id}
                                                    type="button"
                                                    className="w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors rounded-md flex items-center gap-2"
                                                    onClick={() => {
                                                        setSearchTerm(c.nome);
                                                        navigate(`/conselho/${c.id}`);
                                                        setShowSuggestions(false);
                                                    }}
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gdf-blue"></div>
                                                    {c.nome}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    {matchedOrgaos.length > 0 && (
                                        <div className="p-2 border-t border-gray-50">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-1 block">Órgãos</span>
                                            {matchedOrgaos.map(o => (
                                                <button
                                                    key={o}
                                                    type="button"
                                                    className="w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors rounded-md flex items-center gap-2"
                                                    onClick={() => {
                                                        setSearchTerm(o);
                                                        navigate(`/resultados?modo=orgao&orgao=${encodeURIComponent(o)}`);
                                                        setShowSuggestions(false);
                                                    }}
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                                    {o}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={!searchTerm.trim()}
                                className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 transition-colors z-10 ${searchTerm.trim() ? 'text-[#0062ae] hover:text-[#00418c]' : 'text-gray-300 cursor-not-allowed'}`}
                                aria-label="Pesquisar"
                            >
                                <Search className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderGDF;
