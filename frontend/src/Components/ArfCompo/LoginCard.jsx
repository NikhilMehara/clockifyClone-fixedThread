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
  useToast,
} from "@chakra-ui/react";
import { LoginGet } from "../../Stores/Auth/auth.actions";
import GoogleButton from "./Googlebutton";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const { token } = useSelector((state) => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    try {
      dispatch(LoginGet(email, password));
      toast({
        title: "Logged-In Successfully!",
        description: "Start tracking your task & time.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/tracker");
    } catch (err) {
      toast({
        title: "Internal server error",
        description: "Please try again!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  console.log(token);
  return (
    <Flex minH={"1vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={4} px={2}>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          bg={useColorModeValue("white")}
          p={8}
        >
          <Stack bg={useColorModeValue("white")} spacing={4}>
            <FormControl bg={useColorModeValue("white")} id="email">
              <FormLabel bg={useColorModeValue("white")}>Log In</FormLabel>
              <Input
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl bg={useColorModeValue("white")} id="password">
              {/* <FormLabel>Password</FormLabel> */}
              <Input
                bg={useColorModeValue("white")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                type="password"
              />
            </FormControl>
            <Stack bg={useColorModeValue("white")} spacing={10}>
              <Stack
                bg={useColorModeValue("white")}
                direction={{ base: "column", sm: "row" }}
                align={"start"}
              >
                <Checkbox bg={useColorModeValue("white")}>
                  Stay logged in
                </Checkbox>
                <Link color={"#03A9F4"}>Forgot Password?</Link>
              </Stack>
              <Button
                onClick={(e) => handleClick(e)}
                bg={"blue.300"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Log In
              </Button>
              <GoogleButton />
            </Stack>
          </Stack>
        </Box>
        <Stack direction="row" pl="6.5rem">
          <img
            src="https://app.clockify.me/assets/ui-icons/translate.svg"
            alt=""
          />
          <Text>English</Text>
        </Stack>
        <Stack direction="row">
          <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="" />
          <Text>Your data is safe with us:</Text>
          <Text color={"#03A9F4"}>Security Privacy</Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
