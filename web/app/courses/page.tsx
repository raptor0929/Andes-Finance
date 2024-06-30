import React from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import Image from 'next/image';
import SharedLayout from '@/components/SharedLayout';

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
const page = () => {
  return (
    <SharedLayout>
      <div className="h-5/6 p-10">
        <div className="px-10 pb-12 pt-4">
          <span className="font-urbanist text-4xl text-information">Courses</span>
        </div>
        <div className="flex space-x-8 overflow-x-auto px-4 pb-10">
          {cards.map((card, index) => (
            <Card key={index} className="h-full w-1/3 flex-shrink-0 gap-4 px-10 py-14">
              <CardHeader className="flex flex-col items-start gap-2">
                <Image
                  src="/images/home/briefcase-alt.svg"
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
    </SharedLayout>
  );
};

export default page;
