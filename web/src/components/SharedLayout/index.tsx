// /app/common/SharedLayout.tsx
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface SharedLayoutProps {
  children: ReactNode;
}

const SharedLayout: React.FC<SharedLayoutProps> = ({ children }) => {
  return (
    // TODO: change this layout for grid
    <div className="h-screen">
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col space-y-6 bg-[#1744F9] py-7">
        <Sidebar />
      </aside>
      <div className="ml-64 h-20 bg-white " style={{ width: 'calc(100vw - 16rem)' }}>
        <Navbar />
      </div>
      <main
        className="ml-64 flex-1 overflow-auto bg-stroke-2 p-4 shadow-xl"
        style={{ height: 'calc(100vh - 5rem)', width: 'calc(100vw - 16rem)' }}
      >
        {children}
      </main>
    </div>
  );
};

export default SharedLayout;
