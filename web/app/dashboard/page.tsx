import SharedLayout from '@/components/SharedLayout';
import React from 'react';

const page = () => {
  return (
    <SharedLayout>
      <div className="h-5/6 p-10">
        <div className="px-10 pb-12 pt-4">
          <span className="font-urbanist text-4xl text-information">Dashboard</span>
        </div>
        {/* Otros componentes específicos del Dashboard */}
      </div>
    </SharedLayout>
  );
};

export default page;
