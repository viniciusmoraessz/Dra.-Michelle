import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dra-michelle-ribeiro.atlantiscityrp65.chatgpt.site"),
  title: "Dra. Michelle Ribeiro | Implantodontia e Estética do Sorriso",
  description: "Implantodontia e estética do sorriso em Ponta D'areia, São Luís, com técnica, tecnologia e cuidado humano.",
  openGraph: {
    title: "Dra. Michelle Ribeiro | Implantodontia e Estética do Sorriso",
    description: "Implantodontia e estética do sorriso em Ponta D'areia, São Luís, com técnica, tecnologia e cuidado humano.",
    type: "website",
    locale: "pt_BR",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Dra. Michelle Ribeiro, especialista em implantodontia e estética do sorriso",
    }],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Dentist", name: "Dra. Michelle Ribeiro da Silva", telephone: "+55 98 97020-5892", address: { "@type": "PostalAddress", streetAddress: "Edifício Tech Office - Av. dos Holandeses, 06", addressLocality: "São Luís", addressRegion: "MA", addressCountry: "BR" }, openingHours: "Mo-Fr by appointment" }) }} /></body>
    </html>
  );
}
