import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Les Jardins d'Adrien | Paysagisme et entretien",
  description:
    "Les Jardins d'Adrien propose la création et l'entretien d'espaces verts pour sublimer votre extérieur.",
  keywords: [
    "paysagiste",
    "entretien jardin",
    "aménagement paysager",
    "Les Jardins d'Adrien",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
