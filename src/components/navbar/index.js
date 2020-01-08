import { useEffect, useState } from 'react';

const logo = require('../../images/logo-white.png');

const menus = [
  {
    title: 'Home',
    path: '#home'
  },
  {
    title: 'Projects',
    path: '#projects'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
];

export default () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const SmoothScroll = require('smooth-scroll');
    new SmoothScroll('a[href*="#"]');
  }, []);

  return (
    <nav className="fixed select-none bg-grey lg:flex lg:items-stretch w-full text-gray-500 bg-gray-900">
      <div className="flex flex-no-shrink items-stretch h-14">
        <a href="/" className="flex-no-grow flex-no-shrink relative p-5">
          <img src={logo} alt="Frozzare" className="w-32" />
        </a>
        <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4 mt-2 mr-1" aria-label="Menu">
          {open ? (
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setOpen(false)}
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          ) : (
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setOpen(true)}
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>
      <div className={'lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ' + (open ? 'block' : 'hidden lg:block')}>
        <div className="lg:flex lg:justify-start"></div>
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
          {menus.map((m, mi) => (
            <a
              href={m.path}
              key={mi}
              className="text-sm flex-no-grow flex-no-shrink relative py-5 px-5 leading-normal text-white no-underline flex items-center hover:bg-grey-dark hover:underline"
              onClick={() => setOpen(false)}
            >
              {m.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
