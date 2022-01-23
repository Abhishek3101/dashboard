import React, { useState, useRef, useEffect } from "react";
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
  FormHelperText,
  Box,
} from "@chakra-ui/react";

import { Select } from "chakra-react-select";
import Joinconfirm from "./Joinconfirm";

function Joinmodal({ IsOpenfunc, IsOpen, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen2, setisOpen2] = useState(false);
  const [firstCategory, setfirstCategory] = useState({});
  const [firstcasetype, setfirstcasetype] = useState([]);
  const [firstDisable, setfirstDisable] = useState(true);
  const firstcasetyperef = useRef();
  const isInvalid = firstCategory.length === 0 || firstcasetype.length === 0;
  var category = [];
  var caseType = [];
  useEffect(() => {
    if (IsOpen) {
      onOpen(true);
    }
  }, [IsOpen, onOpen]);

  const info = {
    modalClose: onClose,
    isOpenfunc: setisOpen2,
    isOpen2: isOpen2,
    youPractice: {
      category: firstCategory,
      caseType: firstcasetype,
    },
    youTake: data.youTake,
    datetime: data.datetime,
    name: data.partner.name
  };

  function create() {
    setisOpen2(true);
  }

  function firstcaseChange(options) {
    setfirstCategory(options);
    firstcasetyperef.current.select.clearValue();
    setfirstDisable(false);
  }

  function firstcasetypeChange(options) {
    setfirstcasetype(options);
  }

  return (
    <>
      {data.youPractice.category.map((doc) => {
        var obj = {
          value: doc,
          label: doc,
        };
        category.push(obj);
        return null
      })}
      {data.youPractice.caseType.map((doc) => {
        var obj = {
          value: doc,
          label: doc,
        };
        caseType.push(obj);
        return null
      })}
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={"xl"}
        boxShadow={
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <FormControl>
              What would you like to practice in this mock?
              <FormHelperText fontSize={"14px"}>
                Select one or more case types from the ones offered by{" "}
                {data.partner.name}.
              </FormHelperText>
            </FormControl>
          </ModalHeader>

          <ModalCloseButton size={"sm"} mt={"13px"} onClick={()=>(IsOpenfunc(false))}/>
          <ModalBody>
            <Box my={"8px"}>
              <Select
                options={category}
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
                options={caseType}
                placeholder="Select case type(s)"
                closeMenuOnSelect={false}
                onChange={firstcasetypeChange}
                ref={firstcasetyperef}
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                onClose(true);
                IsOpenfunc(false);
              }}
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
            <Button
              onClick={create}
              size={"sm"}
              w={"111px"}
              h={"32px"}
              isDisabled={isInvalid}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isOpen2 && <Joinconfirm {...info} />}
    </>
  );
}

export default Joinmodal;
