import Document, { Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  static async getInitialProps (ctx) {
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleAnalytics () {
    return {
      __html: `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('set', 'anonymizeIP', true);
        ga('create','UA-20991800-2','auto');
        ga('send','pageview');`
    };
  }

  render () {
    const { isProduction } = this.props;
    return (
      <html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='dns-prefetch' href='//fonts.googleapis.com/' />
          <link rel='dns-prefetch' href='//www.google-analytics.com' />
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
          <link href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" rel="stylesheet" crossOrigin="anonymous" />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='/sitemap.xml'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/site.webmanifest' />
          <link rel='shortcut icon' href='' />
          <meta name='description' content='' />
          <meta property='og:title' content='' />
          <meta property='og:description' content='' />
          <meta property='og:image' content='' />
          <meta name='twitter:title' content='' />
          <meta name='twitter:description' content='' />
          <meta name='twitter:image' content='' />
          <meta name='twitter:card' content='summary' />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
            </>
          )}
        </body>
      </html>
    );
  }
}
