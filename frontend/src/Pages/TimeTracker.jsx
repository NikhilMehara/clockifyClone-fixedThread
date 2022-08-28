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
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Thead,
    Tooltip,
    Tr,
    useDisclosure,
    useToast
 } from '@chakra-ui/react'
 import { ArrowUpDownIcon, TimeIcon } from '@chakra-ui/icons'
 import {DiAndroid,DiWindows,DiApple,DiChrome} from "react-icons/di"
 import { BsTag,BsListUl } from 'react-icons/bs'
 import {BiDollar} from "react-icons/bi"
import React,{useState,useRef, useEffect} from 'react'
import DashboardNavbar from '../Components/DashboardNavbar'
// import TaskModel from '../../../backend/Models/task.model'
import {getItem} from "../Utils/localStorage";
import axios from "axios";

const TimeTracker = () => {

    const [watch, setwatch] = useState(0);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [pub,setPub] = useState(true);
    const [timer, settimer] = useState(null);
    const [check, setcheck] = useState(true);
    const [totalTime, setTotalTime] = useState(0);
    const startTime = useRef(null);
    const [bill, setBill] = useState(false);
    const [chTag,setChtag] = useState(false);
    const [tag,setTag] = useState()
    const [dataStore,setDataStore] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const getTasks = ()=>{
        axios.get("https://pure-cliffs-12633.herokuapp.com/tasks",{
            headers:{
                Authorization: 'Bearer '+getItem("token")
            }
        }).then((res)=>{
            console.log(res);
            setDataStore(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getTasks();
        console.log(dataStore);
    },[])
    

    const start = () => {
        if(input1==="" ||input2===""){
           setcheck(true);
           toast({
            description: "select the project first",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }else{
        let x = new Date()
        startTime.current = x.getHours() + ":" + x.getMinutes()
        setcheck(!check)
        if (!timer) {
           let id = setInterval(() => {
                setwatch((e) => e + 100)
            }, 100)
            settimer(id)
        }
    }
    }

    const stop = () => {
        // var total = 0
        // for(var i=0; i<data.length; i++){
        //     total += Number(data[i].timediff)
        // }

        setTotalTime(watch+totalTime)
        let y = new Date();
 
        let payload = {
            name:input1,
            tag : tag,
            billable: bill,
            startAt: startTime.current,
            endAt: y.getHours() + ":" + y.getMinutes(),
            projectName: input2
        }

        setcheck(!check);
        setwatch(0);
        clearInterval(timer);
        settimer(null);
        setInput2("");
        setInput1("");
        setTag(undefined);
       axios.post(`https://pure-cliffs-12633.herokuapp.com/tasks/new`,payload,{
        headers:{
            Authorization : "Bearer "+getItem("token")
        }
       }).then((res)=>{
          getTasks();
       }).catch((err)=>{
        console.log(err);
       })
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

    // const makeProject = ()=>{

    // }

    const handleChange = (e)=>{
        console.log(e.target.value);
        setTag(e.target.value);
    }


    const handleDelete = (id)=>{
        axios.delete(`https://pure-cliffs-12633.herokuapp.com/tasks/delete/${id}`,{
            headers:{
                Authorization : "Bearer "+getItem("token")
            }
        })
        .then((res)=>{
            getTasks();
        }).catch((err)=>{
            console.log(err)
        })
    }


  return (
    <DashboardNavbar >
   <Stack bg={"#edf2f7"} align={"center"} height={"2xl"}>
       <HStack align={"center"} height={"70px"} bg={"white"} border={"1px solid gray"} width={["auto","auto","85%"]} marginTop={"30px"} mb={20}>
        {/* Input & Project making */}
        <Input 
        placeholder='What are you working on?' 
        maxW={["300px","425px","600px"]} 
        ml={1.5}
        height={"45px"}
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
            <Flex direction={"row"} gap="2" width={"150px"}>
            <Image src="https://app.clockify.me/assets/ui-icons/plus-blue.svg" />
             {input2==="" ? "Projects" : input2}
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
            <Button colorScheme='blue' onClick={onClose}>Create</Button>
          </ModalFooter>
        </ModalContent>
        </Modal>

        {/* Tags & Billing */}
        <Divider orientation='vertical' height={"30px"} variant="dashed" />
        {/* <Button  bg="none" _hover={{bg:"none"}} >
        
        </Button> */}
        <Menu isLazy>
          <MenuButton align="center"  padding={"0px 10px"} pt={2} color={tag===undefined ? "gray.400" : "blue.400"}>
             {tag===undefined ? <Icon as={BsTag} w={8} h={6} /> : tag}
          </MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>
            <Flex direction={"row"} gap={2}>
            <Checkbox defaultChecked={false} value="Important" onChange={handleChange} />Important
            </Flex>
            </MenuItem>
            <MenuItem>
            <Flex direction={"row"} gap={2}>
            <Checkbox defaultChecked={false} value="Official" onChange={handleChange} />Official
            </Flex>
            </MenuItem>
            <MenuItem>
            <Flex direction={"row"} gap={2}>
            <Checkbox defaultChecked={false} value="Weekends" onChange={handleChange} />Weekends
            </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
        <Divider orientation='vertical' height={"30px"} variant="dashed" />
        <Tooltip label={bill ? "Billing" : "No Billing"} color="black" bg={"white"} placement="right-end" ml={-5} mb={-5} >
        <Button align="center" padding={["0px 3px","0px 6px","0px 10px"]} onClick={()=>setBill(!bill)} color={bill ? "blue.400" : "gray.400"} bg="none" _hover={{bg:"none"}}>
            <Icon as={BiDollar} w={8} h={6}/>
        </Button>
        </Tooltip>
        <Divider orientation='vertical' height={"30px"} variant="dashed" />

        {/* Counter Apply */}
        <Flex direction={"row"} gap={[1,2,4]}>
            <Flex pl={2} pt={2}>{msToTime(watch)}</Flex>
            <Flex>
                <Button 
                size={["xs","sm","md"]}  
                colorScheme={check ? "blue" : "red"} 
                color={"white"} 
                onClick={check ? start : stop}
                >
                    {check ? "START" : "STOP"}
                </Button>
            </Flex>
            <Flex direction={"column"} mt={1} mr={2} gap={1}>
               <TimeIcon />
               <Icon as={BsListUl} />
            </Flex>
        </Flex>
       </HStack>

    {dataStore.length===0 ?
           <Flex direction={"column"} align={"center"} bg={"white"} height="350px" width={["15%","23%","30%"]} gap={2} boxShadow= {"rgba(0, 0, 0, 0.24) 0px 3px 8px"} >
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
          : <Flex direction={"column"} align={"center"} bg={"white"} width={["30%","50%","80%"]} boxShadow= {"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
          <Flex direction={"row"} justifyContent={"space-between"} pt={3} mb={-7} w={"95%"}>
            <Flex>
                This Week
            </Flex>
            <Flex>
                Week Total: {msToTime(totalTime)}
            </Flex>
          </Flex>
           <TableContainer border={"1px"} borderColor={"gray.300"} mt={10}>
          <Table variant="stripe">
            <Thead>
              <Tr
                borderBottom={"1px"}
                borderColor={"gray.300"}
                // bgColor="#e4eaee"
              >
                <Td fontSize={"sm"} colSpan={9} color={"gray.500"}>
                  Projects
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr
                fontSize={"sm"}
                borderBottom="1px"
                borderColor={"gray.300"}
                color={"gray.500"}
              >
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    <Checkbox borderColor={"gray.300"} /> NAME{" "}
                    <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    Project Name <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    Tags <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    Bill <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    Start Time<ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td colSpan={4}>
                  <Flex alignItems={"center"} gap={"2"}>
                    End Time <ArrowUpDownIcon />
                  </Flex>
                </Td>
              </Tr>
              {dataStore.length > 0 && dataStore.map((task)=>{
                return (
              <Tr fontSize={"0.9rem"}>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    <Checkbox borderColor={"gray.300"} />{task.name}{" "}
                  </Flex>
                </Td>
                <Td> {task.projectName} </Td>
                <Td color={"gray.600"}>{task.tag}</Td>
                <Td color={"gray.600"}>{!task.billable ? "Not Billable" :"Billable"}</Td>
                <Td color={"gray.600"}>{task.startAt}</Td>
                <Td color={"gray.600"}>{task.endAt}</Td>
                <Td>
                    <Menu>
                        <MenuButton>
                        <Image src="https://app.clockify.me/assets/ui-icons/menu-dots-vertical.svg"></Image>{" "}
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                             <Text onClick={()=>handleDelete(task._id)}>Delete</Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Td>
              </Tr>
               )
            })}
            </Tbody>
          </Table>
           </TableContainer>
           </Flex>
          
    }
       
   </Stack>
   </DashboardNavbar>
  )
}

export default TimeTracker