import React, { useState } from "react";
import {
  Box,
  Text,
  Tag,
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
  Radio,
  RadioGroup,
  FormControl,
  FormErrorMessage,
  TagLabel,
  TagRightIcon,
  Divider
} from "@chakra-ui/react";
import {
  CloseIcon,
  CheckIcon
} from "@chakra-ui/icons";
import Time from '../../common/Time'
import Partner from "../../common/Partner"

function Pastcard({ status, setstatus,data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState(null);
  const [error, seterror] = useState(false);

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

  const partnerprops = {
    side: 0,
    heading: "PARTNER",
    partnerName: data.partner.name,
    partnerEmail: data.partner.gmail,
    partnerLinkedin: data.partner.linkedin,
    partnerMocksCompleted: data.partner.mockCompleted,
    partnerwork: data.partner.work
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
        pt={'8px'}
      >
        <>
          <Partner {...partnerprops}/>
          <Box my={"16px"} w={"632px"}>
            {data.youTake.category.map((doc) => {
              return (
                <Badge
                  key={doc}
                  mr={"8px"}
                  colorScheme={"gray"}
                  color={"gray.600"}
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
          <Divider border={'1px solid #E2E8F0'} bg={'gray.200'}/>

          <Box my={"16px"} w={"632px"}>
            <Stack direction={"row"}>
              <Text
                fontWeight={"400"}
                fontSize={"14px"}
                lineHeight={"20px"}
                color={"gray.400"}
              >
                YOU
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
            </Stack >
            <Box w={"632px"} mt={'8px'}>
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
          <Divider border={'1px solid #E2E8F0'} bg={'gray.200'}/>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            my={"16px"}
            w={"632px"}
          >
            <Time {...timeprops}/>
            {status === "complete" ? (
              <>
                <Tag size={"lg"} colorScheme={"green"}>
                  <TagLabel>
                    <Text
                      fontWeight={"500"}
                      fontSize={"16px"}
                      lineHeight={"24px"}
                      color={"green.600"}
                    >
                      Completed
                    </Text>
                  </TagLabel>
                  <TagRightIcon as={CheckIcon} boxSize={"7px"} />
                </Tag>
              </>
            ) : (
              <>
                {status === "incomplete" ? (
                  <>
                    <Tag size={"lg"}>
                      <TagLabel>
                        <Text
                          fontWeight={"500"}
                          fontSize={"16px"}
                          lineHeight={"24px"}
                          color={"#F64B4B"}
                        >
                          Not completed
                        </Text>
                      </TagLabel>
                      <TagRightIcon as={CloseIcon} boxSize={"7px"} />
                    </Tag>
                  </>
                ) : (
                  <Stack direction={'row'} spacing={'8px'}>
                    <Button
                      w={"138px"}
                      h={"32px"}
                      size={"sm"}
                      variant={"outline"}
                      colorScheme={"gray"}
                      onClick={onOpen}
                    >
                      Mark incomplete
                    </Button>
                    <Button
                      w={"126px"}
                      h={"32px"}
                      size={"sm"}
                      onClick={() => {
                        setstatus("complete");
                      }}
                    >
                      Mark complete
                    </Button>
                  </Stack>
                )}
              </>
            )}
          </Stack>
        </>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Report incomplete mock
            <Text
              fontSize={"14px"}
              lineHeight={"20px"}
              fontWeight={"400"}
              color={"gray.500"}
              mt={"12px"}
            >
              Oh! We are sorry to hear your mock interview did not occur. Please
              select one of the following reasons for the non-occurance of the
              interview to help us improve your experience on the platform.
            </Text>
          </ModalHeader>
          <ModalCloseButton mt={"8px"} />
          <ModalBody>
            <FormControl isInvalid={error}>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column">
                  <Radio
                    value="I could not show up for the mock interview"
                    size={"lg"}
                  >
                    <Text
                      fontSize={"14px"}
                      lineHeight={"20px"}
                      fontWeight={"400"}
                      color={"gray.600"}
                    >
                      I could not show up for the mock interview
                    </Text>
                  </Radio>
                  <Radio
                    value="My partner did not show up for the mock interview"
                    size={"lg"}
                  >
                    <Text
                      fontSize={"14px"}
                      lineHeight={"20px"}
                      fontWeight={"400"}
                      color={"gray.600"}
                    >
                      My partner did not show up for the mock interview
                    </Text>
                  </Radio>
                  <Radio
                    value="We had technical problems during the meeting"
                    size={"lg"}
                  >
                    <Text
                      fontSize={"14px"}
                      lineHeight={"20px"}
                      fontWeight={"400"}
                      color={"gray.600"}
                    >
                      We had technical problems during the meeting
                    </Text>
                  </Radio>
                  <Radio
                    value="We started but the 90 minute meeting duration was not sufficient"
                    size={"lg"}
                  >
                    <Text
                      fontSize={"14px"}
                      lineHeight={"20px"}
                      fontWeight={"400"}
                      color={"gray.600"}
                    >
                      We started but the 90 minute meeting duration was not
                      sufficient
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
              {error ? (
                <FormErrorMessage>
                  Please select a reason for incomplete mock.
                </FormErrorMessage>
              ) : null}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              size={"sm"}
              variant={"outline"}
              colorScheme={"gray"}
              mr={"12px"}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (value === null) {
                  seterror(true);
                } else {
                  setstatus("incomplete");
                  onClose(true)
                  console.log(value)
                }
              }}
              size={"sm"}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Pastcard;
