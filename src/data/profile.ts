import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  ClipboardCheck,
  Gauge,
  Handshake,
  LineChart,
  MapPinned,
  Route,
  ShieldCheck,
  Truck,
  UsersRound
} from "lucide-react";

export const profile = {
  name: "Maximo Lopes",
  fullName: "Maximo Lopes da Silva",
  headline:
    "Gerente, Coordenador, Supervisor, Analista, Líder, Product Operations | Operações Logísticas | Dados | Customer Success | IA Aplicada ao transporte e logística",
  location: "Salvador, BA",
  email: "maxlopez@outlook.com.br",
  phone: "71 9 9303 4258",
  whatsappUrl: "https://wa.me/5571993034258",
  linkedinUrl: "https://www.linkedin.com/in/maximo-lopes",
  resumeUrl: "/files/max-lopes-curriculo-atual.pdf",
  summary:
    "Sou Maximo Lopes, um profissional de Logística & Transportes, Operações, Frete, Data Analytics, Product Ops, Customer Success e Otimização de Processos, com profunda atuação em campo liderando múltiplos perfis de operações de transportes, implementando TMS e demais sistemas inerentes ao transporte, gerindo e capacitando mesas de fretes, criando e implantando indicadores e aplicando IA a processos, fluxos e rotinas para promover produtividade e eficiência operacional."
};

export const metrics = [
  {
    label: "Gestão orçamentária",
    value: "R$5M/ano",
    detail: "Planejamento logístico e controle de custos em transporte.",
    icon: Gauge
  },
  {
    label: "Frota gerida",
    value: "+60 veículos",
    detail: "Gestão de frota, manutenção, combustível e parceiros.",
    icon: Truck
  },
  {
    label: "Vivência operacional",
    value: "10 anos",
    detail: "Experiência em transporte, atendimento, indicadores e serviços.",
    icon: Route
  },
  {
    label: "Frentes de atuação",
    value: "Ops + Dados",
    detail: "SLA, TMA, produtividade, NPS, CSAT, churn e dashboards.",
    icon: LineChart
  }
];

export const pillars = [
  { label: "Operações Logísticas", icon: Truck },
  { label: "Product Operations", icon: BriefcaseBusiness },
  { label: "Customer Success", icon: Handshake },
  { label: "Análise de Dados", icon: BarChart3 },
  { label: "IA aplicada à logística", icon: Bot }
];

