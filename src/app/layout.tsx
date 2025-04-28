import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProgressProviderWrapper } from "./contexts/ProgressContext";
import { CartProvider } from "./contexts/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bem-vindo(a) ao Ecommerce",
  description: "Página inicial do Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProgressProviderWrapper>
          <ClerkProvider localization={ptBR}>
            <CartProvider>
              {children}
            </CartProvider>
          </ClerkProvider>

        </ProgressProviderWrapper>
      </body>
    </html>
  );
}
