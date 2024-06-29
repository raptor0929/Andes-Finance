import Image from 'next/image';

interface IScore {
  title: string;
  value: number;
}

const Score = ({ title, value }: IScore) => {
  const angleDegrees = value * 1.8 - 180; // map data 0-100 a -90 to 90 degrees
  const angleRadians = angleDegrees * (Math.PI / 180); // degrees to radians

  const radius = 9.3;
  const xPosition = radius * Math.cos(angleRadians); // Position x in rem
  const yPosition = radius * Math.sin(angleRadians) + 0.5; // Position y in rem

  return (
    <div className="flex items-end justify-center">
      <div
        className="absolute h-8 w-8 rounded-full border-2 border-white bg-black"
        style={{
          transform: `translateX(${xPosition}rem) translateY(${yPosition}rem)`,
        }}
      ></div>
      <Image
        src={'/images/score.svg'}
        alt="quests"
        className="h-full w-full"
        width={10}
        height={10}
      />
      <div className="absolute flex flex-col items-center">
        <span className="mb-1 block text-4xl font-semibold text-black">{value}</span>
        <span className="mb-1 block text-2xl font-semibold text-black">{title}</span>
      </div>
    </div>
  );
};

export default Score;
