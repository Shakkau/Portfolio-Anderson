import React from "react";
import { Download } from "lucide-react";

const resumeHtml = `
  <div class="resume">
    <header class="resume-header">
      <h1>Anderson José da Luz Júnior</h1>
      <p>
        anderson_junior2@hotmail.com | +55 (46) 99984-8079 | Pato Branco, PR
      </p>
    </header>

    <section>
      <h2>Resumo</h2>
      <p>
        Desenvolvedor de Software com experiência no desenvolvimento de aplicações backend, frontend e sistemas web,
        voltados para automação e monitoramento em tempo real. Atuo na construção, manutenção e evolução de plataformas
        para o setor de segurança eletrônica, automação e rastreamento, desenvolvendo integrações com dispositivos IoT,
        integrações entre sistemas, APIs REST e soluções para monitoramento de rebanhos bovinos. Trabalho com Java
        (Spring Boot e Swing), React, React Native e MySQL, além da implementação de soluções utilizando protocolos como
        UDP, TCP e MQTT para comunicação com dispositivos e equipamentos de campo. Também participo do desenvolvimento
        e manutenção de aplicações web e sites institucionais, sempre buscando entregar soluções robustas, escaláveis
        e de fácil utilização.
      </p>
    </section>

    <section>
      <h2>Experiência</h2>

      <div class="experience">
        <div class="experience-head">
          <div>
            <h3>Desenvolvedor Júnior</h3>
            <p><strong>Visioncar</strong> | Paraná, Brazil</p>
          </div>
          <span>03/2024 – Atualmente</span>
        </div>

        <p>
          Atuação no desenvolvimento de sistemas voltados para segurança eletrônica, automação, rastreamento veicular
          e monitoramento de rebanhos bovinos, participando da construção, evolução e manutenção de plataformas
          utilizadas em tempo real por clientes e dispositivos IoT.
        </p>

        <ul>
          <li>Desenvolvimento e manutenção de aplicações backend utilizando Java (Spring Boot) e MySQL, implementando APIs REST e integrações entre sistemas.</li>
          <li>Participação na evolução e manutenção de aplicações legadas desenvolvidas em Java Swing, realizando correções, implementação de novas funcionalidades e melhorias de desempenho.</li>
          <li>Desenvolvimento de aplicações web e mobile utilizando React e React Native, integradas a plataformas de monitoramento e automação.</li>
          <li>Implementação de integrações com dispositivos IoT utilizando protocolos UDP, TCP e MQTT, garantindo comunicação confiável entre equipamentos e servidores.</li>
          <li>Desenvolvimento de funcionalidades para sistemas de monitoramento de rebanhos bovinos e rastreamento veicular em tempo real, realizando processamento e visualização de dados provenientes de dispositivos de campo.</li>
          <li>Desenvolvimento e manutenção dos sites institucionais da empresa, criando novas funcionalidades, integrações e melhorias na experiência dos usuários.</li>
        </ul>

        <p class="skills">
          <strong>Skills:</strong> Java, Spring Boot, Java Swing, React, React Native, MySQL, REST APIs, UDP/TCP, MQTT, IoT, Git, Real-time Systems
        </p>
      </div>

      <div class="experience">
        <div class="experience-head">
          <div>
            <h3>Suporte Técnico</h3>
            <p><strong>Eeco Sistemas</strong> | Paraná, Brazil</p>
          </div>
          <span>05/2023 – 02/2024</span>
        </div>

        <p>
          Atuação no suporte técnico e implantação de sistemas, realizando atendimento direto aos clientes, investigação
          de problemas, análise de banco de dados e apoio às integrações da plataforma com novos clientes.
        </p>

        <ul>
          <li>Atendimento direto aos clientes para resolução de dúvidas, suporte operacional e identificação de falhas no sistema.</li>
          <li>Investigação e validação de bugs reportados pelos usuários, reproduzindo cenários e encaminhando soluções junto à equipe de desenvolvimento.</li>
          <li>Realização de ajustes e correções diretamente no banco de dados PostgreSQL para resolução de inconsistências operacionais e suporte às demandas dos clientes.</li>
          <li>Participação na implantação e integração da plataforma para novos clientes, realizando configurações, validações e acompanhamento da entrada em produção.</li>
          <li>Atuação como elo entre clientes e equipe de desenvolvimento, documentando problemas, validando correções e garantindo maior qualidade nas entregas.</li>
        </ul>

        <p class="skills">
          <strong>Skills:</strong> PostgreSQL, SQL, Integração de Sistemas, Atendimento ao Cliente, Suporte Técnico, Troubleshooting
        </p>
      </div>
    </section>

    <section>
      <h2>Educação</h2>
      <p><strong>Curso Superior em Análise e Desenvolvimento de Sistemas</strong> – Uninter (2026 – 2028)</p>
      <p><strong>Curso Técnico em Análise e Desenvolvimento de Sistemas</strong> – SENAI (2022 – 2023)</p>
    </section>

    <section>
      <h2>Idiomas</h2>
      <p><strong>Português:</strong> Nativo</p>
      <p><strong>Inglês:</strong> Intermediário</p>
    </section>

    <section>
      <h2>Tecnologias | Habilidades</h2>
      <p class="techs">
        Java | Spring Boot | Spring Security | Java Swing | REST APIs | API Development | React | React Native |
        TypeScript | JavaScript | HTML | CSS | Tailwind | MySQL | PostgreSQL | SQL | MQTT | TCP/UDP | IoT |
        Real-time Systems | Git | GitHub | Docker | Microserviços | BFF | Desenvolvimento Backend
      </p>
    </section>
  </div>
`;

