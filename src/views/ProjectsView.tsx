import ProjectInfo from "../components/ProjectInfo";
import AppImg1 from "../assets/AppScreenshot/AppImg1.jpg";
import AppImg2 from "../assets/AppScreenshot/AppImg2.jpg";
import AppImg3 from "../assets/AppScreenshot/AppImg3.jpg";
import AppImg4 from "../assets/AppScreenshot/AppImg4.jpg";
import AppImg5 from "../assets/AppScreenshot/AppImg5.jpg";
import AppImg6 from "../assets/AppScreenshot/AppImg6.jpg";

interface Project {
  id: string;
  title: string;
  techs: string[];
  description: string;
  demoLink?: string;
  demoImages?: string[];
  githubLink?: string;
  isEnterprise?: boolean;
}

const projectsExample: Project[] = [
  {
    id: "smart-ipdx-app",
    title: "Smart IPDX – Aplicativo Mobile",
    techs: ["React Native", "Tailwind", "AsyncStorage"],
    description:
      "Aplicativo mobile Smart IPDX para envio de comandos, ativações de alarmes e visualização de histórico.",
    isEnterprise: true,
    demoImages: [AppImg1, AppImg2, AppImg3, AppImg4, AppImg5, AppImg6],
  },
  {
    id: "smart-ipdx-backend",
    title: "Smart IPDX – Sistema Backend",
    techs: ["Java", "Spring Boot", "MySQL", "Spring Security"],
    description:
      "Backend responsável por comunicar o app Smart IPDX com os dispositivos físicos e banco de dados, gerenciando permissões e segurança para requisições.",
    isEnterprise: true,
    demoImages: [],
  },
  {
    id: "site-visioncar",
    title: "VisionCar - Site",
    techs: ["React", "Tailwind CSS", "Typescript"],
    description:
      "Site principal da VisionCar, possuindo acesso a um backend e banco de dados, permitindo inserção de informações no site para demonstração de clientes.",
    demoLink: "https://visioncar.ind.br",
    isEnterprise: true,
  },
  {
    id: "site-dxbrasil",
    title: "DxBrasil - Site",
    techs: ["React", "Tailwind CSS", "Typescript"],
    description:
      "Site principal da DxBrasil, possuindo acesso a um backend e banco de dados, permitindo inserção de informações no site para demonstração de clientes.",
    demoLink: "https://dx-brasil.ind.br",
    isEnterprise: true,
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
          <ProjectInfo key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
