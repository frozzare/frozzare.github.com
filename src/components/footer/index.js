import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Link from '../link';

export default () => (
  <footer id="contact" className="p-10 text-center">
    <h2 className="text-4xl pb-2">Contact</h2>
    <p className="text-xl">Want to work together? Send me an email at <Link to='mailto:hello@frozzare.com' title='hello@frozzare.com' /></p>
    <p className="pt-8">
      <a href="https://facebook.com/frozzare" title="Facebook" target="_blank" rel="noopener noreferrer" className="p-5 pl-0">
        <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
      </a>
      <a href="https://twitter.com/frozzare" title="Twitter" target="_blank" rel="noopener noreferrer" className="p-5">
        <FontAwesomeIcon icon={faTwitterSquare} size='2x' />
      </a>
      <a href="http://se.linkedin.com/in/frozzare/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-5">
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
      <a href="https://github.com/frozzare" title="GitHub" target="_blank" rel="noopener noreferrer" className="p-5 pr-0">
        <FontAwesomeIcon icon={faGithubSquare} size='2x' />
      </a>
    </p>
  </footer>
);
