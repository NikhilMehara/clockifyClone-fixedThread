import { ReactNode } from 'react';
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
                  <Box  >Don't have an account?</Box>
                  <Box color='#03A9F4' >Sign up</Box>
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