import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  weight: ['700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Caregiver Links",
  description: "Caring for Your Loved Ones Like They're Our Own.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-602px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
