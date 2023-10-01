// Sidebar.js

import React from 'react';
import InstagramIcon from './icon/InstagramIcon';
import TwitterIcon from './icon/twitterIcon';
import CategoryListIcon from './icon/categoryListIcon';
import AboutMeIcon from './icon/aboutMeIcon';



const Sidebar = ({ isOpen, onClose }) => {
  const handleItemClick = () => {
    onClose(); // サイドバーを閉じる関数を呼び出す
  };

  const handleClose = () => {
    onClose(); // サイドバーを閉じる
  };
  return (
    <div className={`fixed inset-y-0 right-0 bg-gray-200 w-64 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
      <div className="flex justify-end p-4 h-12">
        <button onClick={onClose} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="bg-white h-screen w-64">
        <AboutMeIcon />        
        <nav>
          <ul>
            <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={handleClose}>
              <div class="flex items-center mx-auto justify-center">
                <p class="mr-4">Follow me:</p>
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={handleClose}>
              <CategoryListIcon />
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={handleClose}>Item 3</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
