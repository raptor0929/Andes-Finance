import React from 'react';
import Score from './Score';

function CreditScore() {
  return (
    <div className="flex h-1/2 flex-col items-center justify-center gap-4 bg-white px-10">
      <div className="w-full ">
        <span className="text-left text-3xl text-information">Credit Score |</span>
        <span className="text-3xl text-gray-500">month</span>
      </div>
      <div className="h-1/2 w-1/2">
        <Score title="Normal" value={100} />
      </div>
      <span className=" text-center text-gray-500">
        The score goes from 1 to 1000, the closer to 1000, the better financing opportunities you
        will have.
      </span>
    </div>
  );
}

export default CreditScore;
