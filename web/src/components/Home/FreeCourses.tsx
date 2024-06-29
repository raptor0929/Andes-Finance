import React from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import Image from 'next/image';

const cards = [
  {
    title: 'Defi',
    description:
      'Enim augue integer facilisi et urna diam pellentesque lectus. Odio at nunc sit facilisis.',
  },
  {
    title: 'Base',
    description:
      'Enim augue integer facilisi et urna diam pellentesque lectus. Odio at nunc sit facilisis.',
  },
  {
    title: 'Web3',
    description:
      'Enim augue integer facilisi et urna diam pellentesque lectus. Odio at nunc sit facilisis.',
  },
];

const FreeCourses = () => {
  return (
    <div className="flex bg-[#EEF2FF] px-28 py-24 text-black">
      <div className="text-bold flex w-1/2 flex-col gap-10  px-4 py-10">
        <span className="font-urbanist text-xl">¿NECESITAS ENTENDER MEJOR?</span>
        <h1 className="w-full font-urbanist text-6xl">Aprende con los cursos gratuitos</h1>
        <span className="mt-4 w-full font-urbanist text-xl text-gray-400">
          Enim augue integer facilisi et urna diam pellentesque lectus.
        </span>
      </div>

      <div className="flex w-1/2 space-x-8 overflow-x-auto px-4 py-8">
        {cards.map((card, index) => (
          <Card key={index} className="w-2/3 flex-shrink-0 gap-4 px-10 py-10">
            <CardHeader className="flex flex-col items-start gap-2">
              <Image
                src={'/images/home/briefcase-alt.svg'}
                width={50}
                height={50}
                alt="icon"
                className="block"
              />
              <h4 className="text-3xl font-bold">{card.title}</h4>
            </CardHeader>
            <CardBody className="mb-4">
              <p>{card.description}</p>
            </CardBody>
            <Button className="flex w-1 items-center justify-center rounded-full bg-primary py-6 text-center  text-white">
              <span className="mt-1 text-2xl text-black">↗</span>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FreeCourses;
