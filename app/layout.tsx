import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sukrutha - Transforming Kerala",
  description:
    "Join us in our mission to transform Kerala through community-driven initiatives and sustainable development",
  icons: {
    icon: "/dp-150x150.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lg:h-full">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        <Toaster position="top-right" />
        <Navbar />
        {children}
        <footer className="w-full bg-gray-100 mt-12 border-t">
          <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left side */}
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Sukrutha Keralam. All rights
              reserved.
            </p>

            {/* Right side (links) */}
            <div className="flex space-x-6">
              <Link
                href="/terms-and-conditions"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
