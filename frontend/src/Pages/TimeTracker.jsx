import { 
    Box,
    Button,
    Checkbox,
    Divider,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
    Text,
    Tooltip,
    useDisclosure,
 } from '@chakra-ui/react'
 import { TimeIcon } from '@chakra-ui/icons'
 import {DiAndroid,DiWindows,DiApple,DiChrome} from "react-icons/di"
 import { BsTag,BsListUl } from 'react-icons/bs'
 import {BiDollar} from "react-icons/bi"
import React,{useState,useRef} from 'react'
import DashboardNavbar from '../Components/DashboardNavbar'

const TimeTracker = () => {

    const [watch, setwatch] = useState(0);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [pub,setPub] = useState(true);
    const [timer, settimer] = useState(null);
    const [check, setcheck] = useState(true);
    const [totalTime, setTotalTime] = useState(0);
    const startTime = useRef(null);
    const [bill, setBill] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure();

    const start = () => {
        let x = new Date()
        startTime.current = x.getHours() + ":" + x.getMinutes()
        setcheck(!check)
        if (!timer) {
            let id = setInterval(() => {
                setwatch((e) => e + 10)
            }, 10)
            settimer(id)
        }
    }

    const stop = () => {
        var total = 0
        for(var i=0; i<data.length; i++){
            total += Number(data[i].timediff)
        }

        setTotalTime(total)
        // let y = new Date();
        setcheck(!check);
        setwatch(0);
        clearInterval(timer);
        settimer(null);
        // dispatch(addProject({
        //     title: input,
        //     starttime: startTime.current,
        //     endtime: y.getHours() + ":" + y.getMinutes(),
        //     timediff: watch,
        // }))
    }

    const msToTime = (duration) => {
        var milliseconds = parseInt((duration % 1000))
            , seconds = parseInt((duration / 1000) % 60)
            , minutes = parseInt((duration / (1000 * 60)) % 60)
            , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds
    }


  return (
    <DashboardNavbar >
   <Stack bg={"#f2f6f8"} align={"center"} height={"2xl"}>
       <HStack align={"center"} height={"70px"} bg={"white"} border={"1px solid gray"} width="85%" marginTop={"30px"} mb={20}>
        {/* Input & Project making */}
        <Input 
        placeholder='What are you working on?' 
        maxW={"650px"} 
        ml={1.5}
        height={"55px"}
        border="none" 
        _hover={{border:"1px solid lightgray"}} 
        onChange={(e) => setInput1(e.target.value)}
        />
        <Text 
        color={"blue.400"} 
        _hover={{cursor:"pointer",textDecoration:"underline"}} 
        pr="20px" 
        onClick={onOpen}
        >
            <Flex direction={"row"} gap="2">
            <Image src="https://app.clockify.me/assets/ui-icons/plus-blue.svg" />
             Projects
            </Flex>
        </Text>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Project</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <Flex direction={"row"}>
                <Flex direction={"column"} gap="3">
                    <Input 
                       maxW={"90%"} 
                       placeholder="Enter Project Name"
                       onChange={(e) => setInput2(e.target.value)}
                       />
                    <Flex direction={"row"} gap="2">
                        <Checkbox defaultChecked={pub} onClick={()=>setPub(!pub)} />
                        <Text>Public</Text>
                    </Flex>
                </Flex>
                <Flex direction={"column"} gap="3">
                    <Select placeholder='Select Client' >
                          <option value={"new menue"}>No Client Available</option>
                    </Select>
                    <Tooltip label="Upgrade for template" placement='left' height={"30px"} bg={"white"} color="black.400">
                    <Select placeholder='No Template' >
                    </Select>
                    </Tooltip>
                </Flex>
            </Flex>
          </ModalBody>
          <Divider />
          <ModalFooter gap="5">
            <Text color={"blue.400"} _hover={{cursor:"pointer",textDecoration:"underline"}} onClick={onClose}>
              Close
            </Text>
            <Button colorScheme='blue'>Create</Button>
          </ModalFooter>
        </ModalContent>
        </Modal>

        {/* Tags & Billing */}
        <Divider orientation='vertical' height={"30px"} variant="dashed" />
        {/* <Button  bg="none" _hover={{bg:"none"}} >
        
        </Button> */}
        <Menu isLazy>
          <MenuButton align="center"  padding={"0px 10px"} pt={2} color="gray.400">
             <Icon as={BsTag} w={8} h={6} />
          </MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>
            <Flex direction={"row"} gap={2}>
            <Checkbox />Important
            </Flex>
            </MenuItem>
            <MenuItem>
            <Flex direction={"row"} gap={2}>
            <Checkbox />Official
            </Flex>
            </MenuItem>
            <MenuItem>
            <Flex direction={"row"} gap={2}>
            <Checkbox />Weekends
            </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
        <Divider orientation='vertical' height={"30px"} variant="dashed" />
        <Tooltip label={bill ? "Billing" : "No Billing"} color="black" bg={"white"} placement="right-end" ml={-5} mb={-5} >
        <Button align="center" padding={"0px 10px"} onClick={()=>setBill(!bill)} color={bill ? "blue.400" : "gray.400"} bg="none" _hover={{bg:"none"}}>
            <Icon as={BiDollar} w={8} h={6}/>
        </Button>
        </Tooltip>
        <Divider orientation='vertical' height={"30px"} variant="dashed" />

        {/* Counter Apply */}
        <Flex direction={"row"} gap="5">
            <Flex pl={2} pt={2}>{msToTime(watch)}</Flex>
            <Flex>
                <Button 
                size={"md"}  
                colorScheme={check ? "blue" : "red"} 
                color={"white"} 
                onClick={check ? start : stop}
                >
                    {check ? "START" : "STOP"}
                </Button>
            </Flex>
            <Flex direction={"column"} gap="1">
               <TimeIcon />
               <Icon as={BsListUl} />
            </Flex>
        </Flex>
       </HStack>

        
       <Flex direction={"column"} align={"center"} bg={"white"} height="350px" width={"30%"} gap={2} boxShadow= {"rgba(0, 0, 0, 0.24) 0px 3px 8px"} >
        <Image pt={7} align={"center"} src='https://app.clockify.me/assets/ui-icons/empty-tracker-icon.webp' />
        <Heading size="lg" align={"center"} fontWeight={"medium"} >Let's Start Tracking!</Heading>
        <Text size={"sm"} color={"gray.300"} >Install Clockify and track time anywhere</Text>
        <Flex direction={"row"} gap={1} justify={"center"}>
             <Icon as={DiAndroid} w={8} h={6} color="gray.400" />
             <Icon as={DiApple} w={8} h={6} color="gray.400" />
             <Icon as={DiChrome} w={8} h={6} color="gray.400" />
             <Icon as={DiWindows} w={8} h={6} color="gray.400" />
        </Flex>
        <Text size={"sm"} color={"gray.300"} >50+ Integration</Text>
       </Flex>
   </Stack>
   </DashboardNavbar>
  )
}

export default TimeTracker