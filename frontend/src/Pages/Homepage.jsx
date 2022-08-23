import { Text } from "@chakra-ui/react";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Text fontSize={"4xl"} textAlign={"center"}>
        The most popular free <span style={{color: "blue"}}>time tracker</span> for teams
      </Text>
    </div>
  );
};

export default Homepage;
