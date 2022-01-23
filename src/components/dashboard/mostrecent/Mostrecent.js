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
  Divider
} from "@chakra-ui/react";
import Time from "../common/Time";
import Partner from "../common/Partner"
import {RocketIcon} from '../../../static/icons/Rocket'
function Mostrecent({data}) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [time15, settime15] = useState(false);
  const [hour, sethour] = useState(0);
  const [minute, setminute] = useState(0);
  const [second, setsecond] = useState(0);


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
    bg: 'white',
    w: '300px',
    h: '20px',
    fontSize:"14px",
    fontWeight:"500",
    lineHeight:"20px",
    px:"0px",
    pt:"0px",
    mt:"-6px",
    datetime: data.datetime
  }

  const partnerprops = {
    side: 1,
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
        w={["360px", "728px", "728px", "728px", "360px"]}
        border={"1px solid #E2E8F0"}
        boxShadow={
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
        }
        borderRadius={"4px"}
        px={"16px"}
        py={"16px"}
      >
        {data.content ? (
          <>
            <Time {...timeprops}/>
            <Divider border={'2px solid #E2E8F0'} bg={'gray.200'} mt={'16px'}/>
            <Partner {...partnerprops}/>
            {/* <Box bg={"gray.200"}  w={"320px"} /> */}
            <Divider border={'2px solid #E2E8F0'} bg={'gray.200'}/>
            <Box my={"16px"}>
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
                      colorScheme={"gray"}
                      color={"gray.600"}
                      mt={"8px"}
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
            <Box>
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
                      colorScheme={"gray"}
                      color={"gray.600"}
                      mt={"8px"}
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
            <Button w={"320px"} h={"40px"} size={'md'} onClick={startmock} mt={'16px'}> 
              Start mock
            </Button>
          </>
        ) : (
          <>
          <Box mt={'24px'} display={'inline-flex'}>
           <Divider h={'48px'} orientation="vertical" border={'4px solid rgba(0, 0, 0, 0.08)'}/>
           <Box w={'298px'} ml={'16px'}>
            <Text fontWeight={'600'} fontSize={'18px'} lineHeight={'24px'} color={'gray.400'}>The secret of getting ahead is getting started.</Text>
           </Box>
          </Box>
          <Box w={'312px'} my={'12px'}>
            <Text fontWeight={'500'} fontSize={'14px'} lineHeight={'20px'} color={'gray.400'}>Join your first mock or create one. Invite your friends to Pearmock and start your interview preparation today!</Text>
          </Box>
          <RocketIcon w={'201px'} h={'184px'} mx={'64px'} mb={'40px'}/>
          </>
        )}
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
    </>
  );
}

export default Mostrecent;
