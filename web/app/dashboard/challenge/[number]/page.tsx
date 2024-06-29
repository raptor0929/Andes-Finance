'use client';

import SharedLayout from '@/components/SharedLayout';
import { usePathname } from 'next/navigation';
import React from 'react';

const page = () => {
  const pathname = usePathname();
  return (
    <SharedLayout>
      <div className="h-full px-4 py-2">
        <p>Current pathname: {pathname}</p>;
      </div>
    </SharedLayout>
  );
};

export default page;
