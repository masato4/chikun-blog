// Header.js
import React from 'react';
import Link from 'next/link';

const Header = ({ onSidebarToggle }) => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white bg-opacity-90">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/">
          <span className="font-bold">
            ちーくんブログ
          </span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/AboutMe">
            About Me
          </Link>
          <Link href="/CategoryList">
            カテゴリ一覧
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={onSidebarToggle} className="block text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
