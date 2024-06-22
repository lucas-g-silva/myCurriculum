import Header from "./components/header"
import {Mail, Smartphone, MapPin} from "lucide-react"

export default function Home() {
  return (
    <div className="w-screen bg-gradient-to-t from-zinc-900 to-zinc-800 flex flex-col">
      <Header />
      <main className="flex p-10 pt-20 h-screen">
        <section className="flex items-center flex-col relative w-[400px] h-screen bg-white bg-opacity-5 backdrop-blur-md rounded-[40px] top-20 text-white border border-white/10">
          <img src="https://github.com/lucas-g-silva.png"
            alt="Foto de Perfil"
            className="w-64 h-64 rounded-full relative bottom-10 border border-white/10"
          />
          <div className="flex items-center flex-col gap-3 relative bottom-4">
            <h1 className="text-3xl text-center leading-normal font-semibold">Lucas Gabriel <br /> Moser da Silva</h1>
            <p>21/11/2008</p>
            <div className="space-y-3 mt-4">
              <p className="flex gap-3"><Mail size={24} color="white"/>lucas.moserdasilva@gmail.com</p>
              <a rel='noopener' title='WhatsApp' target="_blank" href="https://wa.me/5547933819181" className="flex gap-3"><Smartphone size={24} color="white"/>+55 47 93381-9181</a>
              <p className="flex gap-3"><MapPin size={24} color="white"/>Rodeio-SC</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
