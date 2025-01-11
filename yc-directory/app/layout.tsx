import type { Metadata } from "next";
// Estilos globales
import "./globals.css";
// Fuentes locales
import { workSans } from "./fonts"; //Se importa la fuente local de forma indiviudal

// La Metadata Global
export const metadata: Metadata = {
  title: "Yc Directory",
  description: "Pitch, Vote and Grow with YC Directory",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={ workSans.variable } //Se aplica la fuente local
      >
        <h2>Layout Raiz</h2>
        {/* Se pasan las page por props childrens */}
        {children}

      </body>
    </html>
  );
}
