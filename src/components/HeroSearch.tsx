import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Building2, Users } from 'lucide-react';
import { conselhosMock, orgaosMock } from '../utils/mockData';

type SearchMode = 'orgao' | 'conselho';

export default function HeroSearch() {
    const [mode, setMode] = useState<SearchMode>('conselho');
    const [orgaoTerm, setOrgaoTerm] = useState('');
    const [conselhoTerm, setConselhoTerm] = useState('');
    const [showOrgaoSuggestions, setShowOrgaoSuggestions] = useState(false);
    const [showConselhoSuggestions, setShowConselhoSuggestions] = useState(false);

    const navigate = useNavigate();

    const isSearchDisabled = mode === 'orgao' ? !orgaoTerm.trim() : !conselhoTerm.trim();

    const handleSearch = () => {
        if (isSearchDisabled) return;

        const params = new URLSearchParams();
        params.append('modo', mode);
        if (mode === 'orgao' && orgaoTerm) {
            params.append('orgao', orgaoTerm);
        }
        if (mode === 'conselho' && conselhoTerm) {
            params.append('conselho', conselhoTerm);
        }
        navigate(`/resultados?${params.toString()}`);
    };

    const filteredOrgaos = orgaosMock.filter(org =>
        org.toLowerCase().includes(orgaoTerm.toLowerCase())
    );

    const filteredConselhos = conselhosMock.filter(c =>
        c.nome.toLowerCase().includes(conselhoTerm.toLowerCase())
    );

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-0 shadow-xl rounded-2xl relative z-50 text-left bg-white">
            <div className="flex flex-col sm:flex-row bg-gray-50 border-b border-gray-200 rounded-t-2xl overflow-hidden">
                <button
                    onClick={() => setMode('orgao')}
                    className={`flex-1 py-3.5 px-2 text-sm font-semibold transition-colors flex justify-center items-center gap-2 ${mode === 'orgao' ? 'bg-white text-gdf-blue border-l-4 sm:border-l-0 sm:border-t-4 border-gdf-blue sm:border-t-gdf-blue shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 border-l-4 sm:border-l-0 sm:border-t-4 border-transparent sm:border-t-transparent'}`}
                >
                    <Building2 className="w-4 h-4" /> Buscar por Órgão
                </button>
                <div className="h-px sm:h-auto sm:w-px bg-gray-200"></div>
                <button
                    onClick={() => setMode('conselho')}
                    className={`flex-1 py-3.5 px-2 text-sm font-semibold transition-colors flex justify-center items-center gap-2 ${mode === 'conselho' ? 'bg-white text-gdf-blue border-l-4 sm:border-l-0 sm:border-t-4 border-gdf-blue sm:border-t-gdf-blue shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 border-l-4 sm:border-l-0 sm:border-t-4 border-transparent sm:border-t-transparent'}`}
                >
                    <Users className="w-4 h-4" /> Buscar por Conselho
                </button>
            </div>

            <div className="flex flex-col md:flex-row p-3 gap-3 bg-white rounded-b-2xl">
                {mode === 'orgao' && (
                    <div className="relative flex-1">
                        <label className="sr-only">Nome do Órgão</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do Órgão..."
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-gdf-blue focus:bg-white transition-all font-medium"
                            value={orgaoTerm}
                            onChange={(e) => {
                                setOrgaoTerm(e.target.value);
                                setShowOrgaoSuggestions(true);
                            }}
                            onFocus={() => setShowOrgaoSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowOrgaoSuggestions(false), 200)}
                        />
                        {showOrgaoSuggestions && orgaoTerm && filteredOrgaos.length > 0 && (
                            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-60 overflow-y-auto">
                                {filteredOrgaos.map(org => (
                                    <button
                                        key={org}
                                        className="w-full text-left px-5 py-3 hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors border-b border-gray-50 last:border-0"
                                        onClick={() => {
                                            setOrgaoTerm(org);
                                            setShowOrgaoSuggestions(false);
                                        }}
                                    >
                                        {org}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {mode === 'conselho' && (
                    <div className="relative flex-1">
                        <label className="sr-only">Nome do Conselho</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do Conselho..."
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-gdf-blue focus:bg-white transition-all font-medium"
                            value={conselhoTerm}
                            onChange={(e) => {
                                setConselhoTerm(e.target.value);
                                setShowConselhoSuggestions(true);
                            }}
                            onFocus={() => setShowConselhoSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowConselhoSuggestions(false), 200)}
                        />
                        {showConselhoSuggestions && conselhoTerm && filteredConselhos.length > 0 && (
                            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-60 overflow-y-auto">
                                {filteredConselhos.map(c => (
                                    <button
                                        key={c.id}
                                        className="w-full text-left px-5 py-3 hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors border-b border-gray-50 last:border-0"
                                        onClick={() => {
                                            setConselhoTerm(c.nome);
                                            setShowConselhoSuggestions(false);
                                        }}
                                    >
                                        {c.nome}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <button
                    onClick={handleSearch}
                    disabled={isSearchDisabled}
                    className={`bg-gdf-blue hover:bg-[#1a528e] text-white px-8 py-4 rounded-xl transition-all font-bold flex items-center justify-center gap-2 shadow-sm whitespace-nowrap active:scale-95 ${isSearchDisabled ? 'opacity-50 cursor-not-allowed uppercase' : 'focus:ring-2 focus:ring-offset-2 focus:ring-gdf-blue'}`}
                    aria-label="Buscar"
                >
                    <Search className="h-5 w-5" /> Buscar
                </button>
            </div>
        </div>
    );
}
