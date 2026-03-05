import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronRight, FilterX, AlertCircle, ArrowRight, Info, ChevronLeft, Search } from 'lucide-react';
import { conselhosMock, getBadgeStyle } from '../utils/mockData';
import type { Conselho } from '../utils/mockData';
import HeroSearch from '../components/HeroSearch';
import InfoModal from '../components/InfoModal';

export default function SearchResults() {
    const [searchParams, setSearchParams] = useSearchParams();
    const modo = searchParams.get('modo') || 'todos';
    const orgao = searchParams.get('orgao') || '';
    const conselho = searchParams.get('conselho') || '';

    const [results, setResults] = useState<Conselho[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const hasActiveFilters = !!(orgao || conselho || searchParams.get('q'));

    useEffect(() => {
        if (!hasActiveFilters) {
            setResults([]);
            return;
        }

        let filtered = [...conselhosMock];
        const query = searchParams.get('q') || '';

        if (modo === 'orgao' && orgao) {
            filtered = filtered.filter(c => c.orgaoVinculado.toLowerCase().includes(orgao.toLowerCase()));
        } else if (modo === 'conselho' && conselho) {
            filtered = filtered.filter(c => c.nome.toLowerCase().includes(conselho.toLowerCase()));
        } else if (modo === 'ambos') {
            if (orgao) filtered = filtered.filter(c => c.orgaoVinculado.toLowerCase().includes(orgao.toLowerCase()));
            if (conselho) filtered = filtered.filter(c => c.nome.toLowerCase().includes(conselho.toLowerCase()));
            if (query) {
                filtered = filtered.filter(c =>
                    c.nome.toLowerCase().includes(query.toLowerCase()) ||
                    c.orgaoVinculado.toLowerCase().includes(query.toLowerCase())
                );
            }
        }

        // Caso especial: busca sem filtros de chip mas com termo textual
        if (!orgao && !conselho && query) {
            filtered = filtered.filter(c =>
                c.nome.toLowerCase().includes(query.toLowerCase()) ||
                c.orgaoVinculado.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Ordenação Padrão A-Z (EP04)
        filtered.sort((a, b) => a.nome.localeCompare(b.nome));

        setResults(filtered);
        setCurrentPage(1); // Reseta para a página 1 ao pesquisar/filtrar
    }, [modo, orgao, conselho, searchParams]);

    // Calcular paginação
    const totalPages = Math.ceil(results.length / itemsPerPage);
    const paginatedResults = results.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const removeFilter = (KeyToRemove: 'orgao' | 'conselho') => {
        const params = new URLSearchParams(searchParams);
        params.delete(KeyToRemove);

        // Se ambos foram limpados, ou o modo ficou defasado, mudamos pro modo apropriado
        if (!params.get('orgao') && params.get('conselho')) {
            params.set('modo', 'conselho');
        } else if (!params.get('conselho') && params.get('orgao')) {
            params.set('modo', 'orgao');
        }

        setSearchParams(params);
    };

    return (
        <main className="flex-1 bg-gray-50 flex flex-col">
            <div className="bg-white border-b border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm mb-4">
                        <Link to="/" className="text-[#0062ae] hover:text-blue-800 transition-colors">Início</Link>
                        <ChevronRight className="h-4 w-4 text-[#0062ae]" />
                        <span className="font-semibold text-[#0062ae]">Resultados da Busca</span>
                    </div>

                    <div className="mb-8 flex flex-col items-center text-center">
                        <h2 className="text-3xl font-extrabold text-[#0062ae] mb-2">Conselhos e Órgãos Vinculados</h2>
                        <p className="text-gray-600 text-lg">
                            Deseja buscar por outro órgão ou conselho? Utilize a busca abaixo:
                        </p>
                    </div>

                    {/* Busca Avançada (HeroSearch) e Botão Modal */}
                    <div className="relative z-30 mb-8 max-w-4xl mx-auto flex flex-col items-center">
                        <div className="mb-6 flex justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 px-6 py-2.5 bg-[#0062ae] hover:bg-[#00418c] text-white rounded-full font-medium transition-colors shadow-sm focus:ring-4 focus:ring-blue-100"
                            >
                                <Info className="h-4 w-4" />
                                Entenda os tipos de conselho
                            </button>
                        </div>
                        <div className="w-full">
                            <HeroSearch />
                        </div>
                        <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div>

                    {/* Chips de Filtro */}
                    <div className="flex flex-wrap gap-2 items-center mt-6">
                        <span className="text-sm text-gray-500 mr-2">Filtros aplicados:</span>

                        {orgao && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-gdf-blue border border-blue-100">
                                Órgão: {orgao}
                                <button
                                    onClick={() => removeFilter('orgao')}
                                    className="ml-1 text-blue-400 hover:text-gdf-blue focus:outline-none"
                                    aria-label="Remover filtro de órgão"
                                >
                                    <FilterX className="h-4 w-4" />
                                </button>
                            </span>
                        )}

                        {conselho && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-gdf-blue border border-blue-100">
                                Conselho: {conselho}
                                <button
                                    onClick={() => removeFilter('conselho')}
                                    className="ml-1 text-blue-400 hover:text-gdf-blue focus:outline-none"
                                    aria-label="Remover filtro de conselho"
                                >
                                    <FilterX className="h-4 w-4" />
                                </button>
                            </span>
                        )}

                        {!orgao && !conselho && (
                            <span className="text-sm text-gray-400 italic">Nenhum filtro específico aplicado.</span>
                        )}
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto w-full px-4 pt-12 pb-32 flex-1">
                {!hasActiveFilters ? (
                    <div className="bg-white rounded-3xl border border-gray-100 p-16 text-center flex flex-col items-center justify-center shadow-sm max-w-3xl mx-auto">
                        <div className="w-24 h-24 bg-blue-50 text-[#0062ae] rounded-full flex items-center justify-center mb-8 animate-pulse">
                            <Search className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Como podemos ajudar hoje?</h3>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Para visualizar as informações detalhadas, por favor, realize uma busca por <strong>Órgão</strong> ou <strong>Conselho</strong> utilizando a barra de pesquisa acima.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
                                <span className="font-bold block text-[#0062ae] mb-1">Por Órgão</span>
                                Encontre todos os conselhos vinculados a uma secretaria ou entidade.
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600">
                                <span className="font-bold block text-[#0062ae] mb-1">Por Conselho</span>
                                Busque diretamente pelo nome do conselho de seu interesse.
                            </div>
                        </div>
                    </div>
                ) : results.length > 0 ? (
                    <>
                        <div className="mb-8">
                            <p className="text-gray-600 font-medium">{results.length} conselho(s) encontrado(s)</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {paginatedResults.map(conselho => (
                                <Link
                                    to={`/conselho/${conselho.id}`}
                                    key={conselho.id}
                                    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 min-h-[160px]"
                                >
                                    <div className="flex-1 w-full max-w-full">
                                        <span className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wide mb-3 ${getBadgeStyle(conselho.tipo)}`}>
                                            {conselho.tipo}
                                        </span>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#0062ae] transition-colors line-clamp-3">
                                            {conselho.nome}
                                        </h4>
                                        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                                            {conselho.descricao}
                                        </p>
                                        <span className="text-gray-400 text-sm font-medium">
                                            {conselho.orgaoVinculado}
                                        </span>
                                    </div>

                                    <div className="mt-4 md:mt-0 flex-shrink-0 self-start md:self-center">
                                        <span className="flex items-center justify-center w-10 h-10 bg-[#0062ae]/5 text-[#0062ae] rounded-full group-hover:bg-[#0062ae] group-hover:text-white transition-all shadow-sm">
                                            <ArrowRight className="h-5 w-5" />
                                        </span>
                                    </div>
                                </Link>
                            ))}

                            {/* Paginação */}
                            {totalPages > 1 && (
                                <div className="mt-10 flex justify-center items-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>

                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === i + 1
                                                ? 'bg-[#0062ae] text-white'
                                                : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center flex flex-col items-center justify-center shadow-sm max-w-2xl mx-auto">
                        <div className="bg-orange-50 text-orange-400 p-4 rounded-full mb-4">
                            <AlertCircle className="h-10 w-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Nenhum conselho encontrado</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-6">
                            Não encontramos nenhum conselho para os termos pesquisados. Tente remover os filtros ou buscar por termos mais genéricos.
                        </p>
                        <button
                            onClick={() => setSearchParams(new URLSearchParams())}
                            className="text-gdf-blue font-semibold hover:underline"
                        >
                            Limpar todos os filtros
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}
