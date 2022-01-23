import React, { useState } from "react";
import {
  Box,
  Text,
  Badge,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Square,
  Stack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Divider
} from "@chakra-ui/react";
import { HamburgerIcon } from "../../../../static/icons/HamburgerIcon";
import Upcomingcancel from "./Upcomingcancel";
import Time from '../../common/Time'
import Partner from "../../common/Partner"

function Upcomingcard({data}) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [time15, settime15] = useState(false);
  const [hour, sethour] = useState(0);
  const [minute, setminute] = useState(0);
  const [second, setsecond] = useState(0);

  const [open, setopen] = useState(false)
  const info = {
      open: open,
      setopen: setopen
  }
  function startmock() {
    const t_current = new Date();
    if (t_current - data.datetime > -15 * 60000) {
      settime15(true);
      onOpen(true);
    } else {
      settime15(false);
      onOpen(true);
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = data.datetime.getTime() - now;

        // Time calculations for days, hours, minutes and seconds
        sethour(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setminute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setsecond(Math.floor((distance % (1000 * 60)) / 1000));

        if (distance < 15 * 60000) {
          clearInterval(x);
          settime15(true);
        }
      }, 1000);
    }
  }

  function joinmeet() {
    onClose(true);
    window.open(data.meetLink);
  }

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
        my={'24px'}
      >
        <>
          <Stack direction={'row'} justify={'space-between'} w={"632px"} mt={'8px'}>
            <Partner {...partnerprops}/>
            <Menu offset={[-180,0]}>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon w={'24px'} h={'24px'} />}
                variant="ghost"
                colorScheme={'gray'}
              />
              <MenuList>
                <MenuItem onClick={()=>{setopen(true)}}> 
                  Cancel mock
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Divider border={'1px solid #E2E8F0'} bg={'gray.200'}/>
          <Stack
          direction={"row"}
          justify={"space-between"}
          w={"632px"}
          py={"16px"}
        >
          <Box w={"300px"}>
            <Text
              fontWeight={"600"}
              fontSize={"12px"}
              lineHeight={"16px"}
              color={"gray.400"}
            >
              YOU WILL TAKE
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
          <Box w={"300px"}>
            <Text
              fontWeight={"600"}
              fontSize={"12px"}
              lineHeight={"16px"}
              color={"gray.400"}
            >
              YOU WILL PRACTICE
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
            <Button w={"99px"} h={"32px"} onClick={startmock} size={'sm'}>
              Start mock
            </Button>
          </Stack>
        </>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {time15 ? <>Are you Ready!</> : <>Join meet in</>}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              {time15 ? (
                <>Hope you Enjoy and Learn from this mock. All the Best! 👍</>
              ) : (
                <>
                  <Square size={"50px"} bg={"gray.100"}>
                    {hour < 10 ? `0${hour}` : hour}
                  </Square>
                  :
                  <Square size={"50px"} bg={"gray.100"}>
                    {minute < 10 ? `0${minute}` : minute}
                  </Square>
                  :
                  <Square size={"50px"} bg={"gray.100"}>
                    {second < 10 ? `0${second}` : second}
                  </Square>
                </>
              )}
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button onClick={joinmeet} isDisabled={!time15}>
              Join Meet
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {open && <Upcomingcancel {...info}/>}
    </>
  );
}

export default Upcomingcard;
