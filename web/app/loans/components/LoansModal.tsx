'use client';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';

function LoansModal({ isOpen, onOpenChange }) {
  return (
    <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="text-black"
        classNames={{ closeButton: 'text-primary font-bold text-3xl' }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-5 py-12">
                <Image src="/images/check.svg" width={50} height={50} alt="check" />
                <span className="text-3xl text-[#1744F9]">Pago realizado</span>
              </ModalHeader>
              <ModalBody className="px-20 ">
                <p className="text-center">
                  Felicidades has pagado tu primera cuota de forma puntual quam.
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center py-12">
                <Button
                  color="primary"
                  onPress={onClose}
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
  );
}

export default LoansModal;
