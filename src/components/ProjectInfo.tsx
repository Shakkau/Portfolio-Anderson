import React from "react";

export interface ProjectInfoProps {
  title: string;
  techs: string[];
  description: string;
  demoLink?: string;
  githubLink?: string;
  demoImages?: string[];
  isEnterprise?: boolean;
}

export default function ProjectInfo({
  title,
  techs,
  description,
  demoLink,
  githubLink,
  demoImages,
  isEnterprise = false,
}: ProjectInfoProps) {
  
  return (
    <div className="bg-neutral-700/30 border border-neutral-600 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      <p className="text-neutral-400 text-sm mb-3">
        Tecnologias: {techs.join(", ")}
      </p>

      <p className="text-neutral-300">{description}</p>

      {isEnterprise && (
        <p className="text-neutral-500 text-xs mt-2 italic">
          *Este é um projeto empresarial; por motivos de confidencialidade, o
          código-fonte e detalhes internos não podem ser divulgados. Apenas
          demonstrações visuais públicas estão disponíveis.*
        </p>
      )}

      <div className="mt-4 flex gap-4">
        {isEnterprise && demoImages && demoImages.length > 0 && (
          <button
            onClick={() => console.log("Abrir galeria de prints", demoImages)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Ver demonstração →
          </button>
        )}

        {!isEnterprise && demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Ver projeto →
          </a>
        )}

        {!isEnterprise && githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}
