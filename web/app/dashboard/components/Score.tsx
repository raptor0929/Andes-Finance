'use client';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

type IScore = {
  title: string;
  value: number;
};

function Score({ title, value }: IScore) {
  const angleDegrees = value * 1.8 - 180; // map data 0-100 a -90 to 90 degrees
  const angleRadians = angleDegrees * (Math.PI / 180); // degrees to radians

  const { width } = useWindowSize();
  const radius = width ? (width < 640 ? 4 : width < 1024 ? 5 : 9.3) : 9.3;
  const xPosition = radius * Math.cos(angleRadians); // Position x in rem
  const yPosition = radius * Math.sin(angleRadians) + 0.5; // Position y in rem

  return (
    <div className="relative flex h-1/2 w-1/2 items-end justify-center ">
      <Image src="/images/score.svg" alt="quests" className="h-full w-full" fill />
      {/* TODO: FIX VALUE */}
      {/* <div
          className="absolute h-8 w-8 rounded-full border-2 border-white bg-black"
          style={{
            transform: `translateX(${xPosition}rem) translateY(${yPosition}rem)`,
          }}
        /> */}
      <div className="absolute flex flex-col items-center">
        <span className="mb-1  text-4xl font-semibold text-black">{value}</span>
        <span className="mb-1  text-lg font-semibold text-black">{title}</span>
      </div>
    </div>
  );
}

export default Score;
