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
    navigate("/HomePage", { replace: true });

    window.history.replaceState(null, "", "/About-Anderson");
  };

  return (
    <div className="w-full h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      <PurpleBackground />

      <div
        className="w-[50%] h-[50%] bg-neutral-800/70 backdrop-blur-md 
          border border-neutral-700 rounded-2xl shadow-2xl flex flex-col relative p-10 z-10"
      >
        <div className="flex flex-col items-center relative h-16">
          <h1
            className={`absolute text-4xl font-bold text-white transition-all duration-600 ${
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
                className={`w-3 h-1 rounded-full transition-all duration-600 ${
                  idx === current ? "bg-white" : "bg-neutral-500"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-7">
          <p className="text-neutral-300 text-lg text-center">
            Meu portfólio online, que criei com o intuito de mostrar um pouco sobre mim.
            Aqui, irei contar um pouco sobre mim, citar alguns projetos nos
            quais já trabalhei e compartilhar um pouco da minha história, de
            como conheci a programação e por onde passei nesta jornada (pequena
            ainda, mas sempre dando o meu melhor).
          </p>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={() => handleClickNavigateHomePage()}
            className="
              group
              border border-neutral-500
              text-white text-2xl font-semibold
              px-10 py-4 rounded-xl
              bg-transparent
              transition-all
              duration-300
              hover:scale-105
              hover:border-neutral-300
              hover:cursor-pointer
            "
          >
            <div className="flex items-center gap-3">
              Acessar
              <span
                className="
                  text-3xl 
                  transition-all 
                  duration-300 
                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
