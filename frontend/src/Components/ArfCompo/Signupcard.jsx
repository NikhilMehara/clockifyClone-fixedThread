import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import GoogleButton from './Googlebutton';
import { useDispatch, useSelector } from 'react-redux';
import { SignupGet } from '../../Stores/Auth/auth.actions';
  
  export default function Signupcard() {
    const {message}=useSelector((state)=>state.authReducer);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();


    const handleClick=(e)=>{
      // console.log(email,password);
      e.preventDefault();
      dispatch(SignupGet(email,password));
  }
  console.log(message);
    return (
      <Flex
        minH={'1vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'2xl'} py={4} px={2}>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            bg={useColorModeValue('white')}
            p={8}>
            <Stack bg={useColorModeValue('white')} spacing={4}>
              <FormControl bg={useColorModeValue('white')} id="email">
                <FormLabel bg={useColorModeValue('white')}>Sign Up</FormLabel>
                <Input placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl bg={useColorModeValue('white')} id="password">
                {/* <FormLabel>Password</FormLabel> */}
                <Input bg={useColorModeValue('white')} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' type="password" />
              </FormControl>
              <Stack bg={useColorModeValue('white')} spacing={10}>
                <Stack bg={useColorModeValue('white')}
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}>
                  <Checkbox bg={useColorModeValue('white')}>I agree to the</Checkbox>
                  <Link color={'#03A9F4'}>Terms Of Use</Link>
                </Stack>
                <Button onClick={(e)=>handleClick(e)}
                  bg={'#03A9F4'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  CREATE FREE ACCOUNT
                </Button>
                <GoogleButton onClick={(e)=>console.log('hi')}/>
              </Stack>
            </Stack>
          </Box>
          <Stack direction='row' pl='6.5rem'>
          <img src="https://app.clockify.me/assets/ui-icons/translate.svg" alt="" />
          <Text>English</Text>
       </Stack>
          <Stack direction='row'>
          <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="" />
          <Text>Your data is safe with us:</Text>
          <Text color={'#03A9F4'}>Security Privacy</Text>
       </Stack>
        </Stack>
      </Flex>
    );
  }
