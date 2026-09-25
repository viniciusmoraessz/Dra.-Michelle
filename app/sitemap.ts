import type { MetadataRoute } from "next";

const siteUrl = "https://dra-michelleribeiro.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl + "/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: siteUrl + "/politica-de-privacidade", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
