import type { Metadata } from "next";
import { Inter, Noto_Serif_Malayalam } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerifMalayalam = Noto_Serif_Malayalam({
  variable: "--font-noto-serif-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "പണ്ട് പണ്ട് ഒരിടത്ത്… | Malayalam Stories",
  description: "Stories written in Malayalam. Some imagined. Some remembered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifMalayalam.variable} antialiased scroll-smooth`}>
      <body>
        <div className="noise-overlay"></div>
        <div className="vignette-overlay"></div>
        {children}
      </body>
    </html>
  );
}
