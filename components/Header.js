import Link from 'next/link';
import InstagramIcon from './icon/InstagramIcon';

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/">
          <span>なじなれブログ</span>
        </Link>
        <div>
          <InstagramIcon />
        </div>
        <div>
          <Link href="/CategoryList">
            カテゴリ一覧
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
