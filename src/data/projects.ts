export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  tags: string[];
  status: string;
  detail: {
    context: string;
    problem: string;
    hypothesis: string;
    process: string;
    solution: string;
    tools: string[];
    learnings: string;
    nextSteps: string;
  };
};

export const projects: Project[] = [
  {
    title: "Agregado Inteligente",
    slug: "agregado-inteligente",
    category: "Operação e Produto",
    description:
      "Modelo operacional e digital para organizar recorrência, prioridade e previsibilidade na relação com motoristas TAC/TAC Equiparados.",
    tags: ["Motoristas", "Recorrência", "Processo", "Produto"],
    status: "Em estruturação",
    detail: {
      context: "Operações com motoristas parceiros exigem previsibilidade, clareza de prioridade e gestão de relacionamento.",
      problem: "A operação pode perder eficiência quando a recorrência e a aderência dos parceiros não estão organizadas em indicadores acionáveis.",
      hypothesis: "Um modelo de priorização e acompanhamento pode melhorar previsibilidade, atendimento e tomada de decisão.",
      process: "Mapeamento de jornadas, critérios operacionais, dados disponíveis e oportunidades de automação.",
      solution: "Estrutura de indicadores, regras de segmentação e visão de produto para acompanhamento de parceiros.",
      tools: ["Planilhas", "Power BI", "TMS", "IA Generativa"],
      learnings: "Projeto em preparação para documentação pública.",
      nextSteps: "Consolidar dados, validar critérios e transformar o estudo em case navegável."
    }
  },
  {
    title: "Gestão de Paletes",
    slug: "gestao-de-paletes",
    category: "Ativos e Controle",
    description:
      "Estruturação de fluxo, indicadores e visão cliente para controle de ativos retornáveis e saldo operacional.",
    tags: ["Ativos", "Controle", "Cliente", "Indicadores"],
    status: "Em estruturação",
    detail: {
      context: "Ativos retornáveis exigem controle de saldo, responsabilidade e visibilidade para operação e cliente.",
      problem: "Falta de fluxo claro pode gerar divergências, retrabalho e baixa previsibilidade de cobrança ou devolução.",
      hypothesis: "Um fluxo padronizado com indicadores melhora rastreabilidade e reduz atrito operacional.",
      process: "Mapeamento de entradas, saídas, responsáveis, documentos e pontos de controle.",
      solution: "Modelo de acompanhamento com status, saldos, alertas e visão executiva para cliente.",
      tools: ["Excel", "Power BI", "TMS", "Notion"],
      learnings: "Projeto em preparação para documentação pública.",
      nextSteps: "Documentar fluxo, validar indicadores e publicar estudo de caso."
    }
  },
  {
    title: "Recorrência de Motoristas",
    slug: "recorrencia-de-motoristas",
    category: "Dados Operacionais",
    description:
      "Modelo de análise para identificar recorrência, fidelização e aderência operacional de motoristas parceiros.",
    tags: ["Dados", "Fidelização", "Parceiros", "KPIs"],
    status: "Em estruturação",
    detail: {
      context: "A recorrência de motoristas pode indicar confiança, aderência e potencial de relacionamento operacional.",
      problem: "Sem leitura estruturada, a operação perde sinais sobre quem performa bem e onde precisa atuar.",
      hypothesis: "Indicadores simples de frequência, aceite e qualidade ajudam a priorizar relacionamento e oportunidades.",
      process: "Definição de critérios de recorrência, limpeza de bases e desenho de painel analítico.",
      solution: "Visão por motorista, rota, cliente, período e comportamento operacional.",
      tools: ["Power BI", "Excel", "IA Generativa"],
      learnings: "Projeto em preparação para documentação pública.",
      nextSteps: "Criar amostra anonimizada e documentar decisões de métrica."
    }
  },
  {
    title: "Farol de Conversão de Fretes",
    slug: "farol-conversao-fretes",
    category: "Mesa de Fretes",
    description:
      "Painel de motivos de perda e declínio de fretes para apoiar negociação, precificação e tomada de decisão da Mesa de Fretes.",
    tags: ["Fretes", "Conversão", "Comercial", "Pricing"],
    status: "Em estruturação",
    detail: {
      context: "A Mesa de Fretes precisa entender motivos de perda para agir com velocidade e critério.",
      problem: "Sem categorização de perdas, a negociação vira percepção e reduz aprendizado comercial.",
      hypothesis: "Um farol de conversão por motivo, origem, destino e perfil de frete aumenta clareza decisória.",
      process: "Classificação de motivos, desenho de funil e definição de rotina de leitura.",
      solution: "Painel com perdas, declínios, oportunidades e leitura para precificação e abordagem comercial.",
      tools: ["Power BI", "Excel", "TMS", "Pipedrive"],
      learnings: "Projeto em preparação para documentação pública.",
      nextSteps: "Definir taxonomia de motivos e validar com operação e comercial."
    }
  },
  {
    title: "CT-e de Subcontratação",
    slug: "cte-de-subcontratacao",
    category: "TMS e Fiscal",
    description:
      "Mapeamento operacional, fiscal e sistêmico para viabilizar fluxos de subcontratação no TMS.",
    tags: ["CT-e", "TMS", "Fiscal", "Processo"],
    status: "Em estruturação",
    detail: {
      context: "Fluxos de subcontratação exigem alinhamento entre operação, fiscal, regras sistêmicas e documentação.",
      problem: "Lacunas de processo podem gerar retrabalho, dúvidas de emissão e risco operacional.",
      hypothesis: "Um mapeamento claro reduz ambiguidades e acelera sustentação no TMS.",
      process: "Levantamento de cenário, regras fiscais, papéis operacionais e pontos de validação.",
      solution: "Fluxo documentado com requisitos, critérios, responsabilidades e próximos ajustes sistêmicos.",
      tools: ["TMS", "Notion", "Miro", "IA Generativa"],
      learnings: "Projeto em preparação para documentação pública.",
      nextSteps: "Transformar documentação interna em case público sem dados sensíveis."
    }
  },
  {
    title: "IA Aplicada à Operação Logística",
    slug: "ia-aplicada-operacao-logistica",
    category: "IA e Produtividade",
    description:
      "Uso de IA generativa para acelerar análises, relatórios, fluxos, protótipos e documentação operacional.",
    tags: ["IA", "Produtividade", "Relatórios", "Prototipação"],
    status: "Em desenvolvimento",
    detail: {
      context: "Times operacionais lidam com alto volume de informação, urgência e necessidade de padronização.",
      problem: "Análises e documentações podem consumir tempo excessivo quando não há apoio de automação.",
      hypothesis: "IA generativa bem orientada acelera diagnóstico, padroniza entregáveis e melhora comunicação com áreas parceiras.",
      process: "Testes com prompts, roteiros de análise, documentação de fluxos e apoio a protótipos.",
      solution: "Biblioteca de usos aplicados a operação, Produto, dados e Customer Success.",
      tools: ["IA Generativa", "Notion", "Miro", "Power BI", "Excel"],
      learnings: "Projeto em desenvolvimento para documentação pública.",
      nextSteps: "Selecionar exemplos sem dados sensíveis e publicar playbook inicial."
    }
  }
];
