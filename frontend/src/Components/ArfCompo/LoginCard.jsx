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
import GoogleButton from './Googlebutton';

  
  export default function LoginCard() {
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
                <FormLabel bg={useColorModeValue('white')}>Log In</FormLabel>
                <Input placeholder='Enter Email' type="email" />
              </FormControl>
              <FormControl bg={useColorModeValue('white')} id="password">
                {/* <FormLabel>Password</FormLabel> */}
                <Input bg={useColorModeValue('white')} placeholder='Enter Password' type="password" />
              </FormControl>
              <Stack bg={useColorModeValue('white')} spacing={10}>
                <Stack bg={useColorModeValue('white')}
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}>
                  <Checkbox bg={useColorModeValue('white')}>Stay logged in</Checkbox>
                  <Link color={'#03A9F4'}>Forgot Password?</Link>
                </Stack>
                <Button
                  bg={'blue.300'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log In
                </Button>
                <GoogleButton/>
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
