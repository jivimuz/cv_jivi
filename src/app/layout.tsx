import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "../component/navbarComponent";
import { ThemeProvider } from "next-themes";
import Footer from "@/component/footerComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jivi Muzaqi Guntur",
  description: "Just a simple portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/icon.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <NavbarComponent />
          <div style={{ margin: "20px" }}>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
