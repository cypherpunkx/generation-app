import type { Metadata } from 'next';
import Link from 'next/link';
import { Lato } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Navbar from '@/components/Navbar';
import './globals.css';

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
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body
        className={`${lato.className} bg-gradient-to-tr from-slate-100 via-slate-200/10 to-white`}
        suppressHydrationWarning={true}
      >
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
            <main>{children}</main>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
