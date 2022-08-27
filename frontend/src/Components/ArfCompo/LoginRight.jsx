import { Image,Button, Box, Stack, Text, useColorModeValue,Heading } from '@chakra-ui/react';

export default function LoginRight() {
  return (
    <Stack
      bg={useColorModeValue('#673AB7;', '#2F80ED')}
      py={6}
      px={2}
      color={'white'}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
        <Button bg={'#E4EAEE'} color={'black'}>New</Button>
        <Heading>Scheduling</Heading>
      <Text
        fontSize={{ base: 'xl', md: 'xl' }}
        // color={'white'}
        textAlign={'center'}
        maxW={'2xl'}>
        Visualize projects on a timeline and plan team's capacity (see who's busy and who's available).
      </Text>
      <Button bg={'black'} color={'white'}>SEE HOW IT WORKS</Button>
      <Image h='524px' src='https://app.clockify.me/assets/features-info/scheduling-promo.webp'/>
    </Stack>
  );
}