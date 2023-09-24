import Link from 'next/link';

const CustomLink = ({ children, href }) => {
  if (href.startsWith('/') || href === '') {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  } else {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
};

export default CustomLink;
