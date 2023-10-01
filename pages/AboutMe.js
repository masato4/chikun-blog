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
          <p>なっじ</p>
        </div>
        <div>
          <div className="rounded-full" style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden' }}>
            <Image
              src="/favicon.png"
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
        <p>はじめまして!なっじと申します。2001年生まれの理系大学生です。趣味は、お酒とカラオケです。このブログでは趣味関連のことに加え、日々の日常で嬉しかったことや、悩みを投稿していきます。
          初心者ブロガーですが、みなさんと日常を共有できたらと思っています。よろしくお願いします。</p>
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
