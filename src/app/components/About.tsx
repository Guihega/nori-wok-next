export default function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-cream py-24 dark:bg-[#101612]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-chili">Una cocina cercana</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-ink sm:text-5xl dark:text-white">Sabores de Asia, hechos para tu día.</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-ink/70 dark:text-white/70">Nori Wok nace con una idea sencilla: ofrecer comida oriental accesible, fresca y fácil de pedir. Nuestra carta reúne recetas conocidas y combinaciones propias, siempre con una presentación limpia y una atención directa.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[['100%', 'preparado al momento'], ['6+', 'opciones principales'], ['7 días', 'de servicio semanal']].map(([value, label]) => (
              <div key={value} className="rounded-3xl bg-white p-6 shadow-sm dark:bg-white/5"><strong className="block text-3xl text-chili">{value}</strong><span className="mt-2 block text-sm text-ink/60 dark:text-white/60">{label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
