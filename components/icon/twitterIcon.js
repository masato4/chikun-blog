// TwitterIcon.js

import Link from 'next/link';
import Image from 'next/image';

const TwitterIcon = () => {
  return (
    <Link href="https://twitter.com/nudge_narrative">
        <Image
          src="/twitter-icon.svg"
          alt="Twitter"
          width={32}
          height={32}
        />
    </Link>
  );
};

export default TwitterIcon;
