import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});



export const metadata: Metadata = {
  title: "Sukrutha Kerala Initiative - Make a Difference Today",
  description: "Join the Sukrutha Kerala Initiative and contribute to building a better future for Kerala. Your donation directly fuels our efforts to transform communities and create lasting positive change.",
  keywords: "Kerala, donation, charity, community development, social impact, Sukrutha",
  authors: [{ name: "Sukrutha Kerala Initiative" }],
  openGraph: {
    title: "Sukrutha Kerala Initiative - Make a Difference Today",
    description: "Contribute to building a better future for Kerala. Your donation creates lasting positive change in communities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukrutha Kerala Initiative - Make a Difference Today",
    description: "Contribute to building a better future for Kerala. Your donation creates lasting positive change in communities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${poppins.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
