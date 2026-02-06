import React from 'react';
import '../styles/index.css';
import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';

const roboto = Roboto({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fredrik Forsmo',
  description: 'Full-stack developer and open-sourcerer.',
  openGraph: {
    title: 'Fredrik Forsmo',
    description: 'Full-stack developer and open-sourcerer.',
    images: 'https://frozzare.com/frozzare.jpg',
  },
  twitter: {
    title: 'Fredrik Forsmo',
    description: 'Full-stack developer and open-sourcerer.',
    images: 'https://frozzare.com/frozzare.jpg',
    card: 'summary',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${roboto.className} bg-f-blue`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
