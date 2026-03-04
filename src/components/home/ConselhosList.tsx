import { Link } from 'react-router-dom';
import { ArrowRight, Users, Activity, Globe, Map } from 'lucide-react';

const mockConselhos = [
    {
        id: 1,
        nome: 'Conselho de Saúde',
        area: 'Saúde',
        descricao: 'Acompanhe as políticas e ações voltadas para a saúde pública do Distrito Federal. Participe das reuniões públicas.',
        icone: <Activity className="w-8 h-8 text-primary-600" />,
        membros: 24,
        status: 'Ativo',
    },
    {
        id: 2,
        nome: 'Conselho de Educação',
        area: 'Educação',
        descricao: 'Diretrizes, metas e deliberações sobre a educação básica e superior no DF. Consulte as atas.',
        icone: <Users className="w-8 h-8 text-primary-600" />,
        membros: 18,
        status: 'Ativo',
    },
    {
        id: 3,
        nome: 'Conselho de Meio Ambiente',
        area: 'Meio Ambiente',
        descricao: 'Debates e formulação de políticas para a preservação ambiental e desenvolvimento sustentável.',
        icone: <Globe className="w-8 h-8 text-primary-600" />,
        membros: 15,
        status: 'Ativo',
    },
    {
        id: 4,
        nome: 'Conselho de Mobilidade',
        area: 'Transporte',
        descricao: 'Planejamento e fiscalização da mobilidade urbana e transporte público para todos os cidadãos.',
        icone: <Map className="w-8 h-8 text-primary-600" />,
        membros: 20,
        status: 'Ativo',
    },
];

export const ConselhosList = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Conselhos em Destaque
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Conheça os principais conselhos ativos e participe das decisões que impactam a sua área de interesse.
                        </p>
                    </div>
                    <Link
                        to="/conselhos"
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-6 md:mt-0 group"
                    >
                        Ver todos os conselhos
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mockConselhos.map((conselho) => (
                        <div
                            key={conselho.id}
                            className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary-100 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {conselho.icone}
                            </div>

                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full mb-3">
                                    {conselho.area}
                                </span>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                    {conselho.nome}
                                </h3>
                                <p className="text-slate-600 text-sm line-clamp-3">
                                    {conselho.descricao}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center text-slate-500 text-sm">
                                    <Users className="w-4 h-4 mr-1.5" />
                                    <span>{conselho.membros} membros</span>
                                </div>
                                <span className="flex items-center text-sm font-medium text-emerald-600">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                                    {conselho.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
