import ProjectInfo from "../components/ProjectInfo";

interface Project {
  id: string;
  title: string;
  techs: string[];
  description: string;
  demoLink?: string;
  demoImages?: string[]; // ajustado (antes estava string)
  githubLink?: string;
  isEnterprise?: boolean;
}

const projectsExample: Project[] = [
  {
    id: "smart-ipdx-app",
    title: "Smart IPDX – Aplicativo Mobile",
    techs: ["React Native", "Tailwind", "AsyncStorage", "TypeScript"],
    description:
      "Aplicativo mobile Smart IPDX para comunicação direta com a api. Permite enviar comandos, gerenciar alarmes e visualizar eventos.",
    isEnterprise: true,
    demoImages: [],
  },
  {
    id: "smart-ipdx-backend",
    title: "Smart IPDX – Sistema Backend",
    techs: ["Java", "Spring Boot", "MySQL", "Spring Security"],
    description:
      "Backend responsável por gerenciar comunicação do aplicativo Smart IPDX com os aparelhos da VisionCar, incluindo autenticação, confirmação de envios e segurança nas requisições.",
    isEnterprise: true,
    demoImages: [],
  },

  {
    id: "proj-1",
    title: "Projeto 1",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Uma aplicação front-end para demonstrar layout, componentes reutilizáveis e integração com APIs.",
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
        Meus Projetos
      </h2>

      <div className="space-y-6">
        {projects.map((p) => (
          <ProjectInfo
            key={p.id}
            title={p.title}
            techs={p.techs}
            description={p.description}
            demoLink={p.demoLink}
            githubLink={!p.isEnterprise ? p.githubLink : undefined}
            isEnterprise={p.isEnterprise}
          />
        ))}
      </div>
    </div>
  );
}
