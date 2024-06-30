'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import SharedLayout from '@/components/SharedLayout';

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
