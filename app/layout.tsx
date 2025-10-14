import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'VoltSense — Smart Home Energy Monitor',
  description: 'Control your energy. Save every month.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>        
        <header className="border-b bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2 focus-ring" aria-label="VoltSense home">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2l-2.5 7H15L9 22l2.5-7H9l3-13z" fill="hsl(var(--color-primary))"/>
              </svg>
              <span className="text-lg font-semibold">VoltSense</span>
            </Link>
            <nav aria-label="Primary">
              <ul className="flex items-center gap-6">
                <li><Link className="hover:opacity-80 focus-ring" href="/features">Features</Link></li>
                <li><Link className="hover:opacity-80 focus-ring" href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t">
          <div className="container py-10 text-sm text-gray-600">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} VoltSense. All rights reserved.</p>
              <ul className="flex gap-4">
                <li><Link href="/features" className="hover:underline focus-ring">Features</Link></li>
                <li><Link href="/contact" className="hover:underline focus-ring">Contact</Link></li>
                <li><a href="https://example.com/privacy" className="hover:underline focus-ring">Privacy</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
