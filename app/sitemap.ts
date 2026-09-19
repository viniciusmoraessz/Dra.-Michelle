import type { MetadataRoute } from "next";
const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dra-michelle-ribeiro.atlantiscityrp65.chatgpt.site";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
