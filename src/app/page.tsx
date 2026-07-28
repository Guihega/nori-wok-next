import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import MenuSection from "@/app/components/MenuSection";
import Experience from "@/app/components/Experience";
import About from "@/app/components/About";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import CartDrawer from "@/app/components/CartDrawer";
import MobileCartBar from "@/app/components/MobileCartBar";
import { siteConfig } from "@/app/lib/config";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  image: `${siteConfig.url}/images/hero-bowl.svg`,
  url: siteConfig.url,
  telephone: siteConfig.phoneDisplay,
  priceRange: "$$",
  servesCuisine: ["Comida oriental", "Japonesa", "China", "Coreana"],
  acceptsReservations: false,
  menu: `${siteConfig.url}/#menu`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressCountry: "MX",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "13:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "14:00", closes: "21:00" },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      <Navbar />
      <main id="contenido">
        <Hero />
        <section className="bg-nori py-5 text-white" aria-label="Características del servicio">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[['Ingredientes', 'seleccionados cada día'], ['Wok real', 'sabor intenso y textura'], ['Pedido simple', 'directo por WhatsApp'], ['Empaque seguro', 'ideal para llevar']].map(([title, text]) => <p key={title}><strong className="block text-sm">{title}</strong><span className="text-xs text-white/55">{text}</span></p>)}
          </div>
        </section>
        <MenuSection />
        <Experience />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <MobileCartBar />
    </>
  );
}
