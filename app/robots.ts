import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Substitua pela URL final de produção do cliente
  const baseUrl = "https://www.sitedocliente.com.br";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Adicione aqui rotas que o Google NÃO deve indexar
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
