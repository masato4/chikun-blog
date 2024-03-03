import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import { useState } from 'react';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // <div className="flex flex-col min-h-screen relative">
    <div className="flex flex-col relative"> {/* 注意：relativeを追加 */}
      {/* <div className="min-h-screen"> */}
      <div className="min-h-[calc(100vh-8rem)]">
        <Header onSidebarToggle={toggleSidebar} />
        {isSidebarOpen && <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-10" onClick={toggleSidebar}></div>} {/* z-indexを下げています */}
        <div className="flex relative flex-grow "> {/* 注意：relativeを追加 */}
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <main className="flex-1 max-w-4xl w-full mx-auto relative">{children}</main>
        </div>
        {/* 他のコンポーネントや要素 */}
      </div>
      <Footer className="mt-auto" />
    </div> 
  )
}






// export default function Layout  ({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
  
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header onSidebarToggle={toggleSidebar} />
//       <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
//       <main className="flex-1 max-w-4xl w-full mx-auto">{children}</main>
//       {/* 他のコンポーネントや要素 */}
//       <Footer />
//     </div>
    
//     );
//   }


  // export default function Layout({ children }) {
  //   return (
  //     <div className="flex flex-col min-h-screen">
  //       <Header />
  //       <main className="flex-1 max-w-4xl w-full mx-auto">{children}</main>
  //       <Footer />
  //     </div>
  //   );
  // }
  
