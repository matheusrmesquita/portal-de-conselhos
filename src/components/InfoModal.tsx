import { X, Info } from 'lucide-react';

interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const InfoModal = ({ isOpen, onClose }: InfoModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-center items-center p-4 bg-black/50 backdrop-blur-sm">
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-3 text-gdf-blue">
                        <Info className="h-6 w-6" />
                        <h2 id="modal-title" className="text-xl font-bold">Tipos de Conselhos</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gdf-blue rounded-full p-1"
                        aria-label="Fechar"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[70vh]">
                    <p className="text-gray-600 mb-6">
                        Os conselhos são instâncias de participação social. Conheça as suas principais naturezas e finalidades:
                    </p>

                    <div className="space-y-4">
                        {/* Políticas Públicas */}
                        <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50">
                            <h3 className="font-semibold gap-2 flex items-center text-gdf-blue">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                Conselhos de Políticas Públicas
                            </h3>
                            <p className="text-sm text-gray-700 mt-2">
                                São espaços de participação cidadã, onde a sociedade e o governo se unem para discutir, planejar e decidir sobre políticas públicas em diversas áreas, como saúde, educação, meio ambiente, segurança, dentre outras.
                            </p>
                        </div>

                        {/* Administração */}
                        <div className="p-4 rounded-xl border border-green-100 bg-green-50/50">
                            <h3 className="font-semibold gap-2 flex items-center text-gdf-green">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Conselhos de Administração
                            </h3>
                            <p className="text-sm text-gray-700 mt-2">
                                São órgãos colegiados de deliberação, responsável pela orientação estratégica da empresa estatal, sendo o principal ator dentro do sistema de governança corporativa de qualquer companhia.
                            </p>
                        </div>

                        {/* Fiscais */}
                        <div className="p-4 rounded-xl border border-purple-100 bg-purple-50/50">
                            <h3 className="font-semibold gap-2 flex items-center text-purple-700">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                Conselhos Fiscais
                            </h3>
                            <p className="text-sm text-gray-700 mt-2">
                                Como o próprio nome já diz, são órgãos fiscalizadores, independentes, que buscam, através dos princípios da transparência, equidade e prestação de contas, contribuir para o melhor desempenho da organização.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-gdf-blue hover:bg-blue-800 text-white font-medium rounded-lg transition-colors focus:ring-4 focus:ring-blue-200"
                    >
                        Entendi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
