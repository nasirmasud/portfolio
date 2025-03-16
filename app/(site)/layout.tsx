import { getPages } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "My Personal Portfolio",
  description: "Created by Next.js + Sanity",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //get all pages
  const pages = await getPages();

  return (
    <html lang='en'>
      <body className='max-w-full mx-auto py-10 px-10'>
        <header className='flex items-center justify-between'>
          <Link
            href='/'
            className='bg-gradient-to-r to-purple-700 from-blue-900 bg-clip-text text-transparent text-lg font-bold'
          >
            Nasir
          </Link>

          <div className='flex items-center gap-5 text-sm text-gray-500'>
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className='hover:cursor-pointer hover:text-gray-100'
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  );
}
