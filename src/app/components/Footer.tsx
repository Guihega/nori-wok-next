import Link from "next/link";
import { siteConfig } from "@/app/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#0c120f] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3"><img src="/icons/logo.svg" alt="" width="40" height="40" /><div><strong className="tracking-[0.12em]">NORI WOK</strong><p className="mt-1 text-xs text-white/45">Comida oriental preparada al momento</p></div></div>
        <div className="flex flex-wrap gap-5 text-sm font-semibold text-white/65"><a href="#menu" className="hover:text-wasabi">Menú</a><a href="#contacto" className="hover:text-wasabi">Contacto</a><Link href="/aviso-de-privacidad/" className="hover:text-wasabi">Privacidad</Link><Link href="/terminos/" className="hover:text-wasabi">Términos</Link></div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