const resumeCss = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #ffffff;
    color: #111111;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12.5px;
    line-height: 1.38;
  }

  .resume {
    width: 794px;
    min-height: 1123px;
    margin: 0 auto;
    padding: 38px 48px;
    background: #ffffff;
  }

  .resume-header {
    margin-bottom: 20px;
  }

  .resume-header h1 {
    margin: 0 0 10px;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 700;
    color: #111111;
  }

  .resume-header p {
    margin: 0;
    font-size: 12px;
    color: #111111;
    text-align: left;
  }

  section {
    margin-top: 20px;
  }

  h2 {
    margin: 0 0 12px;
    padding-bottom: 7px;
    border-bottom: 1px solid #9ca3af;
    font-size: 17px;
    font-weight: 700;
    color: #111111;
  }

  h3 {
    margin: 0;
    font-size: 13.5px;
    font-weight: 700;
    color: #111111;
  }

  p {
    margin: 0 0 10px;
    text-align: justify;
  }

  ul {
    margin: 8px 0 12px 17px;
    padding: 0;
  }

  li {
    margin-bottom: 7px;
    text-align: justify;
  }

  .experience {
    margin-bottom: 20px;
  }

  .experience-head {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 12px;
  }

  .experience-head p {
    margin: 2px 0 0;
    font-style: italic;
    text-align: left;
  }

  .experience-head span {
    white-space: nowrap;
    font-weight: 700;
    font-style: italic;
    font-size: 12px;
    margin-top: 18px;
  }

  .skills {
    text-align: left;
    margin-top: 8px;
  }

  .techs {
    text-align: left;
  }

  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .resume {
      width: auto;
      min-height: auto;
      margin: 0;
      padding: 38px 48px;
    }

    section,
    .experience {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }
