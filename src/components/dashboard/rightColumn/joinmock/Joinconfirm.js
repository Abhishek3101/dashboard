import React, { useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Circle,
  HStack,
  Text,
  Box,
  Badge,
} from "@chakra-ui/react";
import Time from '../../common/Time'
function Joinconfirm({
  isOpen2,
  youPractice,
  youTake,
  datetime,
  isOpenfunc,
  modalClose,
  name
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (isOpen2) {
      onOpen(true);
    }
  }, [isOpen2, onOpen]);

  const [confirm, setconfirm] = useState(false);
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
    datetime:datetime
  }
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={"lg"}
        boxShadow={
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }
      >
        <ModalOverlay />
        <ModalContent w={"512px"}>
          <ModalHeader w={"512px"}>
            {confirm ? (
              <>
                <HStack>
                  <Circle w={10} h={10} bg={"green.500"} color={"white"}>
                    <CheckIcon />
                  </Circle>
                  <Text>Mock created!</Text>
                </HStack>
              </>
            ) : (
              <>Confirm mock details</>
            )}
          </ModalHeader>
          <ModalCloseButton mt={"10px"} mr={"10px"} />
          <ModalBody w={"512px"}>
            <Box>
              <Text
                fontWeight={"500"}
                fontSize={"14px"}
                lineHeight={"20px"}
                color={"gray.400"}
              >
                PARTNER
              </Text>
              {youTake.category.map((doc) => {
                return (
                  <Badge
                    key={doc}
                    mr={"8px"}
                    colorScheme={"gray"}
                    color={"gray.600"}
                    my={"8px"}
                  >
                    {doc}
                  </Badge>
                );
              })}

              <Box>
                {youTake.caseType.map((doc, index) => {
                  return index + 1 === youTake.caseType.length ? (
                    <Text
                      as={"span"}
                      key={doc}
                      fontSize={"14px"}
                      fontWeight={"500"}
                      color={"gray.800"}
                    >
                      {doc}
                    </Text>
                  ) : (
                    <Text
                      as={"span"}
                      key={doc}
                      fontSize={"14px"}
                      fontWeight={"500"}
                      color={"gray.800"}
                    >
                      {doc},{" "}
                    </Text>
                  );
                })}
              </Box>
            </Box>

            <Box my={"24px"}>
              <Text
                fontWeight={"500"}
                fontSize={"14px"}
                lineHeight={"20px"}
                color={"gray.400"}
              >
                YOU
              </Text>

              <Badge
                key={youPractice.category.value}
                mr={"8px"}
                colorScheme={"gray"}
                color={"gray.600"}
                my={"8px"}
              >
                {youPractice.category.value}
              </Badge>

              <Box>
                {youPractice.caseType.map((doc, index) => {
                  return index + 1 === youPractice.caseType.length ? (
                    <Text
                      as={"span"}
                      fontSize={"14px"}
                      key={index}
                      fontWeight={"500"}
                      color={"gray.800"}
                    >
                      {doc.value}
                    </Text>
                  ) : (
                    <Text
                      as={"span"}
                      fontSize={"14px"}
                      key={index}
                      fontWeight={"500"}
                      color={"gray.800"}
                    >
                      {doc.value},{" "}
                    </Text>
                  );
                })}
              </Box>
            </Box>
            <Time {...timeprops} />
            {confirm ? (
              <>
                <Box
                  bg={"gray.300"}
                  height={"2px"}
                  w={"464px"}
                  mt={"24px"}
                  mb={"16px"}
                />
              </>
            ) : (
              <>
                <Text
                  fontSize={"12px"}
                  fontWeight={"400"}
                  lineHeight={"16px"}
                  color={"#F42A2A"}
                >
                  ⚠ Please make sure that you’ll be available on this date and
                  time.
                </Text>
              </>
            )}

            {confirm ? (
              <>
                <Text fontSize={"14px"} lineHeight={"20px"}>
                  You have successfully joined this mock. Please join the
                  session on time and <Text as={'u'}>don’t forget to prepare a case</Text> for {name}
                  before your session! All the best and we hope you have an
                  awesome mock interview. 🚀
                </Text>
              </>
            ) : (
              <>
                <Text fontSize={"14px"} lineHeight={"20px"} my={"16px"}>
                  Review the details and confirm your availability for the
                  session.
                </Text>
              </>
            )}
          </ModalBody>
          <ModalFooter w={"512px"}>
            {confirm ? (
              <>
                <Button onClick={onClose}>Done</Button>
              </>
            ) : (
              <>
                <Button
                  variant={"outline"}
                  colorScheme={"gray"}
                  mr={3}
                  onClick={() => {
                    onClose(true);
                    isOpenfunc(false);
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={() => {
                    setconfirm(true);
                    modalClose(true);
                  }}
                  w={"186px"}
                  fontSize={"14px"}
                  fontWeight={"600"}
                  lineHeight={"20px"}
                >
                  Confirm & join the mock
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Joinconfirm;
