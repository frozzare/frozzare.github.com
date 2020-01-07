import LatestRepos from './components/latestRepos';
import Link from './components/link';

export default () => (
  <div>
    <div className="flex flex-wrap content-center lg:p-10 min-h-screen">
      <div className="w-full flex justify-center">
        <img src="https://frozzare.com/static/frozzare.jpg" className="rounded h-48 w-48 lg:pin-l lg:pin-t mt-10 lg:mt-0 lg:-mt-32 mb-0 lg:mb-12" />
      </div>
      <div className="w-full p-10 lg:p-0 lg:w-3/4 m-auto">
        <h1 className="text-6xl pb-5">Hello! 👋</h1>
        <p className="text-2xl">I'm Fredrik Forsmo, full-stack developer, tech maker and open source ninja and focusing on JavaScript, PHP and Go. I'm <Link to='https://twitter.com/frozzare' title='@frozzare' /> on Twitter.</p>
      </div>
    </div>
    <LatestRepos />
  </div>
);
