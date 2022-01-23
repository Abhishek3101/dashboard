import React, { useState } from "react";
import { Box, Text, Badge, Button, Stack, Divider } from "@chakra-ui/react";
import Slotclash from "./Slotclash";
import Joinmodal from "./Joinmodal";
import Time from "../../common/Time";
import Partner from "../../common/Partner";

function Joincard({ data }) {
  const [slot, setslot] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
  const slotclash = {
    clash: slot,
  };

  const info = {
    IsOpenfunc: setisOpen2,
    IsOpen: isOpen2,
    data: data,
  };

  function startmock() {
    var eventTime = data.datetime;
    var left_time = new Date("January 1, 2022 23:35:00");
    left_time.setMinutes(left_time.getMinutes() - 90);
    var right_time = new Date("January 1, 2022 23:35:00");
    right_time.setMinutes(right_time.getMinutes() + 90);
    if (
      eventTime.toUTCString() > right_time.toUTCString() ||
      eventTime.toUTCString() < left_time.toUTCString()
    ) {
      setslot(false);
      setisOpen2(true);
    } else {
      setslot(true);
    }
  }

  const timeprops = {
    bg: "gray.100",
    w: "350px",
    h: "32px",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    px: "16px",
    pt: "5px",
    mt: "-7px",
    datetime: data.datetime,
  };

  const partnerprops = {
    side: 0,
    heading: null,
    partnerName: data.partner.name,
    partnerEmail: data.partner.gmail,
    partnerLinkedin: data.partner.linkedin,
    partnerMocksCompleted: data.partner.mockCompleted,
    partnerwork: data.partner.work,
  };

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
        <Partner {...partnerprops} />
        <Divider border={"1px solid #E2E8F0"} bg={"gray.200"} />
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
          <Box w={"300px"}>
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
        <Divider border={"1px solid #E2E8F0"} bg={"gray.200"} />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          my={"16px"}
          w={"632px"}
        >
          <Time {...timeprops} />
          <Button w={"94px"} h={"32px"} size={"sm"} onClick={startmock}>
            Join mock
          </Button>
        </Stack>
      </Box>
      <Slotclash {...slotclash} />
      <Joinmodal {...info} />
    </>
  );
}

export default Joincard;
