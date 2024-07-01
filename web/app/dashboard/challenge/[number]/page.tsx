'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Input } from '@nextui-org/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FaUpload } from 'react-icons/fa';
import { useGame } from '@/components/Global/GameProvider';
import SharedLayout from '@/components/SharedLayout';

const challenges = {
  '02': {
    title: 'RETO 2: Abre o conecta tu cuenta Farcaster',
    description: 'Conectala con Coinbase',
    label: 'USUARIO DE farcaster',
    input: 'Escribe aquí tu usuario Farcaster',
  },
  '03': {
    title: 'RETO 3: Ahorra 2 USD por una semana',
    description: 'Conectala con Coinbase',
    label: 'LINK DE TRANSACCIÓN',
    input: 'Pega aquí el link de la transacción',
  },
  '04': {
    title: 'RETO 4: Haz un swap de 1 USDC A Optimism',
    description: 'Conectala con Coinbase',
    label: 'LINK DE TRANSACCIÓN',
    input: 'Pega aquí el link de la transacción',
  },
};

const page = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const id = pathParts[pathParts.length - 1];
  const { t } = useTranslation();
  const router = useRouter();
  const { gameState, setGameState } = useGame();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    setGameState(gameState + 1);
    onOpen();
  };

  const handleClose = () => {
    onClose();
    router.push('/dashboard');
  };

  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles([...files, ...newFiles]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const newFiles = event.dataTransfer.files ? Array.from(event.dataTransfer.files) : [];
    setFiles([...files, ...newFiles]);
  };

  if (id !== '01') {
    return (
      <SharedLayout>
        <div className="h-full p-40 px-4 py-2">
          <div className="h-full p-20">
            <div className="h-full bg-white px-20 py-12">
              <p className="text-2xl text-information">{challenges[id].title}</p>
              <span className="text-sm text-gray-500">{challenges[id].description}</span>
              <div className="mt-5 flex flex-col items-center">
                <div className="flex w-full gap-5 py-10">
                  <div className="flex w-1/2 flex-col gap-2">
                    <label className="text-sm text-black">{challenges[id].label}</label>
                    <Input
                      key="outside"
                      size="lg"
                      color="primary"
                      variant="bordered"
                      type="email"
                      labelPlacement="outside"
                      placeholder={challenges[id].input}
                      className="text-black"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-4">
                <Button
                  radius="full"
                  color="primary"
                  className="px-16 text-lg"
                  onClick={handleButtonClick}
                >
                  ENVIAR RETO
                </Button>
              </div>
            </div>
            <Modal
              isOpen={isOpen}
              onClose={handleClose}
              className="text-black"
              classNames={{ closeButton: 'text-primary font-bold text-3xl' }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col items-center gap-5 py-12">
                      <Image src="/images/check.svg" width={50} height={50} alt="check" />
                      <span className="text-center text-3xl text-[#1744F9]">
                        ¡Reto {id} enviado!
                      </span>
                    </ModalHeader>
                    <ModalBody className="px-20 ">
                      <p className="text-center">
                        Gracias por enviarnos tu reto. Lo revisaremos y lo aprobaremos dentro de 24
                        horas
                      </p>
                    </ModalBody>
                    <ModalFooter className="flex justify-center py-12">
                      <Button
                        color="primary"
                        onPress={handleClose}
                        className="px-8 py-6 text-black"
                        radius="full"
                      >
                        ACEPTAR
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </SharedLayout>
    );
  } else {
    return (
      <SharedLayout>
        <div className="h-full p-40 px-4 py-2">
          <div className="h-full p-20">
            <div className="h-full bg-white px-20 py-12">
              <p className="text-2xl text-information">
                RETO {id}: Abre o conecta 3 cuentas de Coinbase
              </p>
              <span className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="mt-5 flex flex-col items-center">
                <div className="flex w-full gap-5 py-10">
                  <div className="flex w-1/2 flex-col gap-2">
                    <label className="text-sm text-black">DIRECCIÓN DE CUENTA 1 - AHORRO</label>
                    <Input
                      key="outside"
                      size="lg"
                      color="primary"
                      variant="bordered"
                      type="email"
                      labelPlacement="outside"
                      placeholder="Pega aquí la dirección"
                      className="text-black"
                    />
                  </div>
                  <div className="flex w-1/2 flex-col gap-2">
                    <label className="text-sm text-black">DIRECCIÓN DE CUENTA 2 - TRABAJO</label>
                    <Input
                      key="outside"
                      size="lg"
                      color="primary"
                      variant="bordered"
                      type="email"
                      labelPlacement="outside"
                      placeholder="Pega aquí la dirección "
                      className="text-black"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-5 py-10">
                  <div className="flex w-1/2 flex-col gap-2">
                    <label className="text-sm text-black">DIRECCIÓN DE CUENTA 3 - AHORRO</label>
                    <Input
                      key="outside"
                      size="lg"
                      color="primary"
                      variant="bordered"
                      type="email"
                      labelPlacement="outside"
                      placeholder="Pega aquí la dirección"
                      className="text-black"
                    />
                  </div>
                </div>
                <Button
                  radius="full"
                  color="primary"
                  className="px-16 text-lg"
                  onClick={handleButtonClick}
                >
                  ENVIAR RETO
                </Button>
              </div>
              <Modal
                isOpen={isOpen}
                onClose={handleClose}
                className="text-black"
                classNames={{ closeButton: 'text-primary font-bold text-3xl' }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col items-center gap-5 py-12">
                        <Image src="/images/check.svg" width={50} height={50} alt="check" />
                        <span className="text-center text-3xl text-[#1744F9]">
                          ¡Reto {id} enviado!
                        </span>
                      </ModalHeader>
                      <ModalBody className="px-20 ">
                        <p className="text-center">
                          Gracias por enviarnos tu reto. Lo revisaremos y lo aprobaremos dentro de
                          24 horas
                        </p>
                      </ModalBody>
                      <ModalFooter className="flex justify-center py-12">
                        <Button
                          color="primary"
                          onPress={handleClose}
                          className="px-8 py-6 text-black"
                          radius="full"
                        >
                          ACEPTAR
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </SharedLayout>
    );
  }
};

export default page;
