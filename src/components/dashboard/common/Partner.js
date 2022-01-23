import React from "react";
import { Box, Text, Icon, Tag, useToast, Center } from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import { FaLinkedin } from "react-icons/fa";
function Partner({
  side,
  heading,
  partnerName,
  partnerEmail,
  partnerLinkedin,
  partnerMocksCompleted,
  partnerwork,
}) {
  const toast = useToast();
  return (
    <>
      {side ? (
        <Box my={"16px"}>
          <Text
            fontWeight={"600"}
            fontSize={"12px"}
            lineHeight={"16px"}
            color={"gray.400"}
          >
            {heading}
          </Text>
          <Box display={"inline-flex"} mt={"8px"}>
            <Text
              fontWeight={"600"}
              fontSize={"16px"}
              lineHeight={"24px"}
              color={"gray.800"}
              isTruncated
            >
              {partnerName}
            </Text>
          </Box>
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            lineHeight={"20px"}
          >
            {partnerwork}
          </Text>
          <Center w={'188px'} mt={'4px'}>
          <AtSignIcon
              w={"16px"}
              h={"16px"}
              color={"blue.600"}
              mr={"4px"}
              cursor={"pointer"}
              onClick={(e) => {
                navigator.clipboard.writeText(partnerEmail);
                toast({
                  title: "Copied to clipboard",
                  description: "Partner Email is copied to your clipboard",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              }}
            />
            <Icon
              as={FaLinkedin}
              w={"16px"}
              h={"16px"}
              color={"blue.600"}
              cursor={"pointer"}
              onClick={(event) => window.open(partnerLinkedin)}
            />
            <Tag
              w={"140px"}
              h={"20px"}
              bg={"#EFF8B5"}
              px={"8px"}
              py={"2px"}
              ml={"12px"}
            >
              <Text
                fontSize={"12px"}
                fontWeight={"700"}
                lineHeight={"16px"}
                color={"#B4CC14"}
              >
                {partnerMocksCompleted} mocks completed
              </Text>
            </Tag>
          </Center>
        </Box>
      ) : (
        <Box my={"16px"}>
          <Text
            fontWeight={"400"}
            fontSize={"14px"}
            lineHeight={"20px"}
            color={"gray.400"}
          >
            {heading}
          </Text>
          <Box display={"inline-flex"} mt={"8px"} mb={"6px"}>
            <Text
              fontWeight={"600"}
              fontSize={"18px"}
              lineHeight={"28px"}
              color={"gray.800"}
              isTruncated
            >
              {partnerName}
            </Text>
            <AtSignIcon
              w={"16px"}
              h={"16px"}
              ml={"6px"}
              mt={"7px"}
              color={"blue.600"}
              mr={"4px"}
              cursor={"pointer"}
              onClick={(e) => {
                navigator.clipboard.writeText(partnerEmail);
                toast({
                  title: "Copied to clipboard",
                  description: "Partner Email is copied to your clipboard",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              }}
            />
            <Icon
              as={FaLinkedin}
              w={"16px"}
              h={"16px"}
              mt={"7px"}
              color={"blue.600"}
              cursor={"pointer"}
              onClick={(event) => window.open(partnerLinkedin)}
            />
            <Tag
              w={"140px"}
              h={"20px"}
              mt={"3px"}
              bg={"#EFF8B5"}
              px={"8px"}
              py={"2px"}
              ml={"12px"}
            >
              <Text
                fontSize={"12px"}
                fontWeight={"700"}
                lineHeight={"16px"}
                color={"#B4CC14"}
              >
                {partnerMocksCompleted} mocks completed
              </Text>
            </Tag>
          </Box>
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            lineHeight={"20px"}
          >
            {partnerwork}
          </Text>
        </Box>
      )}
    </>
  );
}

export default Partner;
