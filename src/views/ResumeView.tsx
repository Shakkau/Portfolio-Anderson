import React from "react";
import { Download } from "lucide-react";

export default function ResumeView() {
  const handleDownloadPDF = () => {
    const printWindow = window.open("", "_blank");

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Currículo - Anderson José da Luz Júnior</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 40px auto;
              padding: 20px;
              color: #333;
              line-height: 1.6;
            }
            h1 {
              color: #7c3aed;
              font-size: 28px;
              margin-bottom: 10px;
              border-bottom: 3px solid #7c3aed;
              padding-bottom: 10px;
            }
            h2 {
              color: #7c3aed;
              font-size: 20px;
              margin-top: 30px;
              margin-bottom: 15px;
              border-left: 4px solid #7c3aed;
              padding-left: 10px;
            }
            h3 {
              color: #333;
              font-size: 16px;
              margin-bottom: 5px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .contact-info {
              text-align: center;
              color: #666;
              font-size: 14px;
              margin-bottom: 10px;
            }
            .section {
              margin-bottom: 25px;
            }
            .job-item {
              margin-bottom: 20px;
              padding-left: 15px;
              border-left: 3px solid #e5e7eb;
            }
            .job-title {
              font-weight: bold;
              color: #333;
            }
            .company {
              color: #7c3aed;
              font-weight: 600;
            }
            .period {
              color: #666;
              font-size: 14px;
              font-style: italic;
              margin-top: 3px;
            }
            .skills {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
              margin-top: 10px;
            }
            .skill-tag {
              background: #f3f4f6;
              padding: 4px 12px;
              border-radius: 4px;
              font-size: 13px;
              color: #374151;
              border: 1px solid #e5e7eb;
            }
            .languages {
              display: flex;
              gap: 20px;
              margin-top: 10px;
            }
            .language-item {
              flex: 1;
            }
            @media print {
              body {
                margin: 0;
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Anderson José da Luz Júnior</h1>
            <div class="contact-info">
              Pato Branco, PR | 21 anos
            </div>
            <div class="contact-info">
              📞 (46) 99984-8079 | ✉️ anderson_junior2@hotmail.com
            </div>
          </div>

          <div class="section">
            <h2>🎯 Objetivo</h2>
            <p>Desenvolvedor Jr.</p>
          </div>

          <div class="section">
            <h2>📋 Qualificações</h2>
            <p>Profissional com anos de experiência em tecnologia e programação, com pensamento analítico, capacidade de questionamento, pensamento criativo, abertura para inovações, resolução de problemas e trabalho em equipe.</p>
          </div>

          <div class="section">
            <h2>💼 Experiência Profissional</h2>
            
            <div class="job-item">
              <h3><span class="job-title">Auxiliar de Desenvolvimento de Sistemas</span> - <span class="company">Visioncar</span></h3>
              <p class="period">Março/2024 - Atualmente</p>
            </div>

            <div class="job-item">
              <h3><span class="job-title">Suporte Técnico</span> - <span class="company">Eeco Sistemas</span></h3>
              <p class="period">Maio/2023 - Fevereiro/2024</p>
            </div>
          </div>

          <div class="section">
            <h2>🚀 Projetos Desenvolvidos</h2>
            
            <div class="job-item">
              <h3><span class="job-title">Smart IPDX - Aplicativo Mobile</span></h3>
              <p>Desenvolvi um aplicativo para a empresa Visioncar chamado Smart
              IPDX. O app se conecta com as placas físicas da empresa,
              permitindo enviar comandos de automação, ativar/desativar alarmes,
              visualizar o histórico de disparos e receber notificações de
              eventos críticos. Trabalhei na interface do app em React Native,
              comunicação com a API e no tratamento de estados e erros para
              garantir confiabilidade da aplicação.</p>
              <p class="period">Tecnologias: React Native, Typescript, Tailwind, AsyncStorage.</p>
            </div>

            <div class="job-item">
              <h3><span class="job-title">Smart IPDX - Sistema Backend</span></h3>
              <p>Desenvolvi o backend que integra o aplicativo com as placas,
              implementando endpoints para envio de comandos, persistência de
              histórico e integração com outras aplicações corporativas.
              Implementei autenticação, filas de processamento e rotinas de
              reconciliação para garantir consistência entre dispositivos e
              sistema.</p>
              <p class="period">Tecnologias: Java, Spring Boot, MySQL, Spring Security.</p>
            </div>
          </div>

          <div class="section">
            <h2>🛠️ Conhecimentos</h2>
            <div class="skills">
              <span class="skill-tag">Github</span>
              <span class="skill-tag">Java</span>
              <span class="skill-tag">Flutter</span>
              <span class="skill-tag">Spring Boot</span>
              <span class="skill-tag">Spring Security</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">MySQL</span>
              <span class="skill-tag">BFF (Backend For Frontend)</span>
              <span class="skill-tag">Microserviços</span>
              <span class="skill-tag">Desenvolvimento Backend</span>
              <span class="skill-tag">React-native</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Tailwind</span>
            </div>
          </div>

          <div class="section">
            <h2>🎓 Formação Acadêmica</h2>
            <div class="job-item">
              <h3>Curso Técnico: Análise e Desenvolvimento de Sistemas</h3>
              <p class="period">SENAI - Agosto/2022 à Dezembro/2023</p>
            </div>
          </div>

          <div class="section">
            <h2>🌐 Idiomas</h2>
            <div class="languages">
              <div class="language-item">
                <strong>Português:</strong> Nativo
              </div>
              <div class="language-item">
                <strong>Inglês:</strong> Intermediário
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    printWindow?.document.write(content);
    printWindow?.document.close();

    setTimeout(() => {
      printWindow?.print();
    }, 250);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          Meu Currículo
        </h2>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          <Download className="w-4 h-4" />
          Baixar PDF
        </button>
      </div>

      {/* DADOS PESSOAIS */}
      <div className="text-neutral-300 space-y-2 mb-10">
        <h3 className="text-2xl font-bold text-white mb-2">
          👤 Informações Pessoais
        </h3>
        <p>
          <strong>Nome:</strong> Anderson José da Luz Júnior
        </p>
        <p>
          <strong>Cidade:</strong> Pato Branco, PR
        </p>
        <p>
          <strong>Idade:</strong> 21 anos
        </p>
        <p>
          <strong>Telefone:</strong> (46) 99984-8079
        </p>
        <p>
          <strong>Email:</strong> anderson_junior2@hotmail.com
        </p>
      </div>

      <div className="space-y-8 text-neutral-300">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">🎯 Objetivo</h3>
          <p>Desenvolvedor Jr.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            📋 Qualificações
          </h3>
          <p>
            Profissional com anos de experiência em tecnologia e
            programação, com pensamento analítico, capacidade de questionamento,
            pensamento criativo, abertura para inovações, resolução de problemas
            e trabalho em equipe.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            💼 Experiência Profissional
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-purple-500 pl-4">
              <h4 className="text-lg font-semibold text-white">
                Auxiliar de Desenvolvimento de Sistemas
              </h4>
              <p className="text-purple-400 font-medium">Visioncar</p>
              <p className="text-neutral-400 text-sm mb-2">
                Março/2024 - Atualmente
              </p>
            </div>

            <div className="border-l-2 border-purple-500 pl-4">
              <h4 className="text-lg font-semibold text-white">
                Suporte Técnico
              </h4>
              <p className="text-purple-400 font-medium">Eeco Sistemas</p>
              <p className="text-neutral-400 text-sm mb-2">
                Maio/2023 - Fevereiro/2024
              </p>
            </div>
          </div>
        </div>

        {/* PROJETOS */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            🚀 Projetos Desenvolvidos
          </h3>

          <div className="border-l-2 border-purple-500 pl-4 mb-6">
            <h4 className="text-lg font-semibold text-white">
              Smart IPDX - Aplicativo Mobile
            </h4>
            <p className="text-neutral-300">
              Desenvolvi um aplicativo para a empresa Visioncar chamado Smart
              IPDX. O app se conecta com as placas físicas da empresa,
              permitindo enviar comandos de automação, ativar/desativar alarmes,
              visualizar o histórico de disparos e receber notificações de
              eventos críticos. Trabalhei na interface do app em React Native,
              comunicação com a API e no tratamento de estados e erros para
              garantir confiabilidade da aplicação.
            </p>
            <p className="text-neutral-400 text-sm">
              Tecnologias: React Native, Tailwind, AsyncStorage, Typescript.
            </p>
          </div>

          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-lg font-semibold text-white">
              Smart IPDX - Sistema Backend
            </h4>
            <p className="text-neutral-300">
              Desenvolvi o backend que integra o aplicativo com as placas,
              implementando endpoints para envio de comandos, persistência de
              histórico e integração com outras aplicações corporativas.
              Implementei autenticação, filas de processamento e rotinas de
              reconciliação para garantir consistência entre dispositivos e
              sistema.
            </p>
            <p className="text-neutral-400 text-sm">
              Tecnologias: Java, Spring Boot, MySQL, Spring Security.
            </p>
          </div>
        </div>

        {/* Conhecimentos */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            🛠️ Conhecimentos
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "GitHub",
              "Java",
              "Flutter",
              "Spring Boot",
              "Spring Security",
              "PostgreSQL",
              "MySQL",
              "BFF (Backend For Frontend)",
              "Microserviços",
              "Desenvolvimento Backend",
              "React-Native",
              "React",
              "Tailwind",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Formação */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            🎓 Formação Acadêmica
          </h3>
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-lg font-semibold text-white">
              Curso Técnico: Análise e Desenvolvimento de Sistemas
            </h4>
            <p className="text-purple-400 font-medium">SENAI</p>
            <p className="text-neutral-400 text-sm">
              Agosto/2022 à Dezembro/2023
            </p>
          </div>
        </div>

        {/* Idiomas */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">🌐 Idiomas</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Português:</span>
              <span>Nativo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Inglês:</span>
              <span>Intermediário</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
