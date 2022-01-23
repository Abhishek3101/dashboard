import React from "react";
import {
  Box,
  Text,
  Badge,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  useToast
} from "@chakra-ui/react";
import Time from '../../common/Time'

function Created({data}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()

  const timeprops = {
    bg: 'gray.100',
    w: '350px',
    h: '32px',
    fontSize:"14px",
    fontWeight:"500",
    lineHeight:"20px",
    px:"16px",
    pt:"5px",
    mt:"-7px",
    datetime: data.datetime
  }

  return (
    <>
      <Box
        w={"664px"}
        border={"1px solid #E2E8F0"}
        boxShadow={
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
        }
        borderRadius={"4px"}
        px={"16px"}
        my={"24px"}
      >
        <Stack
          direction={"row"}
          justify={"space-between"}
          w={"632px"}
          py={"16px"}
        >
          <Box w={'300px'}>
            <Text
              fontWeight={"600"}
              fontSize={"12px"}
              lineHeight={"16px"}
              color={"gray.400"}
            >
              WANTS TO PRACTICE
            </Text>

            {data.youTake.category.map((doc) => {
              return (
                <Badge
                  key={doc}
                  mr={"8px"}
                  colorScheme={"gray"}
                  color={"gray.600"}
                  mt={"8px"}
                  mb={"4px"}
                  h={"20px"}
                  fontWeight={"500"}
                  fontSize={"12px"}
                  lineHeight={"16px"}
                  py={"2px"}
                >
                  {doc}
                </Badge>
              );
            })}

            <Box>
              {data.youTake.caseType.map((doc, index) => {
                return index + 1 === data.youTake.caseType.length ? (
                  <Text
                    as={"span"}
                    fontSize={"14px"}
                    lineHeight={"20px"}
                    key={doc}
                    fontWeight={"500"}
                    color={"black"}
                  >
                    {doc}
                  </Text>
                ) : (
                  <Text
                    as={"span"}
                    fontSize={"14px"}
                    key={doc}
                    lineHeight={"20px"}
                    fontWeight={"500"}
                    color={"black"}
                  >
                    {doc},{" "}
                  </Text>
                );
              })}
            </Box>
          </Box>
          <Box w={'300px'}>
            <Text
              fontWeight={"600"}
              fontSize={"12px"}
              lineHeight={"16px"}
              color={"gray.400"}
            >
              WILL TAKE
            </Text>

            {data.youPractice.category.map((doc) => {
              return (
                <Badge
                  key={doc}
                  mr={"8px"}
                  colorScheme={"gray"}
                  color={"gray.600"}
                  mt={"8px"}
                  mb={"4px"}
                  h={"20px"}
                  fontWeight={"500"}
                  fontSize={"12px"}
                  lineHeight={"16px"}
                  py={"2px"}
                >
                  {doc}
                </Badge>
              );
            })}
            <Box>
              {data.youPractice.caseType.map((doc, index) => {
                return index + 1 === data.youPractice.caseType.length ? (
                  <Text
                    as={"span"}
                    fontSize={"14px"}
                    lineHeight={"20px"}
                    key={doc}
                    fontWeight={"500"}
                    color={"black"}
                  >
                    {doc}
                  </Text>
                ) : (
                  <Text
                    as={"span"}
                    fontSize={"14px"}
                    key={doc}
                    lineHeight={"20px"}
                    fontWeight={"500"}
                    color={"black"}
                  >
                    {doc},{" "}
                  </Text>
                );
              })}
            </Box>
          </Box>
        </Stack>
        <Divider border={'1px solid #E2E8F0'} bg={'gray.200'}/>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          my={"16px"}
          w={"632px"}
        >
          <Time {...timeprops}/>
          <Button
            size={'sm'}
            w={"112px"}
            h={"32px"}
            onClick={onOpen}
            variant={"ghost"}
            colorScheme={"gray"}
          >
            Cancel mock
          </Button>
        </Stack>
      </Box>
      {/*Cancel Modal*/}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cancel mock</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontWeight={"400"}
              fontSize={"16px"}
              lineHeight={"24px"}
              color={"gray.700"}
            >
              Are you sure you want to cancel this mock? You can’t undo this
              action.{" "}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} variant={"ghost"} colorScheme={"gray"}>
              Close
            </Button>
            <Button
              onClick={() => {
                onClose(true);
                toast({
                  title: 'Event Cancelled',
                  status: 'success',
                  duration: 2000,
                  isClosable: true,
                })
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  );
}

export default Created;
