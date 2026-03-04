import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gdf-blue text-white mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4">Portal de Conselhos</h3>
                    <p className="text-sm text-blue-100">
                        Transparência e controle social para o Distrito Federal.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
                    <ul className="space-y-2 text-sm text-blue-100">
                        <li><a href="#" className="hover:text-white transition-colors">Participa DF</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Controladoria Geral do DF</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Acessibilidade</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Governo do Distrito Federal</h3>
                    <p className="text-sm text-blue-100">
                        Palácio do Buriti - Praça do Buriti<br />
                        Brasília - DF, CEP 70075-900
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#8e98a4] hover:bg-white hover:text-gdf-blue flex items-center justify-center transition-all shadow-sm" aria-label="YouTube">
                            <Youtube size={20} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#8e98a4] hover:bg-white hover:text-gdf-blue flex items-center justify-center transition-all shadow-sm" aria-label="Instagram">
                            <Instagram size={20} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#8e98a4] hover:bg-white hover:text-gdf-blue flex items-center justify-center transition-all shadow-sm" aria-label="Facebook">
                            <Facebook size={20} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#8e98a4] hover:bg-white hover:text-gdf-blue flex items-center justify-center transition-all shadow-sm" aria-label="X (Twitter)">
                            <Twitter size={20} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-[#003366] py-4 text-center text-xs text-blue-200">
                © {new Date().getFullYear()} Governo do Distrito Federal. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
