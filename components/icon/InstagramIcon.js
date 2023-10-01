// InstagramIcon.js

import Link from 'next/link';
import Image from 'next/image';

const InstagramIcon = () => {
  return (
    <Link href="https://www.instagram.com/nudge_narrative_blog/" target="_blank"
      rel="noopener noreferrer">
      <div className="hover:filter hover:brightness-110 rounded-full">
        <Image
          src="/instagram-icon.svg"
          alt="Instagram"
          width={32}
          height={32}
        />
      </div>
    </Link>
  );
};

export default InstagramIcon;
