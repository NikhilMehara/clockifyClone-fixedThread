import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Google_oauth } from '../../Stores/Auth/auth.actions';

export default function GoogleButton() {
  const dispatch =useDispatch();
  const handleGoogle=(e)=>{
     dispatch(Google_oauth());
  }
  return (
    <Center p={0.1}>
      <Button 
      onClick={(e)=>handleGoogle(e)}
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  );
}