import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "My Personal Portfolio",
  description: "Created by Next.js + Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='max-w-3xl mx-auto py-10'>
        <header>
          <Link
            href='/'
            className='bg-gradient-to-r to-purple-700 from-blue-900 bg-clip-text text-transparent text-lg font-bold'
          >
            Nasir
          </Link>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  );
}
