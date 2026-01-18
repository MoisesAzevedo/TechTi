import type { FAQItem } from "../../../../components/FAQ/FAQ";

export const faqItems: FAQItem[] = [
  {
    question: "Quem é a TechTI?",
    answer: (
      <>
        <p>
          Somos uma empresa brasileira de tecnologia da informação comprometida
          em fornecer serviços ideais para indivíduos e negócios. Nossa
          prioridade é estimular a motivação entre nossos colaboradores e
          alcançar a excelência em todas as etapas do relacionamento com
          clientes e parceiros.
        </p>
      </>
    ),
  },
  {
    question: "Quais serviços a TechTI oferece?",
    answer: (
      <>
        <ul>
          <li>- Manutenção de TI</li>
          <li>- Gestão de TI</li>
          <li>- Infraestrutura</li>
          <li>- Consultoria</li>
          <li>- Projetos e implantação</li>
          <li>- Atendimento e suporte com foco em segurança e garantia</li>
        </ul>
      </>
    ),
  },
  {
    question: "Quais são nossos valores e diferenciais?",
    answer: (
      <>
        <p>
          Buscamos ser líderes no mercado e um ótimo lugar para se trabalhar.
          Trabalhamos com progressão passo a passo, honestidade no atendimento,
          equipe especializada e foco em custo-benefício, garantia e segurança
          para proteger seus dados e operação.
        </p>
      </>
    ),
  },
];

export default faqItems;
