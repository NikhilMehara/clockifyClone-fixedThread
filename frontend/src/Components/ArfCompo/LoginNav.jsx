import { ReactNode } from 'react';
import { useMediaQuery } from '@chakra-ui/react'
import { Link} from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

export default function LoginNav() {
  const [isLargerThan680] = useMediaQuery('(min-width: 680px)')
  let handleCLick=()=>{
    console.log('1');
  }
  return (
    <>
      <Box
    //    bg={useColorModeValue('gray.100', 'gray.900')}
      w='80%' m='auto' mt='1rem' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><img src="https://app.clockify.me/assets/logo.svg" alt="" /></Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                <Stack direction={'row'}>
                  <Box >{isLargerThan680 ? "Don't have an account?" : ''}</Box>
                    <Box color='#03A9F4' onClick={()=>handleCLick()} > Sign Up
                    {/* <Link to={"/signup"}>SIGN UP</Link> */}
                    </Box>
                    </Stack>
                </MenuButton> 
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}