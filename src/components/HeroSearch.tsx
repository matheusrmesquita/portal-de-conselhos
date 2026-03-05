import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Building2, Users, LayoutGrid } from 'lucide-react';
import { conselhosMock, orgaosMock } from '../utils/mockData';

type SearchFilter = 'all' | 'orgao' | 'conselho';

export default function HeroSearch({ isLight = false }: { isLight?: boolean }) {
    const [filter, setFilter] = useState<SearchFilter>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const suggestions = useMemo(() => {
        if (searchTerm.length < 2) return [];

        const term = searchTerm.toLowerCase();
        if (filter === 'orgao') {
            return orgaosMock.filter(org => org.toLowerCase().includes(term)).slice(0, 5);
        } else if (filter === 'conselho') {
            return conselhosMock.filter(c => c.nome.toLowerCase().includes(term)).map(c => c.nome).slice(0, 5);
        } else {
            const orgs = orgaosMock.filter(org => org.toLowerCase().includes(term));
            const cons = conselhosMock.filter(c => c.nome.toLowerCase().includes(term)).map(c => c.nome);
            return [...new Set([...orgs, ...cons])].slice(0, 6);
        }
    }, [searchTerm, filter]);

    const handleSearch = (e?: React.FormEvent, term?: string) => {
        if (e) e.preventDefault();
        const finalTerm = term || searchTerm;
        setShowSuggestions(false);

        const params = new URLSearchParams();
        params.append('modo', filter === 'all' ? 'ambos' : filter);

        if (finalTerm) {
            if (filter === 'orgao') params.append('orgao', finalTerm);
            else if (filter === 'conselho') params.append('conselho', finalTerm);
            else params.append('q', finalTerm);
        }

        navigate(`/resultados?${params.toString()}`);
    };

    const filters = [
        { id: 'all', label: 'Todos', icon: LayoutGrid },
        { id: 'orgao', label: 'Órgãos', icon: Building2 },
        { id: 'conselho', label: 'Conselhos', icon: Users },
    ] as const;

    return (
        <div className="w-full max-w-3xl mx-auto relative z-50">
            {/* Main Search Container */}
            <div className="bg-white shadow-2xl rounded-3xl p-2 border border-gray-100 transition-all hover:shadow-blue-500/5">
                <form onSubmit={handleSearch} className="flex items-center gap-2 relative">
                    <div className="relative flex-1 flex items-center">
                        <Search className="absolute left-6 w-6 h-6 text-gray-400 pointer-events-none" />
                        <input
                            type="text"
                            placeholder={
                                filter === 'all' ? 'Pesquisar por órgão ou conselho...' :
                                    filter === 'orgao' ? 'Digite o nome do órgão...' : 'Digite o nome do conselho...'
                            }
                            className="w-full pl-16 pr-6 py-5 bg-transparent text-lg text-gray-800 placeholder:text-gray-400 focus:outline-none transition-all font-medium"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setShowSuggestions(true);
                            }}
                            onFocus={() => setShowSuggestions(true)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gdf-blue hover:bg-[#1a528e] text-white px-10 py-4 rounded-2xl transition-all font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 group"
                    >
                        <span>Buscar</span>
                        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Autocomplete Suggestions */}
                    {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]">
                            {suggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => {
                                        setSearchTerm(suggestion);
                                        handleSearch(undefined, suggestion);
                                    }}
                                    className="w-full text-left px-6 py-3.5 hover:bg-blue-50 text-gray-700 transition-colors flex items-center gap-3 border-b border-gray-50 last:border-0"
                                >
                                    <Search className="w-4 h-4 text-gray-400" />
                                    <span className="truncate">{suggestion}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </form>
            </div>

            {/* Filter Chips - Outside the main box */}
            <div className="flex items-center gap-3 px-4 mt-4 overflow-x-auto no-scrollbar">
                <span className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap ${isLight ? 'text-gray-400' : 'text-gray-300'}`}>Filtrar por:</span>
                {filters.map((f) => {
                    const Icon = f.icon;
                    const isActive = filter === f.id;
                    return (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap
                                ${isActive
                                    ? 'bg-gdf-blue text-white shadow-md shadow-blue-500/20'
                                    : isLight
                                        ? 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-300'
                                        : 'bg-white/10 text-white/90 hover:bg-white/20 hover:text-white border border-white/30 backdrop-blur-sm'}
                            `}
                        >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : isLight ? 'text-gray-400' : 'text-gray-300'}`} />
                            {f.label}
                        </button>
                    );
                })}
            </div>

            {/* Subtle glow effect behind */}
            <div className="absolute -inset-4 bg-gdf-blue/5 blur-3xl rounded-[4rem] -z-10"></div>
        </div>
    );
}
