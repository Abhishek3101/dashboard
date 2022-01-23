import React from 'react'
import {Center,HStack,CircularProgress,CircularProgressLabel, VStack, Text} from '@chakra-ui/react'
function Goalcard({mocks}) {
    const goal = mocks
    const mock = process.env.REACT_APP_MONTHLY_GOAL
    return (
      <Center
        h={"100px"}
        w={["360px", "360px", "360px", "360px", "360px"]}
        mb={"24px"}
        border={"1px solid #E2E8F0"}
        boxSizing='border-box'
        boxShadow={"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"}
        borderRadius={"4px"}
      >
        <HStack spacing={"24px"}>
          <CircularProgress value={goal?(goal/mock)*100:2} color='primary.500' size={"60px"}>
            <CircularProgressLabel fontWeight={'500'} fontSize={'30px'} lineHeight={'36px'} color={'gray.700'}>{goal?goal:mock}</CircularProgressLabel>
          </CircularProgress>
          <VStack spacing={"8px"}>
              <Text w={"234px"} fontWeight={"600"} lineHeight={"20px"} fontSize={"14px"}>{goal?<>{goal} mocks completed in this month</>:<>Earn one month of free usage</>}</Text>
              {goal>mock?null:<Text w={"234px"} fontWeight={"400"} lineHeight={"16px"} fontSize={"12px"}>{goal?<>Complete {mock-goal} more mocks in this month and earn one month of free usage! 🎉</>:<>Complete {mock} mocks in a month and unlock free usage for the next month!</>}</Text>}
          </VStack>
        </HStack>
      </Center>
    );
}

export default Goalcard
