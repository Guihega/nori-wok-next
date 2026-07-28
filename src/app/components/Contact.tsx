import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/app/lib/config";

export default function Contact() {
  const contactItems = [
    { icon: MapPin, title: "Dirección", text: siteConfig.address },
    { icon: Clock3, title: "Horario", text: `${siteConfig.schedule.weekdays} · ${siteConfig.schedule.sunday}` },
    { icon: Mail, title: "Correo", text: siteConfig.email },
  ];

  return (
    <section id="contacto" className="scroll-mt-24 bg-chili py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-8">
        <div><p className="text-xs font-black uppercase tracking-[0.2em] text-white/65">Visítanos</p><h2 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl">Tu próximo antojo empieza aquí.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-white/75">Confirma disponibilidad, personaliza tu pedido y recibe atención directa por WhatsApp.</p><a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-black text-chili transition hover:-translate-y-1 hover:shadow-xl"><MessageCircle size={20} /> Escribir por WhatsApp</a></div>
        <div className="space-y-3">
          {contactItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-chili"><Icon size={20} /></span><div><strong>{title}</strong><p className="mt-1 text-sm leading-6 text-white/70">{text}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
