import React, { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Input,
  HStack,
  Box,
  FormErrorMessage
} from "@chakra-ui/react";

import { Select } from "chakra-react-select";
import ConfirmModal from "./ConfirmModal";
import {category,category1,productmodal,consultingmodal,bothmodal} from '../../../category'
import TimeSelector from "../common/TimeSelector";
function Cratemock() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen2, setisOpen2] = useState(false)
  const [firstCategory, setfirstCategory] = useState({});
  const [firstcasetype, setfirstcasetype] = useState([]);
  const [firstDisable, setfirstDisable] = useState(true);
  const firstcasetyperef = useRef();
  const [secondCategory, setsecondCategory] = useState({});
  const [secondcasetype, setsecondcasetype] = useState([]);
  const [secondDisable, setsecondDisable] = useState(true);
  const secondcasetyperef = useRef();
  const [date, setdate] = useState('')
  const [time, settime] = useState('')
  const isInvalid = firstCategory.length === 0 || firstcasetype.length === 0 || secondCategory.length === 0 || secondcasetype.length === 0 || time === '' || date === '';
  const [slot, setslot] = useState(false)
  const info = {
    isOpen2: isOpen2,
    youPractice: {
      category: firstCategory,
      caseType: firstcasetype
    },
    youTake: {
      category: secondCategory,
      caseType: secondcasetype
    },
    datetime: new Date(`${date}T${time}`)
  }




  function create() {
    var eventTime = new Date(`${date}T${time}`)
    var left_time = new Date("December 31, 2021 22:00:00")
    left_time.setMinutes(left_time.getMinutes() - 90)
    var right_time = new Date("December 31, 2021 22:00:00")
    right_time.setMinutes(right_time.getMinutes() + 90)
    if(eventTime.toUTCString()>right_time.toUTCString() || (eventTime.toUTCString()<left_time.toUTCString())){
      setslot(false)
      onClose(true)
      setisOpen2(true)
    }
    else{
      setslot(true)
    }


  }

  function firstcaseChange(options) {
    setfirstCategory(options);
    firstcasetyperef.current.select.clearValue();
    setfirstDisable(false);
  }

  function firstcasetypeChange(options) {
    setfirstcasetype(options);
  }

  function secondcaseChange(options) {
    setsecondCategory(options);
    secondcasetyperef.current.select.clearValue();
    setsecondDisable(false);
  }

  function secondcasetypeChange(options) {
    setsecondcasetype(options);
  }

  const timerprops = {
    value: time,
    setvalue: settime,
    isInavlid: slot
  }

  function today(){
    const date = new Date();
    const datestring = date.toLocaleDateString(undefined, {year:'numeric'}) + '-' + date.toLocaleDateString(undefined, {month:'2-digit'}) + '-' + date.toLocaleDateString(undefined, {day:'2-digit'})
    console.log(datestring)
    return datestring
  }
  return (
    <>
      <Button
        h={"40px"}
        w={["360px", "360px", "360px", "360px", "360px"]}
        onClick={onOpen}
        boxShadow={'0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'}
      >
        Create a mock +
      </Button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={"xl"}
        boxShadow={'0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  >
            <FormControl>
              Create a mock interview
              <FormHelperText fontSize={'14px'}>
                Carefully add the following details to create a mock interview.
              </FormHelperText>
            </FormControl>
          </ModalHeader>

          <ModalCloseButton size={"sm"} mt={'15px'} mr={'25px'}/> 
          <ModalBody >
            <FormControl isRequired> 
            <Box>
              
              <FormLabel>
                Which case(s) would you like to practice as an interviewee?
              </FormLabel>
              </Box>
              <Box my={'8px'}>
              <Select
                options={category1}
                onChange={firstcaseChange}
                placeholder="Select case category"
                name="caseCategory"
              />
              </Box>
              <Box>
              <Select
                isMulti
                isDisabled={firstDisable}
                name="caseType"
                options={
                  firstCategory.value === "Product Management"
                    ? productmodal
                    : consultingmodal
                }
                placeholder="Select case type(s)"
                closeMenuOnSelect={false}
                onChange={firstcasetypeChange}
                ref={firstcasetyperef}
              />
              
            </Box>
            </FormControl>
            {/*Second form control for the modal */}
            <FormControl isRequired>
              <Box mt={'24px'}>
              <FormLabel>
                Which case(s) can you take as an interviewer?
              </FormLabel>
              </Box>
              <Box>
              <Text fontWeight={"400"} fontSize={"13px"} lineHeight={'16px'}>
                Select cases where you can provide genuine and actionable
                feedback to your peer.
              </Text>
              </Box>
              <Box my={'8px'}>
              <Select
                options={category}
                onChange={secondcaseChange}
                placeholder="Select case category"
                name="secondcaseCategory"
              />
              </Box>
              <Box>
              <Select
                isMulti
                isDisabled={secondDisable}
                name="secondcaseType"
                options={
                  secondCategory.value === "Product Management"
                    ? productmodal
                    : secondCategory.value === "Consulting"
                    ? consultingmodal
                    : bothmodal
                }
                placeholder="Select case type(s)"
                closeMenuOnSelect={false}
                onChange={secondcasetypeChange}
                ref={secondcasetyperef}
              />
              </Box>
            </FormControl>
            <FormControl isRequired isInvalid={slot}>
              <Box mt={'24px'}><FormLabel>Select the date and start time</FormLabel></Box>
              <Text fontWeight={"400"} fontSize={"13px"} lineHeight={'16px'}>
                While selecting, please make sure you will be available for the
                mock interview on the specified date and time.
                <Text as="span" decoration={"underline"}>
                  All mocks are of 90 minutes.
                </Text>
              </Text>
              <Box mt={'16px'}>
              <HStack>
                <Input type={'date'} value={date} onChange={e=>{setdate(e.target.value)}} isInvalid={slot} min={today()} max={'2022-03-10'}/>
                <TimeSelector {...timerprops}/>
                {/* <Input type={'datetime-local'} value={time} onChange={e=>{settime(e.target.value)}} isInvalid={slot}/> */}
              </HStack>
              </Box>
              {slot?<FormErrorMessage>This slot is clashing with one of your other mock interviews. Please select a different date-time combination and try again.</FormErrorMessage>:null}
            </FormControl>
          </ModalBody>
          <ModalFooter >
            <Button
              onClick={onClose}
              mr={"12px"}
              size={"sm"}
              variant={"ghost"}
              color={"black"}
              border={"1px solid #E2E8F0"}
              w={"72px"}
              h={"32px"}
            >
              Cancel
            </Button>
            <Button onClick={create} size={"sm"} w={"111px"} h={"32px"} isDisabled={isInvalid}>
              Create Mock
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*Confirmation Modal*/}
      <ConfirmModal {...info}/>
    </>
  );
}

export default Cratemock;
