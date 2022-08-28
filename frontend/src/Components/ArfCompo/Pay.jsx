import {
    Box,
    Flex,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import { FaCheckCircle } from 'react-icons/fa';
  import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { getItem } from '../../Utils/localStorage';
  
  export default function Pay() {
    const [month,setMonth]=useState(1);
    return (
      <Center py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
            //   color={'green.500'}
              rounded={'full'}>
              Upgrade for your workspace for {month} {month>1?"months":'month'}
            </Text>
            <Box border='1px' borderColor='gray.200' w='85%' h='12rem'>
              <Flex mt='2.5rem' justifyContent={'space-between'}>
                <Text fontSize={'0.9rem'}>User Seats</Text>
                <NumberInput size='sm' maxW={16} defaultValue={month} min={1}>
                <NumberInputField />
                <NumberInputStepper>
               <NumberIncrementStepper onClick={()=>{setMonth(month+1)}} />
               <NumberDecrementStepper onClick={()=>{setMonth(month>1?month-1:1)}}/>
               </NumberInputStepper>
               </NumberInput>
               <Text>X</Text>
               <Text>{getItem('payment')}</Text>
              </Flex>
            <Flex mt='1.5rem' justifyContent={'space-around'}>
                <Text fontSize={'1.4rem'}>Total Payment :</Text>
                <Text fontSize={'1.4rem'}>${(month*(+(getItem('payment')))).toFixed(2)}</Text>
            </Flex>
            </Box>
          </Stack>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
           {getItem('payment')==="4.99"?
           <List spacing={3} textAlign="start" px={12}>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Add time for others
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Hide time and pages
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Required fields
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Bulk edit
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Decimal format
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Time audit
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Customize exports
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Project templates
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Historic rates
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Edit profiles
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Import timesheets
           </ListItem>
         </List>:''}
           {getItem('payment')==="9.99"?
           <List spacing={3} textAlign="start" px={12}>
           <ListItem>All STANDARD FEATURES</ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Scheduling
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Expenses
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             GPS tracking
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Screenshots
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Force timer
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Labor cost & profit
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Scheduled reports
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Budget & estimates
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Alerts
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             Custom fields
           </ListItem>
           <ListItem>
             <ListIcon as={FaCheckCircle} color="green.500" />
             User fields
           </ListItem>
         </List>:''}
          {getItem('payment')==="6.99"?
          <List spacing={3} textAlign="start" px={12}>
          <ListItem>
          All BASIC features
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Time off
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Invoicing
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Approval
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Manager role
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Lock timesheet
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Targets & reminders
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Task rates
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Rounding
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            QuickBooks Integration
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Force 2FA
          </ListItem>
        </List>:''}
          </Box>
        </Box>
      </Center>
    );
  }