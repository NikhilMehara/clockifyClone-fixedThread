import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = ({ data, direction }) => {
  return (
    <Marquee direction={direction}>
      {data.map((ele) => (
        <Flex
          w={"240px"}
          h={"160px"}
          p={"15px"}
          m={2}
          boxShadow={"0 2px 6px 0 rgb(1 87 155 / 20%)"}
          alignItems={"flex-start"}
          flexDir={"column"}
        >
          <Heading size={"xs"}>{ele.title}</Heading>
          <Text color={"#ffbf00"}> ★★★★★ </Text>
          <Text fontSize={"xs"}>{ele.feedback}</Text>
          <Text fontSize={"xs"}>{ele.client}</Text>
        </Flex>
      ))}
    </Marquee>
  );
};

export default Testimonials;
