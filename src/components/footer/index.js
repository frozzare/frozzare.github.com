import Link from '../link';

export default () => (
  <footer id="contact" className="p-10 text-center">
    <h2 className="text-4xl pb-2">Contact</h2>
    <p className="text-xl">Want to work together? Send me an email at <Link to='mailto:hello@frozzare.com' title='hello@frozzare.com' /></p>
    <p className="pt-8">
      <a href="https://facebook.com/frozzare" title="Facebook" target="_blank" rel="noopener noreferrer" className="p-5 pl-0">
        <i className="fab fa-2x fa-facebook"></i>
      </a>
      <a href="https://twitter.com/frozzare" title="Twitter" target="_blank" rel="noopener noreferrer" className="p-5">
        <i className="fab fa-2x fa-twitter"></i>
      </a>
      <a href="http://se.linkedin.com/in/frozzare/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-5">
        <i className="fab fa-2x fa-linkedin"></i>
      </a>
      <a href="https://github.com/frozzare" title="GitHub" target="_blank" rel="noopener noreferrer" className="p-5 pr-0">
        <i className="fab fa-2x fa-github"></i>
      </a>
    </p>
  </footer>
);
