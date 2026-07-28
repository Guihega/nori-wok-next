import { ArrowRight } from "lucide-react";

export default function Experience() {
  const steps = [
    ["01", "Elige", "Filtra el menú y agrega tus platillos."],
    ["02", "Confirma", "Envía el pedido preparado por WhatsApp."],
    ["03", "Disfruta", "Recoge en sucursal o solicita entrega."],
  ];

  return (
    <section id="experiencia" className="scroll-mt-24 bg-nori py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <img src="/images/wok-scene.svg" alt="Cocinero preparando comida oriental en un wok" width="760" height="650" loading="lazy" className="w-full rounded-[2.5rem] bg-white/5 shadow-2xl" />
          <div className="absolute -bottom-6 left-6 rounded-3xl bg-rice p-5 text-ink shadow-soft"><strong className="block text-lg">Hecho al fuego</strong><span className="text-sm text-ink/60">No recalentamos: cocinamos.</span></div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-wasabi">Nuestra diferencia</p>
          <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">Rápido no tiene que significar genérico.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Trabajamos con preparaciones cortas, ingredientes visibles y una carta enfocada para cocinar rápido sin sacrificar sabor ni consistencia.</p>
          <ol className="mt-9 space-y-4">
            {steps.map(([number, title, description]) => (
              <li key={number} className="grid grid-cols-[56px_1fr] items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wasabi text-sm font-black text-nori">{number}</span>
                <div><strong className="text-lg">{title}</strong><p className="mt-1 text-sm text-white/60">{description}</p></div>
              </li>
            ))}
          </ol>
          <a href="#menu" className="mt-8 inline-flex items-center gap-2 font-black text-wasabi hover:gap-3">Armar mi pedido <ArrowRight size={19} /></a>
        </div>
      </div>
    </section>
  );
}
