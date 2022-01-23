import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
  Textarea,
  useToast,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

function Upcomingcancel({ open, setopen }) {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setvalue] = useState("");
  const [error, seterror] = useState(false);
  useEffect(() => {
    if (open) {
      onOpen(true);
    }
  }, [open, onOpen]);

  function handleInputChange(e) {
    const regex = /[a-zA-Z]/;
    var inputValue = e.target.value;
    const doesItHaveLetter = regex.test(inputValue);
    if (doesItHaveLetter) {
      seterror(false);
      setvalue(inputValue);
    } else {
      setvalue("");
    }
  }

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cancel upcoming mock</ModalHeader>
          <ModalBody>
            <Text
              mt={"-15px"}
              fontWeight={"400"}
              fontSize={"14px"}
              lineHeight={"20px"}
              color={"gray.500"}
            >
              Cancelling a scheduled mock interview disturbs your partner’s
              practice schedule and reduces the reliability on your profile.
            </Text>
            <Text
              mt={"16px"}
              mb={"8px"}
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"20px"}
              color={"black"}
            >
              Cancellation reason
            </Text>
            <FormControl isInvalid={error}>
              <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder="Why are you cancelling this mock interview?"
                size="md"
              />
              {error ? (
                <FormErrorMessage>
                  Please enter a cancellation reason
                </FormErrorMessage>
              ) : null}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                onClose(true);
                setopen(false);
              }}
              variant={"ghost"}
              colorScheme={"gray"}
              size={"sm"}
              border={"1px solid #E2E8F0"}
              mr={"12px"}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (value === "") {
                  seterror(true);
                } else {
                  onClose(true);
                  toast({
                    title: 'Event Cancelled',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })
                  console.log(value);
                }
              }}
              size={"sm"}
            >
              Cancel mock inteview
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  );
}

export default Upcomingcancel;
