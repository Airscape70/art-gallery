import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
