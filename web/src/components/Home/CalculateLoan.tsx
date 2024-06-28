'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@nextui-org/react';
import { Slider } from '@nextui-org/react';

const CalculateLoan: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="flex items-center justify-center bg-primary py-24 text-black">
      <div className="ml-40 flex h-1/2 w-2/3 flex-col gap-4 bg-white px-20 py-14 pr-64">
        <div className="flex flex-col gap-2">
          <p>Empecemos</p>
          <h2 className="font-urbanist mb-4 text-7xl">Calcula tu préstamo</h2>
        </div>
        <p>¿Cuanto necesitas?</p>
        <div className="flex w-full bg-stroke-2 px-10 py-2">
          <div className="flex w-1/4 items-center justify-center text-sm text-gray-400">
            min. $10
          </div>
          <Input
            type="number"
            max={500}
            min={10}
            placeholder="0.0"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-2xl font-bold text-primary">$</span>
              </div>
            }
            className=" w-2/3 px-10 text-4xl"
            style={{
              fontSize: '30px',
              color: '#17D071',
              fontWeight: 'bolder',
            }}
          />
          <div className="flex w-1/4 items-center justify-center text-sm text-gray-400">
            Max. $10
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <span>¿EN CUANTOS MESES QUIERES PAGAR?</span>
          <Slider
            step={0.25}
            formatOptions={{ style: 'percent' }}
            maxValue={1}
            minValue={0}
            marks={[
              {
                value: 0,
                label: '1',
              },
              {
                value: 0.25,
                label: '3',
              },
              {
                value: 0.5,
                label: '6',
              },
              {
                value: 0.75,
                label: '9',
              },
              {
                value: 1,
                label: '12',
              },
            ]}
            className="w-full"
          />
        </div>
      </div>
      <div className="relative right-40 flex h-72 w-2/5 flex-col items-center justify-center gap-8 bg-information-active">
        <div className="flex flex-col gap-1 text-center">
          <p className="font-urbanist text-2xl text-white">Pago Final</p>
          <p className="text-3xl font-bold text-white">$510</p>
          <p className="font-urbanist text-sm text-white">Interes 2%</p>
        </div>
        <Button color="success" variant="ghost" className="px-14 py-8 text-white" radius="full">
          LO QUIERO
        </Button>
      </div>
    </section>
  );
};

export default CalculateLoan;
