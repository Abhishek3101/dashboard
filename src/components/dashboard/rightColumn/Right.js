import React, { useState, useRef } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Stack,
  Input,
  Button,
  Circle,
  Tooltip,
  Checkbox,
  Center
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import Joincard from "./joinmock/Joincard";
import Created from "./created/Created";
import Upcomingcard from "./upcoming/Upcomingcard";
import Pastcard from "./past/Pastcard";
import { category1, product, consulting } from "../../../category";

function Right({ data }) {
  const [date, setdate] = useState('')
  const [firstCategory, setfirstCategory] = useState({});
  const [firstcasetype, setfirstcasetype] = useState([]);
  const [firstDisable, setfirstDisable] = useState(true);
  const firstcasetyperef = useRef();
  const dataprop = {
    data: data,
  };

  function firstcaseChange(options) {
    setfirstCategory(options);
    firstcasetyperef.current.select.clearValue();
    setfirstDisable(false);
  }

  function firstcasetypeChange(options) {
    setfirstcasetype(options);
  }

  const past = {
    completed: 20,
    noshowup: 10,
  };

  const [status, setstatus] = useState("none");
  const pastcard = {
    status: status,
    setstatus: setstatus,
    data: data,
  };

  function options(){
      if(firstCategory.value === "Product Management"){
        if(firstcasetype.length===0){
          return product
        }
        else{
          if(firstcasetype[0].label === "Select All"){
            return []
          }
          else{
            return product.slice(1)
          }
        }
      }

      if(firstCategory.value === "Consulting"){
        if(firstcasetype.length===0){
          return consulting
        }
        else{
          if(firstcasetype[0].label === "Select All"){
            return []
          }
          else{
            return consulting.slice(1)
          }
        }
      }
    
  }
  return (
    <Box
      w={["356px", "728px", "728px", "728px", "728px"]}
      h={"800px"}
      border={"1px solid #E2E8F0"}
      boxShadow={
        "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
      }
      borderRadius={"4px"}
    >
      <Tabs isFitted>
        <TabList>
          <Tab>Join a mock</Tab>
          <Tab>Created</Tab>
          <Tab>Upcoming</Tab>
          <Tab>Past</Tab>
        </TabList>

        <TabPanels overflowY="scroll" maxH={"758px"} pl={"16px"}>
          <TabPanel>
            <Box mt={"8px"}>
              <Text
                fontSize={"14px"}
                fontWeight={"500"}
                lineHeight={"20px"}
                w={"302px"}
              >
                Filter by cases that you would like to practice
              </Text>
              <Stack direction={"row"} mt={"12px"} spacing={"12px"}>
                <Box w={"196px"}>
                  <Select
                    options={category1}
                    onChange={firstcaseChange}
                    placeholder={
                      <Text fontSize={"12px"}>Select case category</Text>
                    }
                    name="caseCategory"
                    size="sm"
                  />
                  <Input type={"date"} mt={"12px"} h={"32px"} onChange={e=>setdate(e.target.value)}/>
                </Box>
                <Box w={"380px"}>
                  <Select
                    isMulti
                    closeMenuOnSelect={true}
                    value={firstcasetype.length===0?null:firstcasetype[0].value === "Product Management"?product.slice(1):firstcasetype[0].value === "Consulting"?consulting.slice(1):firstcasetype}
                    isDisabled={firstDisable}
                    name="caseType"
                    options={
                      options()
                    }
                    placeholder="Select case type(s)"
                    onChange={firstcasetypeChange}
                    ref={firstcasetyperef}
                    size="sm"
                  />
                </Box>
                <Button
                  size={"sm"}
                  variant={"ghost"}
                  colorScheme={"gray"}
                  border={"1px solid #E2E8F0"}
                  onClick={() => {
                    console.log(firstCategory, firstcasetype, date);
                  }}
                >
                  Apply
                </Button>
              </Stack>
            </Box>
            {data.content ? (
              <>
                <Text
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"24px"}
                  my={"24px"}
                >
                  Mocks available for you to join
                </Text>
                <Joincard {...dataprop} />
                <Joincard {...dataprop} />
                <Joincard {...dataprop} />
                <Joincard {...dataprop} />
                <Joincard {...dataprop} />
                <Joincard {...dataprop} />
              </>
            ) : (
              <>
                <Stack
                  mx={"160px"}
                  mt={"120px"}
                  fontWeight={"500"}
                  lineHeight={"28px"}
                  color={"gray.400"}
                  w={"385px"}
                  direction={"column"}
                  alignItems={"center"}
                  spacing={0}
                >
                  <Text fontSize={"20px"} mb={"24px"}>
                    No mocks available to join.
                  </Text>
                  <Text fontSize={"18px"}>
                    Don’t worry!{" "}
                    <Text as={"u"} color={"primary.500"}>
                      Create
                    </Text>{" "}
                    your own mock.{" "}
                  </Text>
                  <Text fontSize={"18px"} textAlign={"center"}>
                    <Text as={"u"} color={"primary.500"}>
                      Share
                    </Text>{" "}
                    Pearmock with your friends and invite them to join your
                    practice session.
                  </Text>
                </Stack>
              </>
            )}
          </TabPanel>
          <TabPanel>
            {data.content ? (
              <>
                <Created {...dataprop} />
                <Created {...dataprop} />
                <Created {...dataprop} />
                <Created {...dataprop} />
                <Created {...dataprop} />
                <Created {...dataprop} />
              </>
            ) : (
              <>
                <Stack
                  mt={"186px"}
                  fontWeight={"500"}
                  lineHeight={"28px"}
                  color={"gray.400"}
                  direction={"column"}
                  alignItems={"center"}
                  spacing={0}
                >
                  <Text fontSize={"20px"}>
                    You don’t have any created mocks.
                  </Text>
                  <Text fontSize={"20px"} textAlign={"center"}>
                    <Text as={"u"} color={"primary.500"}>
                      Create
                    </Text>{" "}
                    a mock now!
                  </Text>
                </Stack>
              </>
            )}
          </TabPanel>
          <TabPanel>
            {data.content ? (
              <>
                <Upcomingcard {...dataprop} />
                <Upcomingcard {...dataprop} />
                <Upcomingcard {...dataprop} />
                <Upcomingcard {...dataprop} />
                <Upcomingcard {...dataprop} />
                <Upcomingcard {...dataprop} />
              </>
            ) : (
              <>
                <Center
                  mt={"186px"}
                  fontWeight={"500"}
                  lineHeight={"28px"}
                  color={"gray.400"}
                  alignItems={"center"}
                  spacing={0}
                >
                  <Text fontSize={"20px"}>
                    You don’t have any upcoming mocks.
                  </Text>
                </Center>
              </>
            )}
          </TabPanel>
          <TabPanel>
            {data.content ? (
              <>
                <Stack direction={"row"} justify={"space-between"} mt={"8px"}>
                  <Text
                    fontSize={"16px"}
                    lineHeight={"24px"}
                    fontWeight={"400"}
                  >
                    <Text as={"span"} fontWeight={"700"}>
                      {past.completed}
                    </Text>{" "}
                    mocks completed.
                  </Text>
                  {past.noshowup === 0 ? null : (
                    <>
                      <Box display={"inline-flex"}>
                        <Tooltip
                          hasArrow
                          label="High number of no showups reduces the reliability of your profile."
                          bg="black"
                          color="white"
                          w={"260px"}
                          borderRadius={"4px"}
                        >
                          <Circle
                            size={"24px"}
                            boxShadow={"0px 0px 4px rgba(0, 0, 0, 0.25)"}
                            mr={"4px"}
                            mt={"4px"}
                          >
                            😬
                          </Circle>
                        </Tooltip>
                        <Box borderBottom={"1px dashed #A0AEC0"}>
                          <Text
                            fontSize={"16px"}
                            lineHeight={"24px"}
                            fontWeight={"400"}
                          >
                            <Text as={"span"} fontWeight={"700"}>
                              {past.noshowup}
                            </Text>{" "}
                            {past.noshowup === 1 ? (
                              <>no show-up</>
                            ) : (
                              <>no show-ups</>
                            )}
                          </Text>
                        </Box>
                      </Box>
                    </>
                  )}
                </Stack>
                <Box mt={"16px"} mb={"24px"}>
                  <Checkbox size={"lg"} spacing={"8px"}>
                    <Text
                      fontWeight={"400"}
                      fontSize={"12px"}
                      lineHeight={"16px"}
                    >
                      Show unpaired mocks you created.
                    </Text>
                  </Checkbox>
                </Box>
                <Pastcard {...pastcard} />
                <Pastcard {...pastcard} />
                <Pastcard {...pastcard} />
                <Pastcard {...pastcard} />
                <Pastcard {...pastcard} />
              </>
            ) : (
              <>
                <Center
                  mt={"186px"}
                  fontWeight={"500"}
                  lineHeight={"28px"}
                  color={"gray.400"}
                  alignItems={"center"}
                  spacing={0}
                >
                  <Text fontSize={"20px"}>You don’t have any past mocks.</Text>
                </Center>
              </>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Right;
