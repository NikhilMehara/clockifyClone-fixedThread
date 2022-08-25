import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function SignWrite() {
  return (
    <Stack
    //   bg={useColorModeValue('gray.50', 'gray.800')}
      py={10}
      px={8}
      spacing={{ base: 2, md: 2 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: '2xl', md: '3xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Get started with Clockify</Text>
      <Text
        fontSize={{ base: 'md', md: 'xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      Create a free account to start tracking time and supercharge your productivity.</Text>
      <Box textAlign={'center'}>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        No credit card required · Unsubscribe at any time
        </Text>
      </Box>
    </Stack>
  );
}