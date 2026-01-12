export default function AboutView() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        Sobre Mim
      </h2>

      <div className="space-y-4 text-neutral-300">
        <p>
          Olá a você que está lendo este texto hoje! Sou desenvolvedor
          profissionalmente há mais de 1 ano, mas estou na
          programação desde 2022. Minha jornada começou comigo
          explorando o inspecionar elemento das páginas, alterando HTML,
          mexendo no console e tentando entender como tudo funcionava — mesmo
          sem imaginar que um dia eu realmente dominaria aquilo.
        </p>

        <p>
          Aos 18 anos, um amigo me apresentou a ideia de fazer um curso técnico
          de desenvolvimento no SENAI. Eu estava indeciso sobre qual caminho
          seguir, então decidi dar uma chance. Foi a melhor escolha que poderia
          ter feito: me identifiquei de imediato, me destaquei como um dos
          melhores da turma e percebi que programação era realmente para mim.
        </p>

        <p>
          Entrei no mercado de trabalho como suporte técnico em um aplicativo de vendas,
          onde aprendi muito sobre banco de dados, atendimento e trabalho em
          equipe. Depois de 8 meses, surgiu uma oportunidade na área que eu
          sempre quis: Desenvolvimento. Hoje atuo criando aplicações, sistemas e
          sites, sempre buscando novas tecnologias, aprendendo protocolos e
          entendendo cada vez mais os princípios que sustentam a tecnologia.
        </p>
      </div>

      <div className="border-t border-neutral-700 my-8"></div>

      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        🚀 Habilidades
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React-Native",
              "React",
              "Tailwind",
              "TypeScript",
              "HTML/CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm text-neutral-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "Spring Security",
              "API REST",
              "MySQL",
              "PostgreSQL",
              "Java Swing",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm text-neutral-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Ferramentas</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Git",
              "GitHub",
              "GitHub Desktop",
              "VS Code",
              "IntelliJ",
              "NetBeans",
              "Postman",
              "Hércules",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm text-neutral-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
