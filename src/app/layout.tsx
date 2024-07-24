import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

const titilium = Titillium_Web({weight: ['300', '400', '600', '700'], subsets: ['latin']});

export const metadata: Metadata = {
  title: "ArtGallery",
  description: "ArtGallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titilium.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
