import { useEffect, useRef } from "react";

export default function Section3() {
  const pRef = useRef(null);

  useEffect(() => {
    const el = pRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-secao-3">
      <p ref={pRef} className="reveal">
        A Visonet é referência em tecnologia para Comércio Exterior, atendendo empresas de todos os portes — exportadoras,
        importadoras, despachantes aduaneiros e profissionais que atuam diretamente na rotina das operações
        internacionais. Com um portfólio de soluções próprias e serviços especializados, combinamos tecnologia e IA para
        simplificar processos, aumentar a eficiência e dar mais segurança às decisões do dia a dia, reduzindo retrabalho,
        acelerando entregas e automatizando tarefas.
        <br />
        <br />
        Na prática, isso se traduz em ferramentas e serviços que apoiam as rotinas de Exportação, Importação e Drawback,
        desde automações e padronizações até sistemas completos. Nosso <b>VISODrawback</b> permite obter benefícios aos
        clientes, reduzindo custos de insumos. O <b>REINTEGRA</b> nos possibilita o retorno de tributos pagos na
        exportação. O <b>VISODUE</b>, oferece uma solução eficiente e prática para a elaboração da DUE (Declaração Única
        de Exportação). O <b>GESPRO</b> garante a gestão de produtos com foco nos certificados de origem. Nosso{" "}
        <b>VISOImportNFE</b> permite a geração automatizada e personalizada do XML da NF-e e do XML da DI. Para
        capacitação e evolução contínua, contamos com o <b>VISOEDU</b>, nossa plataforma de ensino, e com o{" "}
        <b>COMEXLABS</b>, oferecendo simuladores de Exportação, Importação e Drawback. Já o <b>Catálogo de Produtos</b>{" "}
        é a nova base de dados para o novo processo da DUIMP e o <b>SPED</b> para Exportação possibilita uma comunicação
        direta com a Receita Federal diante das obrigações fiscais.
        <br />
        <br />
        Tudo isso com suporte dedicado e foco em resultado — para você transformar suas rotinas e ganhar performance no
        Comércio Exterior e em seus negócios.
      </p>
    </section>
  );
}
