import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { Lato } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Generation',
  description: 'Forum Online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={lato.className}>
        <AntdRegistry>
          <div className="container mx-auto">
            <header className="py-2 inline-block">
              <Link href={'/'}>
                <h6 className="font-black text-lg tracking-widest uppercase text-slate-600">
                  Generation
                </h6>
              </Link>
            </header>
            <Navbar />
            <main className="px-16">{children}</main>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
