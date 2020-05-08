import LatestRepos from '../components/latestRepos';
import Link from '../components/link';
import Head from 'next/head';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default () => (
  <>
    <Head>
      <title>Fredrik Forsmo</title>
      <meta name='description' content='Full-stack developer, tech maker and open source ninja.' />
      <meta property='og:title' content='Fredrik Forsmo' />
      <meta property='og:description' content='Full-stack developer, tech maker and open source ninja.' />
      <meta property='og:image' content='https://frozzare.com/frozzare.jpg' />
      <meta name='twitter:title' content='Fredrik Forsmo' />
      <meta name='twitter:description' content='Full-stack developer, tech maker and open source ninja.' />
      <meta name='twitter:image' content='https://frozzare.com/frozzare.jpg' />
      <meta name='twitter:card' content='summary' />
    </Head>
    <div id="home" className="container mx-auto">
      <div className="pt-20">
        <div className="flex flex-wrap content-center min-h-screen">
          <div className="w-full flex justify-center">
            <div className="h-48 w-48 lg:h-64 lg:w-64 lg:pin-l lg:pin-t mt-10 mb-10 lg:mt-0 lg:-mt-32 mb-0 lg:mb-12">
              <LazyLoadImage src='/frozzare.jpg' alt="Fredrik Forsmo" className="rounded h-48 w-48 lg:h-64 lg:w-64" />
            </div>
          </div>
          <div className="w-11/12 lg:w-2/4 m-auto">
            <h1 className="text-6xl pb-5 text-center lg:text-left">Hello! 👋</h1>
            <p className="text-2xl">I'm Fredrik Forsmo, full-stack developer, tech maker and open source ninja and focusing on JavaScript and Go. I'm <Link to='https://twitter.com/frozzare'>@frozzare</Link> on Twitter.</p>
          </div>
        </div>
      </div>
    </div>
    <LatestRepos />
  </>
);
