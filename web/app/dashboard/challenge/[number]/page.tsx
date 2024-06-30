'use client';
import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { usePathname, useRouter } from 'next/navigation';
import SharedLayout from '@/components/SharedLayout';
import { useGame } from '@/components/Global/GameProvider';
import { Button } from '@nextui-org/button';
import { FaUpload } from 'react-icons/fa';
import { Input } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

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

  if (id === '04') {
    return (
      <SharedLayout>
        <div className="h-full p-40 px-4 py-2">
          <div className="h-full p-20">
            <div className="flex h-full w-full flex-col  bg-white px-20 py-12">
              <div className="py-10">
                <p className="text-2xl text-information">RETO 4: Sube tus documentos</p>
                <span className="text-sm text-gray-500">
                  Sube un extracto de tu banco de los ultimos 6 meses.
                </span>
              </div>
              <div className="flex h-1/2 w-full items-center justify-center gap-10 p-4">
                <div
                  className="flex w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-6"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FaUpload className="text-6xl text-gray-400" />
                  <p className="mt-4 text-lg text-gray-500">
                    Arraste e solte os arquivos aqui ou clique para fazer upload
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    multiple
                    onChange={handleFiles}
                  />
                </div>

                {files.length > 0 ? (
                  <div className="mt-6 w-full max-w-md">
                    <h3 className="text-lg font-semibold text-black">Subir archivo:</h3>
                    <ul className="mt-2">
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between border-b border-gray-300 p-2"
                        >
                          <span className="text-gray-700">{file.name}</span>
                          <span className="text-sm text-gray-500">
                            {(file.size / 1024).toFixed(2)} KB
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-6 w-full max-w-md">
                    <h3 className="text-lg font-semibold"></h3>
                    <ul className="mt-2"></ul>
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Button
                  radius="full"
                  color="primary"
                  onClick={handleButtonClick}
                  className="w-1/3 py-4 text-lg"
                >
                  Upload File
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
                    <label className="ml-6 text-sm text-black">
                      DIRECCIÓN DE CUENTA 1 - AHORRO
                    </label>
                    <Input
                      key="outside"
                      size="lg"
                      color="primary"
                      variant="bordered"
                      type="email"
                      labelPlacement="outside"
                      placeholder={'Pega aquí la dirección'}
                      className="text-black"
                    />
                  </div>
                  <div className="flex w-1/2 flex-col gap-2">
                    <label className="ml-6 text-sm text-black">
                      DIRECCIÓN DE CUENTA 2 - TRABAJO
                    </label>
                    <Input
                      key="outside"
                      size="lg"
                      color="primary"
                      variant="bordered"
                      type="email"
                      labelPlacement="outside"
                      placeholder={'Pega aquí la dirección '}
                      className="text-black"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-5 py-10">
                  <div className="flex w-1/2 flex-col gap-2">
                    <label className="ml-6 text-sm text-black">
                      DIRECCIÓN DE CUENTA 3 - AHORRO
                    </label>
                    <Input
                      key="outside"
                      size="lg"
                      color="primary"
                      variant="bordered"
                      type="email"
                      labelPlacement="outside"
                      placeholder={'Pega aquí la dirección'}
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
                  CONTINUAR
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
