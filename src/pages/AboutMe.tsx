import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PurpleBackground from "../components/PurpleBackground";
import ProjectsView from "../views/ProjectsView";
import AboutView from "../views/AboutView";
import ResumeView from "../views/ResumeView";

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
        {/* LADO ESQUERDO */}
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

            {/* Tabs */}
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
            {activeTab === "projetos" && <ProjectsView />}
            {activeTab === "sobre" && <AboutView />}
            {activeTab === "curriculo" && <ResumeView />}
          </div>
        </div>
      </div>
    </div>
  );
}