`;

export default function ResumeView() {
  const handleDownloadPDF = () => {
    const printWindow = window.open("", "_blank");

    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <title>Currículo - Anderson José da Luz Júnior</title>
          <style>${resumeCss}</style>
        </head>
        <body>
          ${resumeHtml}
          <script>
            window.onload = function () {
              setTimeout(function () {
                window.print();
              }, 300);
            };
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Meu Currículo</h2>

        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          <Download className="w-4 h-4" />
          Baixar PDF
        </button>
      </div>

      <div className="space-y-8 text-neutral-300">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Anderson José da Luz Júnior
          </h3>
          <p>
            Pato Branco, PR | +55 (46) 99984-8079 | anderson_junior2@hotmail.com
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Resumo</h3>
          <p>
            Desenvolvedor de Software com experiência no desenvolvimento de
            aplicações backend, frontend e sistemas web, voltados para automação
            e monitoramento em tempo real. Atuo na construção, manutenção e
            evolução de plataformas para o setor de segurança eletrônica,
            automação e rastreamento, desenvolvendo integrações com dispositivos
            IoT, integrações entre sistemas, APIs REST e soluções para
            monitoramento de rebanhos bovinos. Trabalho com Java (Spring Boot e
            Swing), React, React Native e MySQL, além da implementação de
            soluções utilizando protocolos como UDP, TCP e MQTT para comunicação
            com dispositivos e equipamentos de campo. Também participo do
            desenvolvimento e manutenção de aplicações web e sites
            institucionais, sempre buscando entregar soluções robustas,
            escaláveis e de fácil utilização.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Experiência</h3>

          <div className="border-l-2 border-purple-500 pl-4 mb-6">
            <div className="flex justify-between gap-4 flex-wrap">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Desenvolvedor Júnior
                </h4>
                <p className="text-purple-400 font-medium">
                  Visioncar | Paraná, Brazil
                </p>
              </div>
              <p className="text-neutral-400 text-sm">03/2024 – Atualmente</p>
            </div>

            <p className="mt-3">
              Atuação no desenvolvimento de sistemas voltados para segurança
              eletrônica, automação, rastreamento veicular e monitoramento de
              rebanhos bovinos, participando da construção, evolução e
              manutenção de plataformas utilizadas em tempo real por clientes e
              dispositivos IoT.
            </p>

            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                Desenvolvimento e manutenção de aplicações backend utilizando
                Java (Spring Boot) e MySQL, implementando APIs REST e
                integrações entre sistemas.
              </li>
              <li>
                Participação na evolução e manutenção de aplicações legadas
                desenvolvidas em Java Swing, realizando correções, implementação
                de novas funcionalidades e melhorias de desempenho.
              </li>
              <li>
                Desenvolvimento de aplicações web e mobile utilizando React e
                React Native, integradas a plataformas de monitoramento e
                automação.
              </li>
              <li>
                Implementação de integrações com dispositivos IoT utilizando
                protocolos UDP, TCP e MQTT, garantindo comunicação confiável
                entre equipamentos e servidores.
              </li>
              <li>
                Desenvolvimento de funcionalidades para sistemas de
                monitoramento de rebanhos bovinos e rastreamento veicular em
                tempo real, realizando processamento e visualização de dados
                provenientes de dispositivos de campo.
              </li>
              <li>
                Desenvolvimento e manutenção dos sites institucionais da
                empresa, criando novas funcionalidades, integrações e melhorias
                na experiência dos usuários.
              </li>
            </ul>

            <p className="text-neutral-400 text-sm mt-3">
              <strong>Skills:</strong> Java, Spring Boot, Java Swing, React,
              React Native, MySQL, REST APIs, UDP/TCP, MQTT, IoT, Git, Real-time
              Systems
            </p>
          </div>

          <div className="border-l-2 border-purple-500 pl-4">
            <div className="flex justify-between gap-4 flex-wrap">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Suporte Técnico
                </h4>
                <p className="text-purple-400 font-medium">
                  Eeco Sistemas | Paraná, Brazil
                </p>
              </div>
              <p className="text-neutral-400 text-sm">05/2023 – 02/2024</p>
            </div>

            <p className="mt-3">
              Atuação no suporte técnico e implantação de sistemas, realizando
              atendimento direto aos clientes, investigação de problemas,
              análise de banco de dados e apoio às integrações da plataforma com
              novos clientes.
            </p>

            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                Atendimento direto aos clientes para resolução de dúvidas,
                suporte operacional e identificação de falhas no sistema.
              </li>
              <li>
                Investigação e validação de bugs reportados pelos usuários,
                reproduzindo cenários e encaminhando soluções junto à equipe de
                desenvolvimento.
              </li>
              <li>
                Realização de ajustes e correções diretamente no banco de dados
                PostgreSQL para resolução de inconsistências operacionais e
                suporte às demandas dos clientes.
              </li>
              <li>
                Participação na implantação e integração da plataforma para
                novos clientes, realizando configurações, validações e
                acompanhamento da entrada em produção.
              </li>
              <li>
                Atuação como elo entre clientes e equipe de desenvolvimento,
                documentando problemas, validando correções e garantindo maior
                qualidade nas entregas.
              </li>
            </ul>

            <p className="text-neutral-400 text-sm mt-3">
              <strong>Skills:</strong> PostgreSQL, SQL, Integração de Sistemas,
              Atendimento ao Cliente, Suporte Técnico, Troubleshooting
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Educação</h3>

          <div className="border-l-2 border-purple-500 pl-4 mb-4">
            <h4 className="text-lg font-semibold text-white">
              Curso Superior em Análise e Desenvolvimento de Sistemas
            </h4>
            <p className="text-purple-400 font-medium">Uninter</p>
            <p className="text-neutral-400 text-sm">2026 – 2028</p>
          </div>

          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-lg font-semibold text-white">
              Curso Técnico em Análise e Desenvolvimento de Sistemas
            </h4>
            <p className="text-purple-400 font-medium">SENAI</p>
            <p className="text-neutral-400 text-sm">2022 – 2023</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Idiomas</h3>
          <p>
            <strong className="text-white">Português:</strong> Nativo
          </p>
          <p>
            <strong className="text-white">Inglês:</strong> Intermediário
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Tecnologias | Habilidades
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "Spring Security",
              "React",
              "React Native",
              "MySQL",
              "PostgreSQL",
              "REST APIs",
              "UDP/TCP",
              "MQTT",
              "IoT",
              "Git",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-neutral-700/50 border border-neutral-600 rounded-lg text-sm"
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
