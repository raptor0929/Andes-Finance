import React from 'react';

interface ISquarePosition {
  title: string;
  description: string;
  subtitle: string;
}
const SquarePosition = ({ title, description, subtitle }: ISquarePosition) => {
  return (
    <div className="flex w-1/2 flex-col justify-center gap-2 px-10 font-urbanist">
      <span className="text-3xl text-[#3268FF]">{title}</span>
      <span className="text-2xl text-[#14BE77]">{description}</span>
      <span className="text-lg text-gray-400">{subtitle}</span>
    </div>
  );
};
const Founding = () => {
  return (
    <div className="flex h-1/2 flex-col items-center justify-center gap-4 bg-white text-black">
      <div className="flex h-1/2 w-full gap-4 px-10 pt-10">
        <SquarePosition
          title={'Total Funding Received'}
          description={'$0.00'}
          subtitle={'from last months'}
        />
        <SquarePosition title={'Cuotas'} description={'0/0'} subtitle={'from last week'} />
      </div>
      <div className=" flex h-1/2 w-full gap-4  px-10">
        <SquarePosition title={'Total Payment'} description={'$0'} subtitle={'0% of interest'} />
        <SquarePosition title={'Pay day'} description={'$-'} subtitle={'Next payment day'} />
      </div>
    </div>
  );
};

export default Founding;
