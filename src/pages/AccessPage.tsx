import { useState, useEffect } from "react";
import PurpleBackground from "../components/PurpleBackground";
import { useNavigate } from "react-router-dom";

export default function AccessPage() {
  const messages = [
    "Bem-vindo ao meu portfólio!",
    "Conheça um pouco sobre mim! :)",
    "Meu início, projetos e conhecimento.",
  ];

  const [current, setCurrent] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(messages[0]);
  const [animateOut, setAnimateOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true);

      setTimeout(() => {
        const nextIndex = (current + 1) % messages.length;
        setCurrent(nextIndex);
        setDisplayMessage(messages[nextIndex]);
        setAnimateOut(false);
      }, 700);
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const handleClickNavigateHomePage = () => {
    navigate("/About-Anderson");
  };

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden px-4">
      <PurpleBackground />

      <div
        className="w-full max-w-[800px] h-auto min-h-[60%] bg-neutral-800/70 backdrop-blur-md
          border border-neutral-700 rounded-2xl shadow-2xl flex flex-col relative p-6 md:p-10 z-10"
      >
        <div className="flex flex-col items-center relative h-14 md:h-16">
          <h1
            className={`absolute text-2xl md:text-4xl font-bold text-white transition-all duration-600 ${
              animateOut
                ? "translate-x-10 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            {displayMessage}
          </h1>

          <div className="flex gap-2 absolute bottom-[-20px]">
            {messages.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-1 md:w-3 md:h-1.5 rounded-full transition-all duration-600 ${
                  idx === current ? "bg-white" : "bg-neutral-500"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-2 md:px-7 mt-6">
          <p className="text-neutral-300 text-base md:text-lg text-center leading-relaxed">
            Me chamo Anderson e este é portfólio online, que criei com o intuito de mostrar um pouco
            sobre mim. Aqui, irei contar um pouco sobre mim, citar alguns
            projetos nos quais já trabalhei e compartilhar um pouco da minha
            história — de como conheci a programação e por onde passei nesta
            jornada (pequena ainda, mas sempre dando o meu melhor).
          </p>
        </div>

        <div className="mt-6 mb-4 flex justify-center">
          <button
            onClick={handleClickNavigateHomePage}
            className="group border border-neutral-500 text-white text-xl md:text-2xl font-semibold px-8 md:px-10 py-3 md:py-4 rounded-xl bg-transparent transition-all duration-300 hover:scale-105 hover:border-neutral-300"
          >
            <div className="flex items-center gap-3">
              Acessar
              <span className="text-2xl md:text-3xl transition-all duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}