import React from 'react';
import './Products.css'; // Importando o CSS específico para a seção

const Products = () => {
  return (
    <section id="services" className="products-section">
      <h2 className="text-center">Nossos Serviços</h2>
      <div className="products-container">
        {/* Card 1 */}
        <div className="product-card">
          <img
            src="https://highsales.digital/images/blog/modelo-de-site-institucional.jpg"
            alt="Sites Institucionais ou Aplicativos"
          />
          <div className="product-info">
            <h5>Sites Institucionais ou Aplicativos</h5>
            <p>
            Sua identidade visual na internet é o primeiro passo para conquistar confiança e se destacar no mercado. Ela aproxima seu cliente da sua marca, criando conexões reais. Com apenas um clique, seu produto chega até ele — direto na palma da mão, com presença, clareza e profissionalismo.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="product-card">
          <img
            src="https://gestaoclick.com.br/wp-content/uploads/gestao-financeira-pratica-e-completa.webp"
            alt="Sistemas Desktop e Web"
          />
          <div className="product-info">
            <h5>Sistemas de Gestão Empresarial</h5>
            <p>
              Estoque, Orçamento, Ordem de Serviço e muito mais... Ter um sistema para gerenciar seu negócio é fundamental para otimizar processos, garantir a conformidade com as obrigações fiscais, facilitar a gestão financeira e melhorar o controle sobre produtos e serviços.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="product-card">
          <img
            src="https://20073311.fs1.hubspotusercontent-na1.net/hubfs/20073311/Imported_Blog_Media/data-analysis-and-statistics-at-board-meeting-WQU9C6D.jpg"
            alt="Análise de Dados"
          />
          <div className="product-info">
            <h5>Análise de Dados</h5>
            <p>
            A análise de dados é essencial para decisões inteligentes: revela oportunidades, minimiza riscos e aumenta a eficiência. Com ela, empresas entendem melhor o comportamento do cliente e ainda antecipam tendências e resultados futuros.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="product-card">
          <img
            src="https://xtech.com.br/config/imagens_conteudo/blogs/como-escolher-uma-empresa-de-consultoria-de-ti-descubra.jpg"
            alt="Consultoria de TI"
          />
          <div className="product-info">
            <h5>Consultoria</h5>
            <p>
            Consultoria de TI traz inovação, reduz custos e reforça a segurança. Enquanto sua equipe foca no core business, especialistas otimizam operações, protegem dados e acompanham tendências para manter seu negócio à frente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;