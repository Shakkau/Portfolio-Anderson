import React from "react";

export default function ResumeView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          📄 Meu Currículo
        </h2>
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
          Baixar PDF
        </button>
      </div>

      <div className="space-y-8 text-neutral-300">
        {/* Experiência */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">💼 Experiência</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-purple-500 pl-4">
              <h4 className="text-lg font-semibold text-white">
                Desenvolvedor Júnior - DX-Brasil
              </h4>
              <p className="text-neutral-400 text-sm mb-2">2023 - Atual</p>
              <p>Descrição das responsabilidades e conquistas no cargo.</p>
            </div>
            {/* Adicione mais experiências */}
          </div>
        </div>

        {/* Formação */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">🎓 Formação</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-purple-500 pl-4">
              <h4 className="text-lg font-semibold text-white">
                Curso/Graduação
              </h4>
              <p className="text-neutral-400 text-sm mb-2">Instituição - Ano</p>
              <p>Descrição da formação acadêmica.</p>
            </div>
            {/* Adicione mais formações */}
          </div>
        </div>

        {/* Certificações */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            🏆 Certificações
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Certificação 1</li>
            <li>Certificação 2</li>
            <li>Certificação 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}