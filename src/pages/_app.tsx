import React from 'react';
import '../styles/index.css';
import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app';

const roboto = Roboto({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <main className={roboto.className}>
    <Component {...pageProps} />
  </main>
);

export default App;
