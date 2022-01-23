import React, { useEffect } from "react";
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
  Badge
} from "@chakra-ui/react";
import Time from '../common/Time'
function ConfirmModal({ isOpen2, youPractice, youTake, datetime }) {

  // console.log(isOpen2,youPractice,youTake,datetime)
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (isOpen2) {
      onOpen(true);
    }
  }, [isOpen2, onOpen]);

  const timeprops = {
    bg: 'gray.100',
    w: '370px',
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
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"xl"} boxShadow={'0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)'}>
        <ModalOverlay />
        <ModalContent w={"512px"}>
          <ModalHeader w={"512px"}>
            <HStack>
              <Circle w={10} h={10} bg={"green.500"} color={"white"}>
                <CheckIcon />
              </Circle>
              <Text>Mock created!</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton mt={"10px"} mr={"10px"} />
          <ModalBody w={"512px"}>
            <Box>
              <Text>YOU WILL PRACTICE</Text>
              {youPractice.category.label === "Both" ? (
                youPractice.category.value.map((doc) => {
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
                })
              ) : (
                <Badge colorScheme={"gray"} color={"gray.600"} my={"8px"}>
                  {youPractice.category.value}
                </Badge>
              )}

              <Box>
                {youPractice.caseType.map((doc, index) => {
                  return index + 1 === youPractice.caseType.length ? (
                    <Text
                      as={"span"}
                      key={doc.value}
                      fontSize={"14px"}
                      fontWeight={"500"}
                      color={"gray.800"}
                    >
                      {doc.value}
                    </Text>
                  ) : (
                    <Text
                      as={"span"}
                      key={doc.value}
                      fontSize={"14px"}
                      fontWeight={"500"}
                      color={"gray.800"}
                    >
                      {doc.value},{" "}
                    </Text>
                  );
                })}
              </Box>
            </Box>
            {/*Yoou will practice box*/}
            <Box my={"24px"}>
              <Text>YOU WILL TAKE</Text>
              {youTake.category.label === "Both" ? (
                youTake.category.value.map((doc) => {
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
                })
              ) : (
                <Badge colorScheme={"gray"} color={"gray.600"} my={"8px"}>
                  {youTake.category.value}
                </Badge>
              )}
              <Box>
                {youTake.caseType.map((doc, index) => {
                  return index + 1 === youTake.caseType.length ? (
                    <Text
                      as={"span"}
                      fontSize={"14px"}
                      key={doc.value}
                      fontWeight={"500"}
                      color={"gray.800"}
                    >
                      {doc.value}
                    </Text>
                  ) : (
                    <Text
                      as={"span"}
                      fontSize={"14px"}
                      key={doc.value}
                      fontWeight={"500"}
                      color={"gray.800"}
                    >
                      {doc.value},{" "}
                    </Text>
                  );
                })}
              </Box>
            </Box>
            <Time {...timeprops}/>
            <Box bg={"gray.300"} height={"2px"} w={"464px"} mt={'24px'}/>
            <Box my={"16px"} w={"464px"} h={"80px"}>
              <Text fontSize={"14px"} lineHeight={"20px"}>
                You will receive a calendar invitation as soon as a partner
                joins this mock session. Please be on time for the session and{" "}
                <Text as={"u"}>don’t forget to prepare a case </Text> for your
                partner before the session! All the best and we hope you have an
                awesome mock interview. 🚀
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter w={"512px"} mt={"36px"}>
            <Button onClick={onClose}>Done</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmModal;
