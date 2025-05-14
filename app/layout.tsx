import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { StyledComponentsRegistry } from '@/lib/styled-components';

import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Great Guestbook of the Internet',
  description: 'Created by IT Pulse Mikołaj Pęcak',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
