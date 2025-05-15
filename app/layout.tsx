import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import { StyledComponentsRegistry } from '@/lib/styled-components';
import { theme } from '@/lib/mui';
import { ReactQueryProvider } from '@/lib/react-query';
import { Header } from '@/components';

import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Great Guestbook of the Internet',
  description: 'Created by IT Pulse Mikołaj Pęcak',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={geist.className}>
        <NextIntlClientProvider>
          <StyledComponentsRegistry>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <ReactQueryProvider>
                  <Header />
                  {children}
                </ReactQueryProvider>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
