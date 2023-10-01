// TwitterIcon.js

import Link from 'next/link';
import Image from 'next/image';

const TwitterIcon = () => {
  return (
    <Link href="https://twitter.com/nudge_narrative" target="_blank"
      rel="noopener noreferrer">
      <div className="hover:filter hover:brightness-150 rounded-full">
        <Image
          src="/twitter-icon.svg"
          alt="Twitter"
          width={32}
          height={32}
        />
      </div>
    </Link>
  );
};

export default TwitterIcon;
