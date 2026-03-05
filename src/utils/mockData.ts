export interface Conselho {
    id: string;
    nome: string;
    orgaoVinculado: string;
    tipo: string;
    esfera: string;
    remunerado: string;
    descricao: string; // Finalidade
}

export const conselhosMock: Conselho[] = [
    {
        id: 'cgdf-1',
        nome: 'Conselho de Administração do Fundo Distrital de Combate à Corrupção do Distrito Federal - CGDF',
        orgaoVinculado: 'Controladoria-Geral do Distrito Federal',
        tipo: 'Conselhos de Administração',
        esfera: 'Administração direta',
        remunerado: 'Sim',
        descricao: 'Gestão do Fundo Distrital de Combate à Corrupção – FDCC foi criado pela Lei 6.335, de 22 de julho de 2019, com a finalidade de financiar ações e programas destinados à prevenção e fiscalização da prática de ilícitos que ofendam os princípios da administração pública, que causem prejuízo ao erário distrital ou que gerem enriquecimento ilícito de servidores públicos distritais ou de pessoas jurídicas, bem como à atividade de repressão de crimes contra a administração pública pela Polícia Civil do Distrito Federal e à promoção de ações de cunho educacional relacionadas à formação cidadã e ética, para a fiscalização da gestão pública.'
    },
    { id: 'transporte-coletivo', nome: 'CONSELHO DE TRANSPORTE PÚBLICO COLETIVO DO DISTRITO FEDERAL', orgaoVinculado: 'Secretaria de Mobilidade', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Atuar como órgão de deliberação coletiva, orientando e propondo diretrizes para a formulação e execução da Política de Transporte Público Coletivo.' },
    { id: 'zoo-bsb', nome: 'CONSELHO CONSULTIVO DA FUNDAÇÃO JARDIM ZOOLOGICO DE BRASÍLIA - ZOO', orgaoVinculado: 'Fundação Jardim Zoológico', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração indireta', remunerado: 'Não', descricao: 'Atua no assessoramento consultivo das ações e planejamento estratégico ambiental e administrativo do Jardim Zoológico de Brasília.' },
    { id: 'consea-df', nome: 'CONSELHO DE SEGURANÇA ALIMENTAR E NUTRICIONAL DO DISTRITO FEDERAL- CONSEA-DF', orgaoVinculado: 'Secretaria de Desenvolvimento Social', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Órgão de assessoramento que atua no acompanhamento e monitoramento das políticas de segurança alimentar e nutricional no Distrito Federal.' },
    { id: 'crh-df', nome: 'CONSELHO DE RECURSOS HÍDRICOS - CRH/DF', orgaoVinculado: 'Secretaria do Meio Ambiente', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Órgão consultivo e deliberativo encarregado de promover a gestão integrada dos recursos hídricos no Distrito Federal.' },
    { id: 'condisp', nome: 'CONSELHO DISTRITAL DE SEGURANÇA PÚBLICA – CONDISP', orgaoVinculado: 'Secretaria de Segurança Pública', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Apoia e propõe diretrizes para auxiliar o Governo do Distrito Federal na formulação e execução da política de segurança pública e defesa social.' },
    { id: '1', nome: 'Conselho de Saúde do Distrito Federal', orgaoVinculado: 'Secretaria de Saúde', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Atua na formulação de estratégias e controle da execução da política de saúde.' },
    { id: '2', nome: 'Conselho de Educação do DF', orgaoVinculado: 'Secretaria de Educação', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Órgão normativo, consultivo e orientador do sistema de ensino do DF.' },
    { id: '3', nome: 'Conselho de Transporte e Mobilidade', orgaoVinculado: 'Secretaria de Mobilidade', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Acompanha, avalia e fiscaliza as políticas de mobilidade urbana.' },
    { id: '4', nome: 'Conselho do Meio Ambiente - CONAM', orgaoVinculado: 'Instituto Brasília Ambiental', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração indireta', remunerado: 'Não', descricao: 'Delibera sobre diretrizes e políticas de meio ambiente do DF.' },
    { id: '5', nome: 'Conselho de Assistência Social', orgaoVinculado: 'Secretaria de Assistência Social', tipo: 'Conselhos de Políticas Públicas', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Aprova e acompanha a Política Distrital de Assistência Social.' },
    { id: '6', nome: 'Conselho de Transparência e Controle Social', orgaoVinculado: 'Controladoria Geral do DF', tipo: 'Conselhos Fiscais', esfera: 'Administração direta', remunerado: 'Não', descricao: 'Debate e sugere medidas para fortalecer a transparência pública.' }
];

export const getBadgeStyle = (tipo: string) => {
    switch (tipo) {
        case 'Conselhos de Políticas Públicas':
            return 'bg-blue-50 text-blue-600 border-blue-100';
        case 'Conselhos de Administração':
            return 'bg-green-50 text-green-600 border-green-100';
        case 'Conselhos Fiscais':
            return 'bg-purple-50 text-purple-600 border-purple-100';
        default:
            return 'bg-gray-50 text-gray-600 border-gray-100';
    }
};

export const orgaosMock = Array.from(new Set(conselhosMock.map(c => c.orgaoVinculado))).sort();
