import {
    Heading,
    Box,
    Text,
    Button,
    HStack,
   Input,
   SimpleGrid,
   Flex,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { PinInput, PinInputField } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
  import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  export default function Card() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handlePay =(e)=>{
      alert("Your Payment Was Successfull");
    }
    return (
    <>
        <Box
          maxW={'500px'}
          mt={'3rem'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}>
          <Heading fontSize={'xl'} color={'#666'} fontFamily={'body'}>
          Payment information
          </Heading>
          <Text fontWeight={600} mt='1rem' mb={4}>
            Card Number (required)
          </Text>
           <NumberInput size='md' maxW={300} min={1000000000000000}>
           <NumberInputField placeholder='1234 1234 1234 1234' />
           <NumberInputStepper>
           </NumberInputStepper>
           </NumberInput>
           <Flex mt='10px' justifyContent={'space-around'} maxW={350}>
            <img src="https://app.clockify.me/assets/ui-icons/master-card.svg" alt="" />
            <img src="https://app.clockify.me/assets/ui-icons/visa.svg" alt="" />
            <img src="https://app.clockify.me/assets/ui-icons/american-express.svg" alt="" />
            <img src="https://app.clockify.me/assets/ui-icons/union-pay.svg" alt="" />
            <img src="https://app.clockify.me/assets/ui-icons/discover.svg" alt="" />
            <img src="https://app.clockify.me/assets/ui-icons/jcb.svg" alt="" />
            <img src="https://app.clockify.me/assets/ui-icons/diners-club.svg" alt="" />
           </Flex>
           <SimpleGrid columns={[2,2,2]} mt='1rem' spacing={30}>
            <Text>Expiration date (required)</Text>
            <Text>CVC (required)</Text>
            <Input htmlSize={4} width='auto' maxW={150} />
            <NumberInput size='md' maxW={100} min={100}>
           <NumberInputField placeholder='123' />
           <NumberInputStepper>
           </NumberInputStepper>
           </NumberInput>
           </SimpleGrid>
           <Text mt='1rem'>Cardholder name (required)</Text>
           <Input mt='0.7rem' htmlSize={4}  maxW={300} />
           <Text mt='1rem'>Street (required)</Text>
           <Input mt='0.7rem' htmlSize={4}  maxW={300} />
           <Text mt='1rem'>City (required)</Text>
           <Input mt='0.7rem' htmlSize={4}  maxW={300} />
           <Text mt='1rem'>ZIP / Postal code (required)</Text>
           <Input mt='0.7rem' htmlSize={4}  maxW={300} />
           <Text mt='1rem'>State / Province (required)</Text>
           <Input mt='0.7rem' htmlSize={4}  maxW={300} />
           <Text mt='1rem'>Country (required)</Text>
           <Input mt='0.7rem' htmlSize={4}  maxW={300} />
           <Checkbox mt='1rem' defaultChecked>I have read and agree to the Terms of Use</Checkbox>


           <Button w='280px' onClick={onOpen} mt='1rem' colorScheme='twitter'>FINISH PAYMENT</Button>

           <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ENTER OTP</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' onClick={(e)=>handlePay(e)}>Pay</Button>
            </ModalFooter>
          </ModalContent>
            </Modal>


           <Button w='280px' mt='0.6rem' color={'#03A9F4'} colorScheme='whiteAlpha'>CANCEL</Button>

        </Box>

      </>
    );
  }
 