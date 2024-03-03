// AvoutMe.js
import Link from 'next/link';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">自己紹介</h1>
      <div className="flex items-center mb-6">
        <div className="mr-10">
          <h2 className="text-xl font-bold mb-2">名前</h2>
          <p>ちーくん</p>
        </div>
        <div>
          <div className="rounded-full" style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden' }}>
            <Image
              // src="/favicon.png"
              src="/chikunn.png"
              alt="Icon"
              width={64}
              height={64}
              layout="fixed"
            />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">プロフィール</h2>
        <p>はじめまして、ちーくんと申します！2001年生まれの新社会人です。趣味は、お酒とカラオケで、最近は○○に力を入れています。日々の生活で受けた刺激や、購入して良かったものなどを共有できたらと考えています。よろしくお願いいたします。</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">連絡先</h2>
        <Link href="https://twitter.com/nudge_narrative" className="text-blue-500 hover:underline" target="_blank"
          rel="noopener noreferrer">連絡先(twitter)</Link>
      </div>
      <Link href="/" className="text-blue-500 hover:underline">ホームに戻る</Link>
    </div>

  );
};

export default AboutMe;
