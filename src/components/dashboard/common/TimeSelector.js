import React from 'react'
import {Select,Menu,MenuButton,MenuList,MenuOptionGroup,MenuItemOption,Button} from '@chakra-ui/react'
import {ClockIcon} from '../../../static/icons/ClockIcon'
function TimeSelector({value,setvalue,isInvalid}) {
    function display(value){
        if (value === ''){
            return "-- : -- AM/PM"
        }
        const input = value.split(":",2)
        const hour = parseInt(input[0])
        if(hour<12){
            if(hour<10){
                return `0${hour} : ${input[1]} AM`
            }
            else{
                return `${hour} : ${input[1]} AM`
            }
            
        }
        else{
            if(hour-12<10){
                return `0${hour-12} : ${input[1]} PM`
            }
            else{
                return `${hour-12} : ${input[1]} PM`
            }
        }
    }
    return (
      <Menu as={Select} isInvalid={isInvalid}>
        <MenuButton as={Button} w={'full'} variant={'outline'} colorScheme={'gray'} textAlign={'start'} rightIcon={<ClockIcon w={'20px'} h={'20px'}/>}>
           {display(value)}
        </MenuButton>
        <MenuList h={'400px'} overflowY={'scroll'} boxShadow={'0px 0px 3px 1px rgba(0, 0, 0, 0.1)'}>
        <MenuOptionGroup type='radio' value={value} onChange={setvalue}>
        <MenuItemOption value={"00:00:00"}>00 : 00 AM</MenuItemOption>
        <MenuItemOption value={"00:30:00"}>00 : 30 AM</MenuItemOption>
        <MenuItemOption value={"01:00:00"}>01 : 00 AM</MenuItemOption>
        <MenuItemOption value={"01:30:00"}>01 : 30 AM</MenuItemOption>
        <MenuItemOption value={"02:00:00"}>02 : 00 AM</MenuItemOption>
        <MenuItemOption value={"02:30:00"}>02 : 30 AM</MenuItemOption>
        <MenuItemOption value={"03:00:00"}>03 : 00 AM</MenuItemOption>
        <MenuItemOption value={"03:30:00"}>03 : 30 AM</MenuItemOption>
        <MenuItemOption value={"04:00:00"}>04 : 00 AM</MenuItemOption>
        <MenuItemOption value={"04:30:00"}>04 : 30 AM</MenuItemOption>
        <MenuItemOption value={"05:00:00"}>05 : 00 AM</MenuItemOption>
        <MenuItemOption value={"05:30:00"}>05 : 30 AM</MenuItemOption>
        <MenuItemOption value={"06:00:00"}>06 : 00 AM</MenuItemOption>
        <MenuItemOption value={"06:30:00"}>06 : 30 AM</MenuItemOption>
        <MenuItemOption value={"07:00:00"}>07 : 00 AM</MenuItemOption>
        <MenuItemOption value={"07:30:00"}>07 : 30 AM</MenuItemOption>
        <MenuItemOption value={"08:00:00"}>08 : 00 AM</MenuItemOption>
        <MenuItemOption value={"08:30:00"}>08 : 30 AM</MenuItemOption>
        <MenuItemOption value={"09:00:00"}>09 : 00 AM</MenuItemOption>
        <MenuItemOption value={"09:30:00"}>09 : 30 AM</MenuItemOption>
        <MenuItemOption value={"10:00:00"}>10 : 00 AM</MenuItemOption>
        <MenuItemOption value={"10:30:00"}>10 : 30 AM</MenuItemOption>
        <MenuItemOption value={"11:00:00"}>11 : 00 AM</MenuItemOption>
        <MenuItemOption value={"11:30:00"}>11 : 30 AM</MenuItemOption>
        <MenuItemOption value={"12:00:00"}>12 : 00 PM</MenuItemOption>
        <MenuItemOption value={"12:30:00"}>12 : 30 PM</MenuItemOption>
        <MenuItemOption value={"13:30:00"}>01 : 30 PM</MenuItemOption>
        <MenuItemOption value={"13:00:00"}>01 : 00 PM</MenuItemOption>
        <MenuItemOption value={"14:00:00"}>02 : 00 PM</MenuItemOption>
        <MenuItemOption value={"14:30:00"}>02 : 30 PM</MenuItemOption>
        <MenuItemOption value={"15:00:00"}>03 : 00 PM</MenuItemOption>
        <MenuItemOption value={"15:30:00"}>03 : 30 PM</MenuItemOption>
        <MenuItemOption value={"16:00:00"}>04 : 00 PM</MenuItemOption>
        <MenuItemOption value={"16:30:00"}>04 : 30 PM</MenuItemOption>
        <MenuItemOption value={"17:00:00"}>05 : 00 PM</MenuItemOption>
        <MenuItemOption value={"17:30:00"}>05 : 30 PM</MenuItemOption>
        <MenuItemOption value={"18:00:00"}>06 : 00 PM</MenuItemOption>
        <MenuItemOption value={"18:30:00"}>06 : 30 PM</MenuItemOption>
        <MenuItemOption value={"19:00:00"}>07 : 00 PM</MenuItemOption>
        <MenuItemOption value={"19:30:00"}>07 : 30 PM</MenuItemOption>
        <MenuItemOption value={"20:00:00"}>08 : 00 PM</MenuItemOption>
        <MenuItemOption value={"20:30:00"}>08 : 30 PM</MenuItemOption>
        <MenuItemOption value={"21:00:00"}>09 : 00 PM</MenuItemOption>
        <MenuItemOption value={"21:30:00"}>09 : 30 PM</MenuItemOption>
        <MenuItemOption value={"22:00:00"}>10 : 00 PM</MenuItemOption>
        <MenuItemOption value={"22:30:00"}>10 : 30 PM</MenuItemOption>
        <MenuItemOption value={"23:00:00"}>11 : 00 PM</MenuItemOption>
        <MenuItemOption value={"23:30:00"}>11 : 30 PM</MenuItemOption>
            </MenuOptionGroup>
        </MenuList>
      </Menu>
    );
}

export default TimeSelector