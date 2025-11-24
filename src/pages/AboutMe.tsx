import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PurpleBackground from "../components/PurpleBackground";
import ProjectsView from "../views/ProjectsView";
import AboutView from "../views/AboutView";
import ResumeView from "../views/ResumeView";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("projetos");
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-neutral-900 relative overflow-hidden py-12">
      <PurpleBackground />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 px-4 md:px-8 relative z-10">
        <div className="w-full md:w-[30%]">
          <div className="bg-neutral-800/70 backdrop-blur-md border border-neutral-700 rounded-2xl p-6 shadow-xl h-auto md:h-[calc(100vh-6rem)] overflow-y-auto">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-lg bg-neutral-700/50 hover:bg-neutral-700 text-white transition-all duration-200 hover:scale-110 mb-2"
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

            <div className="flex justify-center mb-2">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden">
                <svg
                  className="w-20 h-20 md:w-24 md:h-24 text-neutral-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mb-2 text-center">
              Anderson José da Luz Júnior
            </h1>
            <p className="text-neutral-400 mb-6 text-center">
              Desenvolvedor Júnior pela VisionCar
            </p>

            <div className="space-y-3 text-sm mb-6 pb-6 relative">
              <div className="flex items-center gap-2 text-neutral-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Pato Branco, Brasil</span>
              </div>

              <div className="flex items-center gap-2 text-neutral-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <a
                  href="https://maps.google.com/?q=VisionCar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  VisionCar
                </a>
              </div>

              <div className="absolute bottom-0 left-0 w-full flex items-center gap-2 text-neutral-400">
                <span className="text-1x1 tracking-wide">Contato</span>
                <div className="flex-1 border-b border-neutral-700"></div>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-neutral-700">
              <div className="space-y-3">
                <a
                  href="mailto:Anderson_Junior2@hotmail.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">Anderson_Junior2@hotmail.com</span>
                </a>
                <a
                  href="https://instagram.com/anderson.jdaluz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-pink-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/andersonjljunior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Shakkau?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-purple-400 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setActiveTab("projetos")}
                className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg transition-all duration-200 hover:cursor-pointer ${
                  activeTab === "projetos"
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-400 hover:bg-neutral-700/50 hover:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h5l2 3h11v9H3z" />
                  <path d="M3 7V4h5l2 3" />
                </svg>
                Meus Projetos
              </button>

              <button
                onClick={() => setActiveTab("sobre")}
                className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg transition-all duration-200 hover:cursor-pointer ${
                  activeTab === "sobre"
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-400 hover:bg-neutral-700/50 hover:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z" />
                  <path d="M3 22c0-4.4 3.6-8 9-8s9 3.6 9 8" />
                </svg>
                Sobre Mim
              </button>

              <button
                onClick={() => setActiveTab("curriculo")}
                className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg transition-all duration-200 hover:cursor-pointer ${
                  activeTab === "curriculo"
                    ? "bg-neutral-700 text-white font-semibold"
                    : "text-neutral-400 hover:bg-neutral-700/50 hover:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
                Meu Currículo
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full md:w-auto">
          <div className="bg-neutral-800/70 backdrop-blur-md border border-neutral-700 rounded-2xl p-6 md:p-8 shadow-xl h-auto md:h-[calc(100vh-6rem)] overflow-y-auto">
            {activeTab === "projetos" && <ProjectsView />}
            {activeTab === "sobre" && <AboutView />}
            {activeTab === "curriculo" && <ResumeView />}
          </div>
        </div>
      </div>
    </div>
  );
}
