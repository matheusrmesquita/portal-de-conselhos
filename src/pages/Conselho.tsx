import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Filter, Calendar, Users, FileText, Gavel, Scale, Info } from 'lucide-react';
import { conselhosMock } from '../utils/mockData';

type TabType = 'legislacao' | 'reunioes' | 'atas' | 'membros' | 'decisoes';

export default function Conselho() {
    const { id } = useParams();
    const conselho = conselhosMock.find(c => c.id === id);
    const [activeTab, setActiveTab] = useState<TabType>('atas'); // Default as 'atas' for demo
    const [anoFiltro, setAnoFiltro] = useState('2024');

    if (!conselho) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Conselho não encontrado</h2>
                <Link to="/" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Voltar para o início
                </Link>
            </div>
        );
    }

    const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
        { id: 'legislacao', label: 'Legislação', icon: <Scale className="h-4 w-4" /> },
        { id: 'reunioes', label: 'Próximas Reuniões', icon: <Calendar className="h-4 w-4" /> },
        { id: 'atas', label: 'Pautas e Atas', icon: <FileText className="h-4 w-4" /> },
        { id: 'membros', label: 'Membros', icon: <Users className="h-4 w-4" /> },
        { id: 'decisoes', label: 'Decisões', icon: <Gavel className="h-4 w-4" /> },
    ];

    const anosDisponiveis = ['2024', '2023', '2022', '2021'];

    return (
        <main className="flex-1 bg-gray-50 flex flex-col">
            {/* FT06: Cabeçalho Interno */}
            <section className="bg-white pt-12 pb-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex items-center space-x-2 text-sm text-gray-500">
                            <li>
                                <Link to="/" className="hover:text-gdf-blue transition-colors flex items-center gap-1">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <span className="mx-2 text-gray-400">/</span>
                            </li>
                            <li className="text-gray-900 font-medium truncate" aria-current="page">
                                {conselho.nome}
                            </li>
                        </ol>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wide">
                                    {conselho.tipo}
                                </span>
                                <span className="text-sm font-medium text-gray-500">{conselho.orgaoVinculado}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                {conselho.nome}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bloco Institucional (Resumo) - FT01 */}
            <section className="bg-white px-4 py-10 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-b border-gray-100">
                            <div className="p-4 flex flex-col justify-center bg-gray-50/50">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Tipo</span>
                                <span className="text-sm font-semibold text-gray-800">{conselho.tipo}</span>
                            </div>
                            <div className="p-4 flex flex-col justify-center">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Esfera</span>
                                <span className="text-sm font-semibold text-gray-800">{conselho.esfera}</span>
                            </div>
                            <div className="p-4 flex flex-col justify-center bg-gray-50/50">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Órgão</span>
                                <span className="text-sm font-semibold text-gray-800">{conselho.orgaoVinculado}</span>
                            </div>
                            <div className="p-4 flex flex-col justify-center">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Remunerado</span>
                                <span className="text-sm font-semibold text-gray-800">{conselho.remunerado}</span>
                            </div>
                        </div>
                        <div className="p-5 lg:p-6 bg-white">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Finalidade</span>
                            <p className="text-sm text-gray-700 leading-relaxed text-justify">{conselho.descricao}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navegação de Abas Gestalt (Continuidade e Proximidade) */}
            <section className="pt-12 pb-6 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto flex justify-center overflow-x-auto no-scrollbar">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        {tabs.map((tab, index) => {
                            const isFirst = index === 0;
                            const isLast = index === tabs.length - 1;
                            const isActive = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors
                                        border border-[#b3d4ff]
                                        ${isFirst ? 'rounded-l-md' : '-ml-px'}
                                        ${isLast ? 'rounded-r-md' : ''}
                                        ${isActive
                                            ? 'bg-[#f8fbff] text-blue-600 border-[#2068b2] z-10'
                                            : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                                        }
                                        focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none
                                    `}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Conteúdo Dinâmico das Abas */}
            <section className="flex-1 px-4 pt-10 pb-20 max-w-7xl mx-auto w-full">

                {/* Aba Legislação */}
                {activeTab === 'legislacao' && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Legislação</h2>
                                <p className="text-gray-500 text-sm mt-1">Consulte a legislação aplicável ao conselho.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600 uppercase tracking-wider">
                                            <th className="p-4 font-semibold w-1/3">Finalidade</th>
                                            <th className="p-4 font-semibold">Legislação</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-gray-700">
                                        <tr className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="p-4 font-medium text-gray-800">Ato de criação</td>
                                            <td className="p-4">
                                                <a href="#" className="font-semibold text-blue-600 hover:underline uppercase block">LEI Nº 6.335, DE 22 DE JULHO DE 2019</a>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="p-4 font-medium text-gray-800">Regulamentação</td>
                                            <td className="p-4">
                                                <a href="#" className="font-semibold text-blue-600 hover:underline uppercase block">DECRETO Nº 42.450 DE 27 DE AGOSTO DE 2021</a>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="p-4 font-medium text-gray-800">Regimento Interno</td>
                                            <td className="p-4">
                                                <a href="#" className="font-semibold text-blue-600 hover:underline uppercase block">RESOLUÇÃO Nº 01 DE 22 DE DEZEMBRO DE 2021</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Aba Reuniões */}
                {activeTab === 'reunioes' && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Próximas Reuniões</h2>
                                <p className="text-gray-500 text-sm mt-1">Acompanhe o calendário de reuniões.</p>
                            </div>

                            {/* Filtro Obrigatório por Ano */}
                            <div className="flex items-center gap-3">
                                <label htmlFor="anoFiltro" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Filter className="h-4 w-4" /> Filtrar por ano:
                                </label>
                                <div className="relative">
                                    <select
                                        id="anoFiltro"
                                        value={anoFiltro}
                                        onChange={(e) => setAnoFiltro(e.target.value)}
                                        className="appearance-none bg-white border border-gray-300 text-gray-800 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium shadow-sm transition-shadow"
                                    >
                                        {anosDisponiveis.map(ano => (
                                            <option key={ano} value={ano}>{ano}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600 uppercase tracking-wider">
                                            <th className="p-4 font-semibold w-1/4">Data</th>
                                            <th className="p-4 font-semibold">Reunião</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-gray-700">
                                        <tr className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="p-4 whitespace-nowrap font-medium">04/08/{anoFiltro}</td>
                                            <td className="p-4">4ª Reunião Ordinária</td>
                                        </tr>
                                        <tr className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="p-4 whitespace-nowrap font-medium">25/09/{anoFiltro}</td>
                                            <td className="p-4">2ª Reunião Extraordinária</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-sm text-gray-500">
                                <span>Exibindo 2 registros de {anoFiltro}</span>
                                <span className="flex gap-1">
                                    <button className="px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50">Anterior</button>
                                    <button className="px-2 py-1 rounded bg-blue-600 text-white font-medium">1</button>
                                    <button className="px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50">Próximo</button>
                                </span>
                            </div>
                        </div>
                    </div>
                )}


                {/* Aba Pautas e Atas */}
                {activeTab === 'atas' && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Pautas e Atas</h2>
                                <p className="text-gray-500 text-sm mt-1">Consulte os documentos oficiais das reuniões realizadas.</p>
                            </div>

                            {/* Filtro Obrigatório por Ano */}
                            <div className="flex items-center gap-3">
                                <label htmlFor="anoFiltro" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Filter className="h-4 w-4" /> Filtrar por ano:
                                </label>
                                <div className="relative">
                                    <select
                                        id="anoFiltro"
                                        value={anoFiltro}
                                        onChange={(e) => setAnoFiltro(e.target.value)}
                                        className="appearance-none bg-white border border-gray-300 text-gray-800 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium shadow-sm transition-shadow"
                                    >
                                        {anosDisponiveis.map(ano => (
                                            <option key={ano} value={ano}>{ano}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600 uppercase tracking-wider">
                                            <th className="p-4 font-semibold w-1/4">Data</th>
                                            <th className="p-4 font-semibold">Reunião</th>
                                            <th className="p-4 font-semibold text-center w-24">Pautas</th>
                                            <th className="p-4 font-semibold text-center w-24">Atas</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-gray-700">
                                        {[
                                            { data: `04/08/${anoFiltro}`, r: "4ª Reunião Ordinária" },
                                            { data: `25/09/${anoFiltro}`, r: "2ª Reunião Extraordinária" }
                                        ].map((item, idx) => (
                                            <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                                                <td className="p-4 whitespace-nowrap font-medium">{item.data}</td>
                                                <td className="p-4 font-semibold text-blue-600">
                                                    {item.r}
                                                </td>
                                                <td className="p-4 text-center">
                                                    <button className="text-blue-600 hover:bg-blue-100 transition-colors mx-auto p-2 rounded-lg" title="Baixar Pauta">
                                                        <Download className="h-4 w-4" />
                                                    </button>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <button className="text-blue-600 hover:bg-blue-100 transition-colors mx-auto p-2 rounded-lg" title="Baixar Ata">
                                                        <Download className="h-4 w-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-sm text-gray-500">
                                <span>Exibindo 2 registros de {anoFiltro}</span>
                                <span className="flex gap-1">
                                    <button className="px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50">Anterior</button>
                                    <button className="px-2 py-1 rounded bg-blue-600 text-white font-medium">1</button>
                                    <button className="px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50">Próximo</button>
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Aba Membros */}
                {activeTab === 'membros' && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Membros do Conselho</h2>
                            <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm font-medium hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-blue-600">
                                <Download className="h-4 w-4" /> Exportar CSV
                            </button>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-600 uppercase tracking-wider">
                                            <th className="p-4 font-semibold">Nome</th>
                                            <th className="p-4 font-semibold">Função</th>
                                            <th className="p-4 font-semibold leading-tight">Tipo de<br />Representação</th>
                                            <th className="p-4 font-semibold">Representação</th>
                                            <th className="p-4 font-semibold leading-tight">Início<br />mandato</th>
                                            <th className="p-4 font-semibold leading-tight">Término<br />mandato</th>
                                            <th className="p-4 font-semibold">Jetom</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-gray-700 text-sm">
                                        <tr className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="p-4 font-semibold text-gray-900">Abdon Tavares Reis</td>
                                            <td className="p-4"><span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded uppercase">Titular</span></td>
                                            <td className="p-4">Governo</td>
                                            <td className="p-4 max-w-[200px] truncate" title="Secretaria de Estado de Transporte e Mobilidade">Secretaria de Estado de Transporte e Mobilidade</td>
                                            <td className="p-4">24/07/2023</td>
                                            <td className="p-4">24/07/2025</td>
                                            <td className="p-4 font-medium">0,00</td>
                                        </tr>
                                        <tr className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="p-4 font-semibold text-gray-900">Bruno Taitson Bueno</td>
                                            <td className="p-4"><span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded uppercase">Suplente</span></td>
                                            <td className="p-4">Sociedade</td>
                                            <td className="p-4 max-w-[200px] truncate" title="Organização WWF Brasil">Organização WWF Brasil</td>
                                            <td className="p-4">05/04/2023</td>
                                            <td className="p-4">05/04/2025</td>
                                            <td className="p-4 font-medium">2.052,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Aba Decisões (Placeholder) */}
                {['decisoes'].includes(activeTab) && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-sm border border-gray-100 border-dashed text-center">
                        <div className="bg-blue-50 p-4 rounded-full mb-4 text-blue-600">
                            <Info className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Composição da aba em desenvolvimento</h3>
                        <p className="text-gray-500 max-w-md">
                            A estrutura visual básica dos conselhos foi estabelecida. A aba de "{tabs.find(t => t.id === activeTab)?.label}" seguirá os padrões de acessibilidade e design do GDF.
                        </p>
                    </div>
                )}

            </section>
        </main>
    );
}
