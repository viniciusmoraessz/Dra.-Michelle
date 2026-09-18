"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, AtSign as Instagram, Check, MapPin, Menu, MessageCircle,
  Phone, Quote, Sparkles, Star, Stethoscope, X
} from "lucide-react";
import { useState } from "react";

const instagram = "https://www.instagram.com/dra_michelle.ribeiro/";
const whatsapp = "https://wa.me/5598970205892?text=Ol%C3%A1%2C%20Dra.%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

const treatments = [
  ["01", "Implantodontia", "Planejamento seguro para devolver função, conforto e confiança ao sorrir."],
  ["02", "Estética do sorriso", "Harmonia, naturalidade e detalhes que fazem o sorriso ter a sua identidade."],
  ["03", "Clareamento dental", "Protocolos personalizados para revelar luminosidade com cuidado."],
  ["04", "Lentes de contato", "Transformações sutis para um resultado elegante e duradouro."],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay }}>{children}</motion.div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparison, setComparison] = useState(50);

  return (
    <main className="overflow-x-hidden bg-[#fbfdfd] text-[#15355b]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#0d72db]/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Início">
            <span className="relative h-11 w-11 overflow-hidden rounded-full border border-[#d6b16d]/50 bg-white"><Image src="/logo-mr.png" alt="Monograma MRS" fill className="object-cover" sizes="44px" /></span>
            <span className="leading-tight"><b className="block text-[15px]">Dra. Michelle</b><span className="text-xs text-[#54708d]">Ribeiro da Silva</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#38536e] lg:flex">
            <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#tratamentos">Tratamentos</a><a href="#localizacao">Localização</a><a href="#contato">Contato</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#f06c53] px-5 py-3 text-sm font-semibold text-white sm:block">Agendar consulta</a>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-[#eaf5ff] text-[#0d72db] lg:hidden" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#0d72db]/10 bg-white px-5 py-5 lg:hidden"><a className="block py-3" href="#inicio" onClick={() => setMenuOpen(false)}>Início</a><a className="block py-3" href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a className="block py-3" href="#tratamentos" onClick={() => setMenuOpen(false)}>Tratamentos</a><a className="block py-3" href="#localizacao" onClick={() => setMenuOpen(false)}>Localização</a><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-3 block rounded-full bg-[#f06c53] px-5 py-3 text-center text-sm font-semibold text-white">Agendar consulta</a></nav>}
      </header>

      <section id="inicio" className="relative isolate min-h-[800px] overflow-hidden bg-[#eaf6ff] pt-[76px]">
        <div className="absolute left-1/2 top-28 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#8dd3ff]/35 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center px-5 pb-16 pt-16 md:px-8 lg:min-h-[720px] lg:grid-cols-[.92fr_1.08fr] lg:pt-6">
          <Reveal className="relative z-10 max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0d72db]/15 bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0d72db]"><Sparkles size={14} /> Implantodontia & Estética</div>
            <h1 className="text-[3.45rem] font-black leading-[.94] tracking-tight text-[#123964] sm:text-7xl lg:text-[5.75rem]">Você vai voltar <span className="text-[#0d72db]">a sorrir.</span></h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-[#52708d]">Tratamentos que unem precisão, tecnologia e um olhar sensível para o seu sorriso voltar a fazer parte da sua história.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f06c53] px-6 py-4 font-bold text-white shadow-lg shadow-[#f06c53]/25"><MessageCircle size={19} /> Fale no WhatsApp</a><a href="#localizacao" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b5d7ef] bg-white px-6 py-4 font-bold text-[#0d72db]"><MapPin size={19} /> Ver localização</a></div>
          </Reveal>
          <Reveal delay={0.15} className="relative mt-2 h-[430px] sm:h-[520px] lg:mt-0 lg:h-[650px]">
            <p className="pointer-events-none absolute inset-x-0 top-[18%] text-center text-5xl font-black leading-none text-[#0d72db]/10 sm:text-7xl lg:text-8xl">SORRISO<br />ÚNICO</p>
            <motion.div animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0"><Image src="/hero-tooth.png" alt="Dente 3D com splash azul" fill priority className="object-contain" sizes="(max-width: 1024px) 100vw, 55vw" /></motion.div>
            <div className="absolute right-0 top-12 rounded-2xl bg-white/90 p-3 shadow-xl"><div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#fff0eb] text-[#f06c53]"><Star size={16} fill="currentColor" /></span><span className="text-xs font-bold">Atendimento<br />humanizado</span></div></div>
          </Reveal>
        </div>
        <div className="relative z-10 border-t border-[#0d72db]/10 bg-white/75"><div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-[#0d72db]/10 px-5 md:px-8"><Stat number="10+" label="anos cuidando de sorrisos" /><Stat number="1000+" label="pacientes atendidos" /><Stat number="100%" label="plano individualizado" /></div></div>
      </section>

      <section id="sobre" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:py-32">
        <Reveal className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#dceffc] sm:min-h-[500px]">
          <Image src="/dra-michelle.png" alt="Dra. Michelle Ribeiro da Silva em seu consultório" fill className="object-cover object-[62%_35%]" sizes="(max-width: 1024px) 100vw, 45vw" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#123b67]/85 via-[#123b67]/25 to-transparent p-8 pt-28 text-white"><div className="flex items-end justify-between gap-4"><p className="text-2xl font-black leading-none">Dra. Michelle<br />Ribeiro da Silva</p><span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/60 bg-white"><Image src="/logo-mr.png" alt="Monograma MRS" fill className="object-cover" sizes="48px" /></span></div></div>
        </Reveal>
        <Reveal delay={0.1}><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f06c53]">Conheça a Dra. Michelle</p><h2 className="mt-4 max-w-xl text-4xl font-black leading-tight text-[#163d66] sm:text-5xl">Técnica precisa. Cuidado que se sente.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-[#58728e]">Cada tratamento começa com escuta e planejamento. A Dra. Michelle atua com uma odontologia que valoriza saúde, naturalidade e a confiança de quem escolhe voltar a sorrir.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><Credential title="Formação contínua" text="Mestranda e doutoranda pela São Leopoldo Mandic." /><Credential title="Especialização" text="Implantodontia pelo IOA." /></div><div className="mt-8 flex flex-wrap gap-3">{["Planejamento digital", "Escuta atenta", "Naturalidade", "Segurança"].map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf6ff] px-3 py-2 text-sm font-semibold text-[#286193]"><Check size={15} /> {item}</span>)}</div></Reveal>
      </section>

      <section id="tratamentos" className="bg-[#123b67] py-24 text-white lg:py-32"><div className="mx-auto max-w-7xl px-5 md:px-8"><Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7ed0ff]">Especialidades</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">Seu sorriso, em boas mãos.</h2></div><p className="max-w-sm text-blue-100">Protocolos individualizados para que cada decisão faça sentido para você.</p></Reveal><div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-2">{treatments.map(([number, title, text], i) => <Reveal key={title} delay={i * 0.06} className="bg-[#123b67] p-7 transition hover:bg-[#174a7d] sm:p-9"><div className="flex items-start justify-between"><span className="text-sm font-bold text-[#7ed0ff]">{number}</span><ArrowRight className="text-[#f98b74]" /></div><h3 className="mt-12 text-2xl font-bold">{title}</h3><p className="mt-3 max-w-sm leading-relaxed text-blue-100">{text}</p></Reveal>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
        <Reveal><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f06c53]">Pacientes felizes</p><h2 className="mt-4 text-4xl font-black text-[#163d66] sm:text-5xl">Sorrisos que contam histórias.</h2></Reveal>
        <Reveal delay={0.1} className="mt-10">
          <div className="relative mx-auto aspect-[4/5] max-w-xl overflow-hidden rounded-2xl bg-[#dceffc] shadow-xl shadow-[#0d72db]/10 sm:aspect-[16/10]">
            <Image src="/patient-after.png" alt="Resultado depois do tratamento odontológico" fill className="object-cover object-[center_30%]" sizes="(max-width: 640px) 100vw, 600px" />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: comparison + "%" }}>
              <div className="relative h-full w-[600px] max-w-none sm:w-[640px]"><Image src="/patient-before.png" alt="Antes do tratamento odontológico" fill className="object-cover object-[center_30%]" sizes="(max-width: 640px) 100vw, 600px" /></div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(21,53,91,.18)]" style={{ left: comparison + "%" }}>
              <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-[#0d72db] text-xs font-black text-white">↔</span>
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-[#123b67]/85 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-white">Antes</span>
            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#0d72db]">Depois</span>
            <input aria-label="Arraste para comparar antes e depois" className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0" type="range" min="0" max="100" value={comparison} onChange={(event) => setComparison(Number(event.target.value))} />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-[#5c7790]">Arraste para comparar o antes e o depois.</p>
        </Reveal>
      </section>

      <section className="bg-[#fff6f2] py-24 lg:py-32"><div className="mx-auto max-w-4xl px-5 text-center md:px-8"><Reveal><Quote className="mx-auto text-[#f06c53]" size={35} fill="currentColor" /><blockquote className="mt-7 text-3xl font-black leading-tight text-[#163d66] sm:text-5xl">“O primeiro passo é entender que seu sorriso pode ser cuidado com calma, tecnologia e verdade.”</blockquote><p className="mt-7 text-sm font-bold text-[#f06c53]">DEPOIMENTOS REAIS EM BREVE</p></Reveal></div></section>

      <section id="localizacao" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:py-32"><Reveal><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f06c53]">Localização</p><h2 className="mt-4 text-4xl font-black text-[#163d66] sm:text-5xl">Um espaço para cuidar de você.</h2><p className="mt-5 max-w-md text-lg leading-relaxed text-[#58728e]">O endereço completo será adicionado assim que o consultório for confirmado.</p><div className="mt-8 space-y-5"><Contact icon={<MapPin />} title="Consultório" text="Endereço em breve" /><Contact icon={<Stethoscope />} title="Atendimento" text="Segunda a sexta, com horário agendado" /><Contact icon={<Phone />} title="WhatsApp" text="+55 98 97020-5892" /></div></Reveal><Reveal delay={0.1} className="relative min-h-[400px] overflow-hidden rounded-2xl bg-[#d8ecf8]"><div className="absolute inset-0 opacity-50 [background-image:linear-gradient(#78b6dd_1px,transparent_1px),linear-gradient(90deg,#78b6dd_1px,transparent_1px)] [background-size:42px_42px]" /><div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#f06c53] text-white shadow-xl"><MapPin size={31} fill="currentColor" /></div><div className="absolute bottom-5 left-5 rounded-xl bg-white/90 p-4 shadow-lg"><p className="font-bold text-[#163d66]">Mapa do consultório</p><p className="mt-1 text-sm text-[#54708d]">Aguardando endereço para incorporação</p></div></Reveal></section>

      <section id="contato" className="mx-5 mb-5 overflow-hidden rounded-[2rem] bg-[#0d72db] px-6 py-16 text-white md:mx-8 md:px-12 lg:mx-auto lg:max-w-7xl lg:px-20 lg:py-20"><Reveal><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a8e0ff]">Seu próximo passo</p><div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-6xl">Agende sua avaliação e volte a sorrir com confiança.</h2><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#f06c53] px-7 py-4 font-bold text-white"><MessageCircle size={20} /> Falar no WhatsApp</a></div></Reveal></section>

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-10 text-sm text-[#5c7790] md:flex-row md:items-end md:px-8"><div><p className="font-bold text-[#163d66]">Dra. Michelle Ribeiro da Silva</p><p className="mt-1">Implantodontia e Estética do Sorriso</p></div><a href={instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-[#0d72db]"><Instagram size={18} /> @dra_michelle.ribeiro</a><p>© 2026 Dra. Michelle Ribeiro.</p></footer>
    </main>
  );
}

function Stat({ number, label }: { number: string; label: string }) { return <div className="px-3 py-6 text-center sm:px-7"><p className="text-2xl font-black text-[#0d72db] sm:text-3xl">{number}</p><p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-[#63819a] sm:text-xs">{label}</p></div>; }
function Credential({ title, text }: { title: string; text: string }) { return <div className="rounded-2xl border border-[#d6e8f4] bg-white p-5"><p className="font-bold text-[#163d66]">{title}</p><p className="mt-2 text-sm leading-relaxed text-[#5c7790]">{text}</p></div>; }
function Contact({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="flex items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#eaf6ff] text-[#0d72db]">{icon}</span><div><p className="font-bold text-[#163d66]">{title}</p><p className="mt-0.5 text-sm text-[#5c7790]">{text}</p></div></div>; }
