import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-4 py-2 m-0 min-h-screen flex flex-col`}
      >
        {/* Fixed Navbar */}
        <nav className="fixed bottom-0  sm:top-0 md:top-0  lg:bottom-0  h-[60px]  w-full bg-white p-4 z-10">
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-1 pt-16 pb-20">{children}</div>
      </body>
    </html>
  );
}
