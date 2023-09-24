// InstagramIcon.js

import Link from 'next/link';
import Image from 'next/image';

const InstagramIcon = () => {
  return (
    <Link href="https://www.instagram.com/nudge_narrative_blog/">
        <Image
          src="/instagram-icon.svg"
          alt="Instagram"
          width={32}
          height={32}
        />
    </Link>
  );
};

export default InstagramIcon;
