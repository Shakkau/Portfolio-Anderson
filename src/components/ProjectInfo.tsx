import React from "react";

export interface ProjectInfoProps {
  title: string;
  techs: string[];
  description: string;
  demoLink?: string;
  githubLink?: string;
}

export default function ProjectInfo({
  title,
  techs,
  description,
  demoLink,
  githubLink,
}: ProjectInfoProps) {
  return (
    <div className="bg-neutral-700/30 border border-neutral-600 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      <p className="text-neutral-400 text-sm mb-3">
        Tecnologias: {techs.join(", ")}
      </p>

      <p className="text-neutral-300">{description}</p>

      <div className="mt-4 flex gap-3">
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
    </div>
  );
}
