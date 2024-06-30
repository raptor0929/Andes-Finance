'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@nextui-org/react';
import { Badge } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const challenges = [
  {
    number: '01',
    title: 'OPEN OR CONNECT YOUR ACCOUNT',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'done',
    link: '/dashboard/challenge/01',
  },
  {
    number: '02',
    title: 'ABRE UNA CUENTA FARCASTER',
    subtitle: 'Y conecta con coinbase',
    status: 'no-done',
    link: '/dashboard/challenge/02',
  },
  {
    number: '03',
    title: 'AHORRA DURANTE 3 SEMANAS',
    subtitle: 'Y conecta con coinbase',
    status: 'no-done',
    link: '/dashboard/challenge/03',
  },
  {
    number: '04',
    title: 'HAZ UNA TRANSFERENCIA SENCILLA',
    subtitle: 'Y conecta con coinbase',
    status: 'no-done',
    link: '/dashboard/challenge/04',
  },
  {
    number: '05',
    title: 'OBTÉN TU PRÉSTAMO',
    subtitle: 'Elige cuánto deseas que te prestemos y en cuanto tiempo.',
    status: 'no-done',
    link: '/dashboard/loan',
  },
];

function LoanRoute() {
  return (
    <div className="h-full bg-white p-10">
      <h1 className="pb-2 font-urbanist text-3xl text-[#3268FF]">
        Start the route to request your loan!
      </h1>
      <span className="text-gray-400">Completa estos 4 retos durante 4 semanas</span>
      <Table
        aria-label="Example static collection table"
        hideHeader
        removeWrapper
        className="mt-10"
      >
        <TableHeader>
          <TableColumn className="text-black">
            <Image src="/images/circle.svg" width={100} height={100} alt="circle" />
          </TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody className="">
          {challenges.map((challenge, index) => {
            return (
              <TableRow key={index} className=" text-black">
                <TableCell>
                  <div className="relative inline-block w-10 ">
                    <Badge
                      content={
                        <Image
                          src={
                            challenge.status === 'done'
                              ? '/images/check-green.svg'
                              : '/images/lock.svg'
                          }
                          width={15}
                          height={15}
                          alt="status"
                        />
                      }
                      className="bg-transparent"
                      shape="circle"
                      showOutline={false}
                    >
                      <Image
                        src="/images/circle.svg"
                        width={150}
                        height={150}
                        alt="circle"
                        className={challenge.status !== 'done' ? 'opacity-25' : 'opacity-100'}
                      />
                    </Badge>
                    <span
                      className={`absolute inset-0 z-10 flex items-center justify-center  ${
                        challenge.status === 'done' ? 'text-white' : 'text-[#8AA9FF]'
                      }`}
                    >
                      {challenge.number}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm font-bold">{challenge.title}</p>
                  <p className="text-xs text-gray-400">{challenge.subtitle}</p>
                </TableCell>
                <TableCell className="flex w-full items-center justify-center">
                  {challenge.status === 'done' ? (
                    <span className="text-center text-sm text-success">Sent and approved</span>
                  ) : (
                    <Link href={challenge.link} passHref>
                      <Button radius="full" color="primary">
                        EMPEZAR
                      </Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default LoanRoute;
