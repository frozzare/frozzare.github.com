import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com/" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `WebFont.load({ google: { families: ['Roboto&display=swap'] } });`,
            }}
          />
        </body>
      </Html>
    );

export default Document;