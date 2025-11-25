import React, { useState } from "react";
import DemoModal from "./DemoModal";

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
  const [openDemo, setOpenDemo] = useState(false);

  const hasDemoImages = demoImages && demoImages.length > 0;

  return (
    <div className="bg-neutral-700/30 border border-neutral-600 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      <p className="text-neutral-400 text-sm mb-3">
        Tecnologias: {techs.join(", ")}
      </p>

      <p className="text-neutral-300">{description}</p>

      {isEnterprise && (
        <p className="text-neutral-500 text-xs mt-2 italic">
          *Este é um projeto empresarial; por motivos de confidencialidade,
          detalhes internos e código-fonte não podem ser divulgados. Apenas
          recursos públicos podem ser exibidos.*
        </p>
      )}

      <div className="mt-4 flex gap-4">
        {hasDemoImages && (
          <button
            onClick={() => setOpenDemo(true)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Ver demonstração →
          </button>
        )}

        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Ver projeto →
          </a>
        )}

        {githubLink && (
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

      {openDemo && (
        <DemoModal images={demoImages!} onClose={() => setOpenDemo(false)} />
      )}
    </div>
  );
}
