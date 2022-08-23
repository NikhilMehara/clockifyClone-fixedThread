import { Box, Button, Flex, Icon, Image, Switch, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [isLight, setIsLight] = useState(true);
  return (
    <div>
      <Box maxW={["", "80%"]} m={"auto"}>
        <Text fontSize={["2xl", "4xl"]} textAlign={"center"} fontWeight={400}>
          The most popular free{" "}
          <span style={{ color: "#03a9f4" }}>time tracker</span> for teams
        </Text>
      </Box>
      <Box maxW={["80%", "45%"]} m={"auto"}>
        <Text fontSize={["sm", "xl"]} textAlign={"center"}>
          Time tracking software used by millions. Clockify is a time tracker
          and timesheet app that lets you track work hours across projects.
          Unlimited users, free forever.
          <span
            style={{
              color: "#fdd866",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              fontSize: "medium",
            }}
          >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <Text
              fontSize={["xs", "sm"]}
              textAlign={"center"}
              color={"gray"}
              ml={"5"}
            >
              4,000+ reviews
            </Text>
          </span>
        </Text>
      </Box>
      <Flex
        justifyContent={"center"}
        m={5}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Button
          bgColor={"blue.500"}
          color={"white"}
          p={[1, 7]}
          boxShadow={"md"}
          _hover={{ bg: "blue.400" }}
        >
          <Link to="/">
            <Text fontSize={["xs", "md"]}>START TRACKING TIME - IT'S FREE</Text>
          </Link>
        </Button>
        <Button
          p={0}
          colorScheme={"none"}
          color={"blue.400"}
          _hover={{ textDecoration: "underline" }}
        >
          <Image
            src={"https://clockify.me/assets/images/signed-up-icon.svg"}
          ></Image>
          <Text fontSize={"xs"} ml={"1"}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              134,602 people signed up last month
            </a>
          </Text>
        </Button>
        <Image
          src="https://clockify.me/assets/images/customers-light-gray-3.svg"
          mt={10}
        ></Image>
        {isLight ? (
          <Image
            src="https://clockify.me/assets/images/time-tracker-screenshot.svg"
            mt={10}
          ></Image>
        ) : (
          <Image
            src="https://clockify.me/assets/images/time-tracker-dark-screenshot.svg"
            mt={10}
          ></Image>
        )}
        <Switch
          size={"sm"}
          colorScheme={"black"}
          onChange={() => setIsLight(!isLight)}
        />
      </Flex>
    </div>
  );
};

export default Homepage;
