const testimonials = [
  ["El wok llegó caliente, con buena porción y los vegetales todavía crujientes. Repetiría sin pensarlo.", "Mariana R."],
  ["El proceso por WhatsApp es muy cómodo. Pedí, confirmé y pasé a recoger sin esperar.", "Daniel C."],
  ["El ramen tiene muy buen sabor y el empaque llegó perfecto. Excelente opción para cenar.", "Alejandra M."],
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 dark:bg-[#131b16]" aria-labelledby="opiniones-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center"><p className="text-xs font-black uppercase tracking-[0.2em] text-chili">Lo que dicen</p><h2 id="opiniones-title" className="mt-4 text-4xl font-black tracking-[-0.035em] text-ink sm:text-5xl dark:text-white">Se siente fresco. Sabe mejor.</h2></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map(([quote, author]) => (
            <blockquote key={author} className="rounded-[2rem] border border-ink/5 bg-rice p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-gold" aria-label="5 de 5 estrellas">★★★★★</div>
              <p className="mt-5 text-lg leading-8 text-ink/75 dark:text-white/75">“{quote}”</p>
              <footer className="mt-6 font-black text-ink dark:text-white">— {author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
