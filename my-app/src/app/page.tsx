import AboutMe from "./components/aboutMe";
import Header from "./components/header"
import Section from "./components/section";
import { BookMarked, BriefcaseBusiness, School, Link } from "lucide-react"

import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-zinc-900 to-zinc-800 flex flex-col overflow-y-auto screen">
      <Header />
      <main className="flex pr-10 pl-10 h-screen gap-10">
        <AboutMe />
        <div className="flex-auto pr-4 pl-[500px] mt-24 space-y-6 scroll">
          <Section className="w-full">
            <h1 className="text-2xl font-semibold flex gap-4 items-center mb-3"><School size={32} color="white" />Formação Escolar</h1>
            <div className={font.className + " text-lg font-light flex items-center justify-between"}>
              <div>
                <p>Cetisa - Centro Educacional Timbó Ltda.</p>
                <p>Ensino Fundamental (9º Ano)</p>
                <p>Data de término (previsão): novembro de 2024 </p>
              </div>
              <img className="w-20" src="https://cetisa.com.br/wp-content/uploads/2023/10/logo-Footer.png" alt="Logo Cetisa" />
            </div>
          </Section>
          <Section className="w-full">
            <h1 className="text-2xl font-semibold flex gap-4 items-center mb-3"><BriefcaseBusiness size={32} color="white" />Experiência Profissional</h1>
            <div className={font.className + " text-lg font-light flex items-center justify-between"}>
              <div>
                <p className="font-bold">Papelão Timbó - Menor Aprendiz</p>
                <p>Aprendizagem Industrial - Assistente Técnico em Tecnologia da Informação - SENAI</p>
                <p>Data de entrada: janeiro de 2023</p>
                <p>Data de saída: dezembro de 2023</p>
                <a rel='noopener' title='Certificado TI' target="_blank" className="flex gap-1 items-center mt-1 font-semibold underline text-blue-400" href="https://sgn.sesisenai.org.br/arquivos/certificacao/94/0a/3f/940a3f41f22405012dfff030d98a5ffb/pfx7155375780986462638sfx.pdf"><Link size={16} /> Certificado</a>
                <p className="font-bold mt-4">SF Esquadrias de Madeiras Ltda - Menor Aprendiz</p>
                <p>Aprendizagem Industrial - Aprendizagem Industrial em Programador de Sistemas da Informação - SENAI</p>
                <p>Data de entrada: janeiro de 2024</p>
                <p>Data de saída (previsão): dezembro de 2024</p>
              </div>
            </div>
          </Section>
          <Section className="w-full">
            <h1 className="text-2xl font-semibold flex gap-4 items-center mb-3"><BookMarked size={32} color="white" />Cursos adicionais</h1>
          </Section>
        </div>
      </main>
    </div>
  );
}
