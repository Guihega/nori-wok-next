import About from "@/app/components/About";
import CartDrawer from "@/app/components/CartDrawer";
import Contact from "@/app/components/Contact";
import Experience from "@/app/components/Experience";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import MenuSection from "@/app/components/MenuSection";
import MobileCartBar from "@/app/components/MobileCartBar";
import Navbar from "@/app/components/Navbar";
import ServiceHighlights from "@/app/components/ServiceHighlights";
import Testimonials from "@/app/components/Testimonials";
import { siteConfig } from "@/app/lib/config";
import { withBasePath } from "@/app/lib/paths";

const publicSiteUrl = new URL(
  withBasePath("/"),
  siteConfig.url,
).toString();

const heroImageUrl = new URL(
  withBasePath("/images/hero-bowl.svg"),
  siteConfig.url,
).toString();

const menuUrl = new URL(
  "#menu",
  publicSiteUrl,
).toString();

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  image: heroImageUrl,
  url: publicSiteUrl,
  telephone: siteConfig.phoneDisplay,
  priceRange: "$$",
  servesCuisine: [
    "Comida oriental",
    "Japonesa",
    "China",
    "Coreana",
  ],
  acceptsReservations: false,
  menu: menuUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressCountry: "MX",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "13:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "14:00",
      closes: "21:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            restaurantSchema,
          ),
        }}
      />

      <Navbar />

      <main id="contenido">
        <Hero />
        <ServiceHighlights />
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