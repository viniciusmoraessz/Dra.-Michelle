import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dra-michelleribeiro.vercel.app"),
  title: "LB Odontologia | Cuidado especializado em Niterói",
  description: "LB Odontologia: equipe especializada para o cuidado odontológico de toda a família em Niterói.",
  openGraph: {
    title: "LB Odontologia | Cuidado especializado em Niterói",
    description: "Equipe especializada para o cuidado odontológico de toda a família em Niterói.",
    type: "website",
    locale: "pt_BR",
    url: "https://dra-michelleribeiro.vercel.app",
    images: [{
      url: "https://dra-michelleribeiro.vercel.app/og-image.png",
      width: 1200,
      height: 630,
      alt: "LB Odontologia, clínica odontológica especializada em Niterói",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LB Odontologia | Cuidado especializado em Niterói",
    description: "Equipe especializada para o cuidado odontológico de toda a família em Niterói.",
    images: ["https://dra-michelleribeiro.vercel.app/og-image.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/logo-lb.png",
    shortcut: "/logo-lb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": ["Dentist", "LocalBusiness"], name: "LB Odontologia", description: "Clínica odontológica especializada para toda a família em Niterói.", url: "https://dra-michelleribeiro.vercel.app", telephone: "+55 21 99377-0229", sameAs: ["https://www.instagram.com/lb.odontologia_/"], address: { "@type": "PostalAddress", streetAddress: "R. da Conceição, 125 - Sala 608", addressLocality: "Niterói", addressRegion: "RJ", postalCode: "24020-080", addressCountry: "BR" }, medicalSpecialty: ["Orthodontics", "Pediatric", "Endodontics", "Cosmetic", "Implant"], openingHours: "Mo-Fr by appointment" }) }} /></body>
    </html>
  );
}