export const experiences = [
  {
    company: "TruckMe Solução Inteligente LTDA",
    role: "Supervisor de Operações",
    period: "10/2025 - atual",
    segment: "Transporte e Tecnologia",
    icon: ShieldCheck,
    bullets: [
      "Liderança e estruturação de operações centrais, garantindo fluidez de processos e excelência no atendimento.",
      "Coordenação da Mesa de Fretes, SAC e Suporte Operacional para clientes, motoristas e frotistas.",
      "Implantação e gestão de KPIs como TMA, SLA, produtividade e qualidade.",
      "Interface com Produto, Dados, Comercial e Customer Success para traduzir dores operacionais em requisitos, dashboards, protótipos, automações e melhorias sistêmicas.",
      "Demos, onboardings, Provas de Conceito e transições para handover com clientes.",
      "Estudos e aplicação de IA generativa para acelerar análises, relatórios, mapeamentos e tomada de decisão na logística."
    ]
  },
  {
    company: "Colliers Intl REMS Brasil",
    role: "Analista Sênior de Facilities",
    period: "06/2025 - 10/2025",
    segment: "Real Estate | Operação Mercado Livre",
    icon: UsersRound,
    bullets: [
      "Garantia do nível de serviço prestado pelo fornecedor de fretado corporativo nas operações do Mercado Livre.",
      "Onboardings, análise de dados, apresentação de resultados e atualização de indicadores para tomada de decisão.",
      "Acompanhamento de críticas e sugestões do cliente para elevar Customer Experience.",
      "Monitoramento de rotas, propriedades e performance do serviço de fretamento corporativo."
    ]
  },
  {
    company: "Grou Turismo",
    role: "Supervisor de Operações",
    period: "01/2025 - 05/2025",
    segment: "Turismo",
    icon: MapPinned,
    bullets: [
      "Gestão de frota, custos, propriedades e times de motoristas.",
      "Análise e desenvolvimento de indicadores, controle de combustível e planejamento de recursos.",
      "Gestão de banco de horas com ênfase em redução de horas extras.",
      "Atendimento logístico para Transfer-In, Transfer-Out, passeios e City Tour na capital, Litorais Norte, Sul e Aracaju-SE."
    ]
  },
  {
    company: "L'Auto Cargo Transporte Rodoviário S.A",
    role: "Gerente de Operações",
    period: "11/2023 - 01/2025",
    segment: "Logística e Transporte",
    icon: ClipboardCheck,
    bullets: [
      "Gestão orçamentária de R$5M/ano e planejamento logístico com foco em produtividade e redução de custos.",
      "Prospecção, retenção, negociação e gestão de agregados, parceiros e frotistas.",
      "Gestão de pessoas, frota com mais de 60 veículos na Bahia e suporte a veículos de transferência no Brasil.",
      "Extração e tratamento de dados para análises, apresentações e tomada de decisão.",
      "Atuação como gerente itinerante em filiais do Maranhão, Pará, Pernambuco, Sergipe e Bahia."
    ]
  },
  {
    company: "L'Auto Cargo Transporte Rodoviário S.A",
    role: "Supervisor de Operações",
    period: "02/2020 - 10/2023",
    segment: "Logística e Transporte",
    icon: Truck,
    bullets: [
      "Supervisão de equipes de carga e descarga para garantir processo e qualidade de serviço.",
      "Inspeção de armazenagem e adequação de cargas, com acompanhamento de terceirizadas.",
      "Gerenciamento de operações de entrega e coleta com tratativa ao cliente.",
      "Participação na implementação de TMS, treinando e assistindo operações do Brasil remotamente e localmente."
    ]
  }
];

export const studies = [
  {
    title: "Inteligência Artificial",
    description: "Aplicações práticas em análise, relatórios, documentação, fluxos e protótipos operacionais.",
    icon: Bot
  },
  {
    title: "Product Management",
    description: "Tradução de problemas reais em hipóteses, requisitos, jornadas e soluções escaláveis.",
    icon: BriefcaseBusiness
  },
  {
    title: "Product Operations",
    description: "Processos, indicadores, rituais e interfaces entre Operações, Produto, Dados e Comercial.",
    icon: ClipboardCheck
  },
  {
    title: "Análise de Dados",
    description: "KPIs, extração, tratamento, visualização e leitura executiva para decisão operacional.",
    icon: BarChart3
  },
  {
    title: "ANTT e Frete Mínimo",
    description: "Atualizações regulatórias, piso mínimo, estadias, CIOT e impactos operacionais.",
    icon: ShieldCheck
  },
  {
    title: "TMS e documentação fiscal",
    description: "Fluxos sistêmicos, CT-e, subcontratação, operação e sustentação de processos.",
    icon: Route
  },
  {
    title: "Customer Success",
    description: "Atendimento, experiência do cliente, NPS, CSAT, churn, handover e onboarding.",
    icon: Handshake
  }
];

export const tools = [
  "Power BI",
  "Excel",
  "Office 365",
  "Google Workspace",
  "Jira",
  "Miro",
  "Notion",
  "Pipedrive",
  "Salesforce",
  "HelenaCRM",
  "Omie",
  "Salescope",
  "Brudam",
  "TOTVS",
  "SAP",
  "Cobli",
  "TMS",
  "IA Generativa"
];

export const education = [
  {
    course: "Engenharia de Produção",
    institution: "Estácio de Sá",
    year: "2022"
  },
  {
    course: "Técnico em Redes de Computadores",
    institution: "SENAI",
    year: "2017"
  }
];
