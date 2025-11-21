export default function AboutView() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        Sobre Mim
      </h2>

      <div className="space-y-4 text-neutral-300">
        <p>
          Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação. Minha
          jornada na programação começou há alguns anos, e desde então venho me
          dedicando a aprender e criar soluções que fazem a diferença.
        </p>

        <p>
          Tenho experiência com desenvolvimento web, trabalhando com tecnologias
          modernas como React, TypeScript, Node.js e muito mais. Adoro enfrentar
          desafios e transformar ideias em realidade através do código.
        </p>

        <p>
          Quando não estou programando, gosto de aprender novas tecnologias,
          contribuir com a comunidade e compartilhar conhecimento.
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
            {["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm text-neutral-200"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm text-neutral-200"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Ferramentas</h3>
          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "VS Code", "Docker", "Figma"].map((skill) => (
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
