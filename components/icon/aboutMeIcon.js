// AboutMeIcon.js

import Link from 'next/link';
import Image from 'next/image';

const AboutMeIcon = ({ handleClose }) => {

  return (
    <div className="flex items-center justify-center pt-4 flex-col"> {/* flex-colを追加 */}
      <div className="rounded-full" style={{ width: '52px', height: '52px', borderRadius: '50%', overflow: 'hidden' }} onClick={handleClose}>
        <Link href="/AboutMe">
          <div className="hover:filter hover:brightness-110"> 
            <Image
              // src="/favicon.png"
              src="/chikunn.png"
              alt="Icon"
              width={52}
              height={52}
              layout="fixed"
            />
          </div>
        </Link>
      </div>
      <span className="text-2xl font-bold mt-2"> {/* mt-2を追加してアイコンとの間にスペースを開ける */}
        <Link href="/AboutMe">
          ちーくん
        </Link>
      </span>
    </div>
  );
};

export default AboutMeIcon;
