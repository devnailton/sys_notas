import React from 'react';
import './Contact.css'; // Importando o CSS específico para a seção

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="text-center">Contato</h2>
      <div className="contact-container">
        {/* Formulário de Contato */}
        <div className="contact-form">
          <form id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Seu Nome"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Número de Telefone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="(XX)XXXXX-XXXX"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Seu Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Sua Mensagem"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>

        {/* Google Maps */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7203792617424!2d-54.58962809655601!3d-16.49446654773713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379b90073168ea5%3A0x366f29f98678fe72!2zQXBleSBTb2x1w6fDtWVzIFRlY25vbMOzZ2ljYXM!5e1!3m2!1spt-BR!2sbr!4v1725854579245!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;