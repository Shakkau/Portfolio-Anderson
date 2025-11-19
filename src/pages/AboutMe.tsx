import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PurpleBackground from "../components/PurpleBackground";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("projetos");
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate("/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  return (
    <div className="w-full min-h-screen bg-neutral-900 relative overflow-hidden py-12">
      <PurpleBackground />

      <div className="max-w-7xl mx-auto w-full h-full flex gap-6 px-8 relative z-10">
        <div className="w-[30%] flex flex-col">
          <div className="bg-neutral-800/70 backdrop-blur-md border border-neutral-700 rounded-2xl p-6 shadow-xl h-full">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-lg bg-neutral-700/50 hover:bg-neutral-700 text-white transition-all duration-200 hover:scale-110"
              title="Voltar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-1 aspect-square bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-6xl">👤</span>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mb-1">
              Anderson José da Luz Júnior
            </h1>
            <p className="text-neutral-400 mb-4">
              Desenvolvedor Júnior pela DX-Brasil📍
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-center gap-2 text-neutral-300">
                <span>📍</span>
                <span>Pato Branco, Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <span>💼</span>
                <span>Desenvolvedor Full Stack</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <span>🔗</span>
                <span>portfolio.com</span>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-4 space-y-2">
              <button
                onClick={() => setActiveTab("projetos")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === "projetos"
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-400 hover:bg-neutral-700/50 hover:text-white"
                }`}
              >
                💼 Meus Projetos
              </button>

              <button
                onClick={() => setActiveTab("sobre")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === "sobre"
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-400 hover:bg-neutral-700/50 hover:text-white"
                }`}
              >
                📖 Sobre Mim
              </button>

              <button
                onClick={() => setActiveTab("curriculo")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === "curriculo"
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-400 hover:bg-neutral-700/50 hover:text-white"
                }`}
              >
                📄 Meu Currículo
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="bg-neutral-800/70 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 shadow-xl h-full flex flex-col overflow-y-auto">
            {/* Conteúdo: Meus Projetos */}
            {activeTab === "projetos" && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  💼 Meus Projetos
                </h2>

                <div className="space-y-6">
                  {/* Projeto 1 */}
                  <div className="bg-neutral-700/30 border border-neutral-600 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Projeto 1
                    </h3>
                    <p className="text-neutral-400 text-sm mb-3">
                      Tecnologias: React, TypeScript, Tailwind
                    </p>
                    <p className="text-neutral-300">
                      Descrição do projeto aqui. Explique o que foi
                      desenvolvido, os desafios enfrentados e as soluções
                      implementadas.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Ver projeto →
                      </a>
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>

                  {/* Projeto 2 */}
                  <div className="bg-neutral-700/30 border border-neutral-600 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Projeto 2
                    </h3>
                    <p className="text-neutral-400 text-sm mb-3">
                      Tecnologias: Node.js, Express, PostgreSQL
                    </p>
                    <p className="text-neutral-300">
                      Descrição do projeto aqui. Explique o que foi
                      desenvolvido, os desafios enfrentados e as soluções
                      implementadas.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Ver projeto →
                      </a>
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>

                  {/* Adicione mais projetos aqui */}
                </div>
              </div>
            )}

            {/* Conteúdo: Sobre Mim */}
            {activeTab === "sobre" && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  📖 Sobre Mim
                </h2>

                <div className="space-y-4 text-neutral-300">
                  <p>
                    Olá! Sou um desenvolvedor apaixonado por tecnologia e
                    inovação. Minha jornada na programação começou há alguns
                    anos, e desde então venho me dedicando a aprender e criar
                    soluções que fazem a diferença.
                  </p>

                  <p>
                    Tenho experiência com desenvolvimento web, trabalhando com
                    tecnologias modernas como React, TypeScript, Node.js e muito
                    mais. Adoro enfrentar desafios e transformar ideias em
                    realidade através do código.
                  </p>

                  <p>
                    Quando não estou programando, gosto de aprender novas
                    tecnologias, contribuir com a comunidade e compartilhar
                    conhecimento.
                  </p>
                </div>

                <div className="border-t border-neutral-700 my-8"></div>

                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  🚀 Habilidades
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "Tailwind CSS",
                        "Next.js",
                        "HTML/CSS",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm text-neutral-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Express",
                        "PostgreSQL",
                        "MongoDB",
                        "REST API",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm text-neutral-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Ferramentas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "Docker", "Figma"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm text-neutral-200"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Conteúdo: Meu Currículo */}
            {activeTab === "curriculo" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    📄 Meu Currículo
                  </h2>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Baixar PDF
                  </button>
                </div>

                <div className="space-y-8 text-neutral-300">
                  {/* Experiência */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      💼 Experiência
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-2 border-purple-500 pl-4">
                        <h4 className="text-lg font-semibold text-white">
                          Desenvolvedor Júnior - DX-Brasil
                        </h4>
                        <p className="text-neutral-400 text-sm mb-2">
                          2023 - Atual
                        </p>
                        <p>
                          Descrição das responsabilidades e conquistas no cargo.
                        </p>
                      </div>
                      {/* Adicione mais experiências */}
                    </div>
                  </div>

                  {/* Formação */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      🎓 Formação
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-2 border-purple-500 pl-4">
                        <h4 className="text-lg font-semibold text-white">
                          Curso/Graduação
                        </h4>
                        <p className="text-neutral-400 text-sm mb-2">
                          Instituição - Ano
                        </p>
                        <p>Descrição da formação acadêmica.</p>
                      </div>
                      {/* Adicione mais formações */}
                    </div>
                  </div>

                  {/* Certificações */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      🏆 Certificações
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Certificação 1</li>
                      <li>Certificação 2</li>
                      <li>Certificação 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
