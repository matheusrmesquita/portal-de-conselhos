import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Building2, Users } from 'lucide-react';
import { conselhosMock, orgaosMock } from '../utils/mockData';

type SearchMode = 'orgao' | 'conselho' | 'ambos';

export default function HeroSearch() {
    const [mode, setMode] = useState<SearchMode>('conselho');
    const [orgaoTerm, setOrgaoTerm] = useState('');
    const [conselhoTerm, setConselhoTerm] = useState('');

    const navigate = useNavigate();

    const handleSearch = () => {
        const params = new URLSearchParams();
        params.append('modo', mode);
        if ((mode === 'orgao' || mode === 'ambos') && orgaoTerm) {
            params.append('orgao', orgaoTerm);
        }
        if ((mode === 'conselho' || mode === 'ambos') && conselhoTerm) {
            params.append('conselho', conselhoTerm);
        }
        navigate(`/resultados?${params.toString()}`);
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-0 shadow-xl rounded-2xl overflow-hidden relative z-50 text-left bg-white">
            <div className="flex flex-col sm:flex-row bg-gray-50 border-b border-gray-200">
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
                <div className="h-px sm:h-auto sm:w-px bg-gray-200"></div>
                <button
                    onClick={() => setMode('ambos')}
                    className={`flex-1 py-3.5 px-2 text-sm font-semibold transition-colors flex justify-center items-center gap-2 ${mode === 'ambos' ? 'bg-white text-gdf-blue border-l-4 sm:border-l-0 sm:border-t-4 border-gdf-blue sm:border-t-gdf-blue shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 border-l-4 sm:border-l-0 sm:border-t-4 border-transparent sm:border-t-transparent'}`}
                >
                    <Search className="w-4 h-4" /> Ambos
                </button>
            </div>

            <div className="flex flex-col md:flex-row p-3 gap-3 bg-white">
                {(mode === 'orgao' || mode === 'ambos') && (
                    <div className="relative flex-1">
                        <label className="sr-only">Nome do Órgão</label>
                        <select
                            className="w-full px-5 py-4 appearance-none bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-gdf-blue focus:bg-white transition-all font-medium cursor-pointer"
                            value={orgaoTerm}
                            onChange={(e) => setOrgaoTerm(e.target.value)}
                        >
                            <option value="">Selecione um Órgão...</option>
                            {orgaosMock.map(org => (
                                <option key={org} value={org}>{org}</option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                )}

                {(mode === 'conselho' || mode === 'ambos') && (
                    <div className="relative flex-1">
                        <label className="sr-only">Nome do Conselho</label>
                        <select
                            className="w-full px-5 py-4 appearance-none bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-gdf-blue focus:bg-white transition-all font-medium cursor-pointer"
                            value={conselhoTerm}
                            onChange={(e) => setConselhoTerm(e.target.value)}
                        >
                            <option value="">Selecione um Conselho...</option>
                            {/* Se o modo é "ambos" e o usuário já selecionou um órgão, filtramos os conselhos mostrados no dropdown para apenas os vinculados àquele órgão. Caso contrário, mostra todos. */}
                            {conselhosMock
                                .filter(c => (mode === 'ambos' && orgaoTerm) ? c.orgaoVinculado === orgaoTerm : true)
                                .map(c => (
                                    <option key={c.id} value={c.nome}>{c.nome}</option>
                                ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                )}

                <button
                    onClick={handleSearch}
                    className="bg-gdf-blue hover:bg-[#1a528e] text-white px-8 py-4 rounded-xl transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gdf-blue font-bold flex items-center justify-center gap-2 shadow-sm whitespace-nowrap active:scale-95"
                    aria-label="Buscar"
                >
                    <Search className="h-5 w-5" /> Buscar
                </button>
            </div>
        </div>
    );
}
