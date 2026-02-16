import type { Metadata } from "next";
import { Geist, Geist_Mono,Teko } from "next/font/google";
import "./style/globals.css";
import Link from "next/link";



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight:['300']
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["700"],
})
export const metadata: Metadata = {
  title:"Monster UI - Victor Kiss",
  description: "Explore a energia lendária do Monster Energy Juice Pipeline Punch. Uma mistura perfeita de maracujá, laranja e goiaba inspirada nas ondas épicas de Oahu. Experimente o sabor do Havaí com o combo energético Monster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${teko.variable} ${geistMono.variable} antialiased `}
      >
        {children}

        <footer className="bg-black w-auto text-gray-200 text-center py-4">
          Desenvolvido por <Link href="https://github.com/victor-kiss" target="_blank" rel="noreferrer noopener" className="font-bold text-lime-400">Victor Kiss</Link>
      </footer>
      </body>
    </html>
  );
}
