import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Conselho } from '../utils/mockData';

interface CouncilCardProps {
    conselho: Conselho;
}

export default function CouncilCard({ conselho }: CouncilCardProps) {
    return (
        <Link
            to={`/conselho/${conselho.id}`}
            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all flex flex-col h-full"
        >
            <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wide">
                    {conselho.tipo}
                </span>
            </div>

            <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gdf-blue transition-colors">
                {conselho.nome}
            </h4>

            <p className="text-sm text-gray-500 mb-6 flex-1 line-clamp-3">
                {conselho.descricao}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
                <span className="text-gray-400 font-medium truncate pr-4">
                    {conselho.orgaoVinculado}
                </span>
                <span className="text-white font-semibold flex items-center justify-center bg-gdf-blue/10 text-gdf-blue h-8 w-8 rounded-full group-hover:bg-gdf-blue group-hover:text-white transition-all">
                    <ArrowRight className="h-4 w-4" />
                </span>
            </div>
        </Link>
    );
}
