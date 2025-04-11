import React from 'react';
import './AboutUs.css'; // Importando o CSS específico para a seção

const AboutUs = () => {
  return (
    <section id="aboutUs" className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-text">
          <h2>Sobre Nós</h2>
          <p>
            Nossos Sistemas contam com uma rede de distribuição nacional superior a 1.650 parceiros na Itália e 350 em
            todo o mundo e mais de 800.000 clientes, faça um orçamento e conheça o que há de mais moderno e eficiente no
            setor de TI.
          </p>
          <p>
            Com mais de 10 anos de experiência em sua gestão, a Apey Sistemas sempre acompanhou as transformações do
            mercado de tecnologia. Nosso objetivo é tornar sua experiência mais fácil, atuando como uma intermediadora
            entre sua empresa e a tecnologia. Oferecemos os melhores sistemas e ferramentas disponíveis, visando
            otimizar e automatizar o fluxo de trabalho da sua organização.
          </p>
          <p>
            Acreditamos na importância do cuidado contínuo, e por isso contamos com uma equipe especializada que está
            sempre se atualizando sobre as novidades no mercado de software.
          </p>
          <p>
            Nossa missão é fornecer a pequenos, médios e grandes empresários as ferramentas necessárias para enfrentar
            os desafios de diferentes setores e alavancar as rotinas da empresa por meio de sistemas modernos.
            Trabalhamos com uma variedade de tecnologias para garantir que nossos clientes recebam produtos sob demanda,
            escaláveis, confiáveis e atualizados.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="https://cdn.dribbble.com/users/2434447/screenshots/6743016/captura_de_tela_2019-07-06_a_s_00.11.15.png"
            alt="Sobre Nós"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;