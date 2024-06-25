import Section from "./section";
import { Mail, Smartphone, MapPin } from "lucide-react"

export default function AboutMe(){
    return(
        <Section className="flex items-center flex-col absolute w-[450px] h-screen top-24">
          <img src="https://github.com/lucas-g-silva.png"
            alt="Foto de Perfil"
            className="w-64 h-64 rounded-full relative bottom-14 border border-white/10"
          />
          <div className="flex items-center flex-col gap-3 relative bottom-4">
            <h1 className="text-3xl text-center leading-normal font-semibold"> Lucas Gabriel <br /> Moser da Silva</h1>
            <p>21/11/2008</p>
            <div className="space-y-3 mt-4">
              <p className="flex gap-3"><Mail size={24} color="white" />lucas.moserdasilva@gmail.com</p>
              <a rel='noopener' title='WhatsApp' target="_blank" href="https://wa.me/5547933819181" className="flex gap-3 hover:underline"><Smartphone size={24} color="white" />+55 47 93381-9181</a>
              <a rel='noopener' title='Maps' target="_blank" href="https://www.google.com/maps/place/Rodeio,+SC,+89136-000/@-26.9218178,-49.3701739,14z/data=!3m1!4b1!4m6!3m5!1s0x94de5555f56b50db:0x717991712fffe439!8m2!3d-26.9223775!4d-49.3678851!16s%2Fm%2F09rt1ff?entry=ttu" className="flex gap-3 hover:underline"><MapPin size={24} color="white" />Rodeio-SC</a>
            </div>
          </div>
        </Section>
    )
}