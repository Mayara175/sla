import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import lagarta from "../assets/lagarta.png";
import pulgao from "../assets/pulgao.png";
import besouro from "../assets/besouro.png";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="home-root">
      <Navbar />

      {/* HERO */}
      <section className="hero full-screen reveal">
        <div className="hero-text">
          <h1>🌾 Bem-vindo ao AgroIA</h1>
          <p>
            Identifique e combata pragas agrícolas com ajuda da inteligência
            artificial. Sustentabilidade e tecnologia no campo.
          </p>
          <a href="/ia" className="hero-btn">
            Explorar IA →
          </a>
        </div>
        <img src={lagarta} alt="Praga agrícola" className="hero-img" />
      </section>

      {/* PRAGAS */}
      <section className="tipos-pragas reveal">
        <h2>🐛 Tipos de Pragas e Como Lidar</h2>
        <div className="cards-container">
          <div className="card-praga">
            <img src={lagarta} alt="Lagarta" />
            <div className="card-info">
              <h3>Lagartas</h3>
              <p>
                Atacam folhas e brotos, prejudicando o crescimento. Use controle
                biológico com <em>Bacillus thuringiensis</em> e mantenha o solo saudável.
              </p>
            </div>
          </div>

          <div className="card-praga">
            <img src={pulgao} alt="Pulgões" />
            <div className="card-info">
              <h3>Pulgões</h3>
              <p>
                Sugam a seiva das plantas e transmitem vírus. Controle com
                joaninhas e caldas de sabão neutro.
              </p>
            </div>
          </div>

          <div className="card-praga">
            <img src={besouro} alt="Besouro" />
            <div className="card-info">
              <h3>Besouros</h3>
              <p>
                Danificam folhas e raízes. Faça inspeções periódicas e use
                armadilhas luminosas para controle ecológico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DÚVIDAS */}
      <section className="duvida reveal">
        <h2>❓ Tem alguma dúvida?</h2>
        <p>
          Nossa IA está pronta para te ajudar a identificar pragas e recomendar
          o melhor tratamento de forma prática.
        </p>
        <a href="/comunidade" className="btn-duvida">
          Fale com a Comunidade 🌱
        </a>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <p>© 2025 AgroIA — Tecnologia e Sustentabilidade no Campo 🌿</p>
      </footer>
    </div>
  );
}
