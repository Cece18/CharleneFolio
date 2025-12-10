import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Quicksand } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-quicksand',
});

export const metadata = {
  title: "Charles's Site",
  description: "My personal portfolio website.",
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${quicksand.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
