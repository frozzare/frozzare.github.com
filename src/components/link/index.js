const Link = ({ children, to }) => (
  <a className="underline text-f-pink" href={to} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default Link;
