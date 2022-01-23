import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text
} from "@chakra-ui/react";

function Slotclash({ clash }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (clash) {
      onOpen(true);
    }
  }, [clash,onOpen]);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={'lg'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Slot clashing</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={'24px'}>
          <Text fontSize={'14px'} lineHeight={'20px'} color={'gray.500'}>
          This slot is clashing with one of your created or upcoming mock
          interviews. Please review the list of created and upcoming mocks and
          delete / cancel the interview in order to join this one.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Slotclash;
