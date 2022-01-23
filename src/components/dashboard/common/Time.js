import React from "react";
import {Center, Box, Text} from '@chakra-ui/react'
import {CalendarIcon} from '../../../static/icons/CalendarIcon'
import {ClockIcon} from '../../../static/icons/ClockIcon'
function Time({bg,w,h,fontSize,fontWeight,lineHeight,px,pt,mt,datetime}) {

 const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    ];

  const endTime = new Date(datetime.getTime() + 90 * 60000);
  function getTime(time){
    const t = new Date(time)
    if(t.getHours()<12){
      if(t.getHours()<10){
        if(t.getMinutes()<10){
          return `0${t.getHours()}:0${t.getMinutes()} AM`
        }
        else{
          return `0${t.getHours()}:${t.getMinutes()} AM`
        }
      }
      else{
        if(t.getMinutes()<10){
          return `${t.getHours()}:0${t.getMinutes()} AM`
        }
        else{
          return `${t.getHours()}:${t.getMinutes()} AM`
        }
      }
    }
    else {
      if(t.getHours()-12<10){
        if(t.getMinutes()<10){
          return `0${t.getHours()-12}:0${t.getMinutes()} PM`
        }
        else{
          return `0${t.getHours()-12}:${t.getMinutes()} PM`
        }
      }
      else{
        if(t.getMinutes()<10){
          return `${t.getHours()-12}:0${t.getMinutes()} PM`
        }
        else{
          return `${t.getHours()-12}:${t.getMinutes()} PM`
        }
      }
    }
  }
  return (
    <Center
      justifyContent={"space-between"}
      bg={bg}
      w={w}
      h={h}
      borderRadius={"8px"}
      pt={pt}
      px={px}
    >
      <Box display={"inline-flex"}>
        <Box>
          <CalendarIcon mt={mt} w={'20px'} h={'20px'}/>
        </Box>

        <Box>
          <Text
            ml={"7px"}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
          >
            {datetime.getDate()} {monthNames[datetime.getMonth()]}{" "}
            {datetime.getFullYear()}
          </Text>
        </Box>
      </Box>
      <Box display={"inline-flex"}>
        <Box>
          <ClockIcon mt={mt} w={'20px'} h={'20px'}/>
        </Box>

        <Box>
          <Text
            ml={"7px"}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
          >
            {getTime(datetime)} - {getTime(endTime)}
          </Text>
        </Box>
      </Box>
    </Center>
  );
}

export default Time;
