import React from "react";
import ProjectInfo from "../components/ProjectInfo";

interface Project {
  id: string;
  title: string;
  techs: string[];
  description: string;
  demoLink?: string;
  githubLink?: string;
}

const projectsExample: Project[] = [
  {
    id: "proj-1",
    title: "Projeto 1",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Uma aplicação front-end para demonstrar layout, componentes reutilizáveis e integração com APIs.",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: "proj-2",
    title: "Projeto 2",
    techs: ["Node.js", "Express", "PostgreSQL"],
    description:
      "API REST completa com autenticação, rotas e integração com banco de dados.",
    demoLink: "#",
    githubLink: "#",
  },
];

export default function ProjectsView({
  projects = projectsExample,
}: {
  projects?: Project[];
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        💼 Meus Projetos
      </h2>

      <div className="space-y-6">
        {projects.map((p) => (
          <ProjectInfo
            key={p.id}
            title={p.title}
            techs={p.techs}
            description={p.description}
            demoLink={p.demoLink}
            githubLink={p.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
