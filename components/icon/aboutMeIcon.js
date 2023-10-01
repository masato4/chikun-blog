// AboutMeIcon.js

import Link from 'next/link';
import Image from 'next/image';

const AboutMeIcon = () => {
  return (
    <div className="flex items-center justify-center pt-4 flex-col"> {/* flex-colを追加 */}
      <div className="rounded-full bg-gray-800 p-2">
        <Link href="/AboutMe">
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden' }}>
            <Image
              src="/nextjs-welcome.png"
              alt="Icon"
              width={32}
              height={32}
              layout="responsive"
            />
          </div>
        </Link>
      </div>
      <span className="text-2xl font-bold mt-2"> {/* mt-2を追加してアイコンとの間にスペースを開ける */}
        <Link href="/AboutMe">
          なっじ
        </Link>
      </span>
    </div>
  );
};

export default AboutMeIcon;
