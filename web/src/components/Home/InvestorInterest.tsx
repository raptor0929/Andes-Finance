import Image from 'next/image';
import React from 'react';
import { Input, Button } from '@nextui-org/react';

const InvestorInterest = () => {
  return (
    <div className="flex overflow-hidden bg-white px-28 py-14 text-black">
      <div className=" flex w-1/3 flex-col justify-center gap-10">
        <h1 className="font-urbanist text-7xl">¿Te gustaría ser un inversor?</h1>
        <p className="font-urbanist text-lg text-gray-500">
          Dejanos tus datos y te contactaremos para contarte todos los beneficios de ser inversor
          con nosotros.
        </p>
      </div>
      <Image
        src="/images/home/investor-logo.png"
        width={500}
        height={500}
        alt="investor"
        className="relative bottom-0 right-10 w-1/3 translate-y-1/3 transform p-10"
      />
      <div className="flex w-1/3 flex-col justify-center gap-7 text-black">
        <div className="flex flex-col gap-2">
          <label className="ml-6 text-sm">NAMES AND SURNAMES</label>
          <Input
            key={'outside'}
            size="lg"
            type="email"
            color="primary"
            variant="bordered"
            labelPlacement={'outside'}
            className="w-ful text-black"
            placeholder="Escribe tus nombres"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="ml-6 text-sm">CORREO ELECTRONICO</label>
          <Input
            key={'outside'}
            size="lg"
            color="primary"
            variant="bordered"
            type="email"
            labelPlacement={'outside'}
            placeholder="Escribe tu correo electronico"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="ml-6 text-sm">NUMERO DE CELULAR</label>
          <Input
            key={'outside'}
            size="lg"
            type="email"
            color="primary"
            variant="bordered"
            labelPlacement={'outside'}
            className="w-ful text-black"
            placeholder="Escribe tu numero de celular"
          />
        </div>
        <Button className="flex w-1 items-center justify-center rounded-full bg-primary px-14 py-7 text-center  text-white">
          <span className="mt-1 font-urbanist text-base font-bold text-black">SEND</span>
        </Button>
      </div>
    </div>
  );
};

export default InvestorInterest;
