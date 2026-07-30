import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// INSTRUÇÃO PARA O DESENVOLVEDOR:
// 1. Substitua a URL na variável SITE_URL pela URL real de produção.
// 2. Altere "NOME DA EMPRESA" e a descrição.
const SITE_URL = "https://www.sitedocliente.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | NOME DA EMPRESA",
    default: "NOME DA EMPRESA | Consultoria Especializada",
  },
  description:
    "Frase de impacto principal que descreve o negócio do cliente. Ideal ter entre 150 e 160 caracteres para não ser cortada no Google.",
  // A tag keywords foi removida por ser obsoleta no SEO moderno.
  authors: [{ name: "Meta Consultoria", url: "https://metaconsultoria.com" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: "NOME DA EMPRESA | Consultoria Especializada",
    description:
      "Frase de impacto principal que descreve o negócio do cliente.",
    siteName: "NOME DA EMPRESA",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Capa Institucional da Empresa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOME DA EMPRESA | Consultoria Especializada",
    description:
      "Frase de impacto principal que descreve o negócio do cliente.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD para o Google entender que o site pertence a uma organização local
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NOME DA EMPRESA",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-21-99999-9999",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Injeção do Schema Markup no local correto */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col font-sans`}>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
