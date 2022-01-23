import {
    Text,
    Stack,
    Box,
    Center,
    VStack,
    Button
  } from '@chakra-ui/react';
import Goalcard from './components/dashboard/goal/Goalcard';
import Createmock from './components/dashboard/createmock/Cratemock'
import Mostrecent from './components/dashboard/mostrecent/Mostrecent';
import Right from './components/dashboard/rightColumn/Right'
import Logo from './static/icons/Logo'
import React from 'react'
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
  export default function Dashboard() {

    const {signOutUser} = useAuth()
    const navigate = useNavigate()
    const goal = {
      mocks : 8
    }

    const data = {
      content: true,
      datetime: new Date("January 7, 2022 21:30:00"),
      partner: {
        name: "Abhishek Agrawal",
        linkedin: "https://www.linkedin.com/in/abhishek-agrawal-8766931a5/",
        gmail: "abhishek.agrawal3101@gmail.com",
        mockCompleted: 20,
        work: "Undergraduate student at IIT Kharagpur",
      },
      youTake: {
        category: ["Product management"],
        caseType: ["Root cause Analysis", "Product Design", "Guesstimate"],
      },
      youPractice: {
        category: ["Product management"],
        caseType: ["Product Improvement", "Product Design"],
      },
      meetLink: "https://meet.google.com/qwp-scmc-iup",
    };

    const dataprop = {
      data: data
    }
  
    


    return (
      <>
        <Center h={"64px"} bg={"gray.500"}>
          App Bar
          <Button onClick={()=>{
            signOutUser().then(()=>{
              localStorage.removeItem('userlocal')
              navigate('/dashboard',{replace:true})
            })
    
          }}>Log Out</Button>
        </Center>
        <Center
          px={["10px", "10px", "10px", "100px", "100px"]}
          pb={["10px", "64px", "64px", "192px", "192px"]}
          pt={["10px", "10px", "10px", "48px", "48px"]}
        >
          <VStack spacing={"24px"}>
            <Box w={{ md: "728px", lg: "728px", xl: "1124px" }}>
              <Text
                w={"127px"}
                fontWeight={"600"}
                fontSize={"24px"}
                lineHeight={"32px"}
              >
                Dashboard
              </Text>
            </Box>
            <Stack
              spacing={"52px"}
              direction={["column", "column", "column", "column", "row"]}
            >
              <Box w={["356px", "728px", "728px", "728px", "356px"]}>
                <VStack spacing={"24px"}>
                  <Box w={["356px", "728px", "728px", "728px", "356px"]}>
                    <Goalcard {...goal} />

                    <Createmock />
                  </Box>
                  <Mostrecent {...dataprop} />
                </VStack>
              </Box>
              <Right {...dataprop} />
            </Stack>
          </VStack>
        </Center>
        <Center h={"217px"} bg={"#F7F7F7"}>
          <Stack direction={"column"} w={"1096px"} h={"136px"}>
            <Logo w={"117px"} h={"32px"} />
            <Stack direction={"row"} justify={"space-between"}>
              <Box w={"576px"}>
                <Text fontSize={"14px"} fontWeight={"400"} lineHeight={"20px"}>
                  Pearmock is a community driven platform for finding peers for
                  interview preparation. Find your peers and start practicing
                  today!
                </Text>
              </Box>
              <Box w={"344px"} h={"92px"}>
                <Stack direction={"row"} justify={"space-between"}>
                  <Box>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      w={"116px"}
                    >
                      About
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      mt={"16px"}
                      w={"116px"}
                    >
                      Contact Us
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      mt={"16px"}
                      w={"116px"}
                    >
                      Resources
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      w={"116px"}
                    >
                      Help
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      mt={"16px"}
                      w={"116px"}
                    >
                      Sitemap
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Center>
        <Center h={"48px"} bg={"#EFEFEF"}>
          <Stack w={"1096px"} direction={"row"}>
            <Text
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"20px"}
              mr={"40px"}
            >
              &copy; 2021 Pearmock, All rights reserved{" "}
            </Text>
            <Text fontSize={"14px"} fontWeight={"400"} lineHeight={"20px"}>
              Terms of use
            </Text>
          </Stack>
        </Center>
      </>
    );
  }
