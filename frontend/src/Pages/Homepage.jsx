import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";

export const ClockyCards = ({ icon, heading, text }) => {
  return (
    <Box
      m={"auto"}
      w={"85%"}
      pt={"40px"}
      pb={"50px"}
      pl={"50px"}
      pr={"50px"}
      boxShadow="0 2px 6px 0 rgb(1 87 155 / 15%)"
      style={{transition: "all 0.1s ease-in"}}
      cursor = {"pointer"}
      _hover={{ boxShadow: "2px 2px 5px 2px rgb(1 87 155 / 15%)" }}
    >
      <Flex justifyContent={"flex-start"} flexDir={"column"} gap={3}>
        <Icon as={icon} w={"45px"} h={"44px"} color={"blue.400"} />
        <Heading fontWeight={400} size={"lg"} color={"gray.700"}>
          {heading}
        </Heading>
        <Text color={"gray"}>{text}</Text>
        <Link to={"/"}>
          <Text color={"blue.700"}>Learn more →</Text>{" "}
        </Link>
      </Flex>
    </Box>
  );
};

const Homepage = () => {
  const [isLight, setIsLight] = useState(true);
  const clockyCardsData = [
    {
      icon: BiTargetLock,
      heading: "Boost productivity",
      text: "Track time you spend on activities, see where your time goes, and improve your time management skills.",
    },
    {
      icon: AiOutlineDollarCircle,
      heading: "Bill clients",
      text: "Track billable time and expenses, show clients how much you've worked, see how much you've earned, and create invoices.",
    },
    {
      icon: RiTeamLine,
      heading: "Manage team",
      text: "Track attendance for payroll and accounting, see who works on what, and manage workload among teams.",
    },
    {
      icon: BsClockHistory,
      heading: "Business intelligence",
      text: "Track time and analyze your company's efficiency across projects, clients, departments, and employees.",
    },
  ];
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
          color={"white"}
          p={[1, 7]}
          boxShadow={"md"}
          _hover={{ bg: "blue.400" }}
          bgColor={"#03A9F4"}
          borderBottom={"4px solid #008CCF"}
          w={"280px"}
          h={"56px"}
        >
          <Link to="/">
            <Text fontWeight={400} fontSize={["xs", "md"]}>
              START TRACKING TIME — IT'S FREE!
            </Text>
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
      <VStack maxW={"xl"} m={"auto"} mt={20}>
        <Text fontSize={["lg", "4xl"]}>Time management features</Text>
        <Text color={"gray"} fontSize={["md", "xl"]} textAlign={"center"}>
          Track productivity, attendance, and billable hours with a simple time
          tracker and timesheet.
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2]} mt={20}>
        <Flex gap={5} justifyContent={"left"} flexDir={"column"} m={"auto"}>
          <Box>
            <Heading size={"sm"} color={"gray"}>
              TIMEKEEPING
            </Heading>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Timer
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Track work hours in real time.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Timesheet
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Enter time in weekly timesheet.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Calendar
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Visually block out and manage time.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Auto tracker
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Track apps and website you use.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Kiosk
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Clock in from a shared device.
            </Text>
          </Box>
        </Flex>
        <Box m={"auto"}>
          <Image src="https://clockify.me/assets/images/feature-time-tracker-methods.svg"></Image>{" "}
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} mt={20}>
        <Box m={"auto"}>
          <Image src="https://clockify.me/assets/images/feature-time-reporting-activity.svg"></Image>{" "}
        </Box>
        <Flex gap={5} justifyContent={"left"} flexDir={"column"} m={"auto"}>
          <Box>
            <Heading size={"sm"} color={"gray"}>
              REPORTING
            </Heading>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Reports
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Analyze and export tracked time.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Activity
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              See who works on what.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Rates
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              See earning, cost, and traffic.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Progress
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Track project esimates and budget.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Location
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              See visited sites and routes.
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={[1, 2]} mt={20}>
        <Flex gap={5} justifyContent={"left"} flexDir={"column"} m={"auto"}>
          <Box>
            <Heading size={"sm"} color={"gray"}>
              MANAGEMENT
            </Heading>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Scheduling
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Schedule works, assignment and shifts.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Time off
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Manage leaves and holidays.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Approval
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Submit and approve timesheets.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Invoicing
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Create invoices and billable time.
            </Text>
          </Box>
          <Box
            color={"gray.700"}
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb={"1"} size={"sm"}>
              Expenses
            </Heading>
            <Text color={"gray"} fontSize={"sm"}>
              Record project expenses and fees.
            </Text>
          </Box>
        </Flex>
        <Box>
          <Image src="https://clockify.me/assets/images/feature-team-scheduling.svg"></Image>{" "}
        </Box>
      </SimpleGrid>
      <Text textAlign={"center"} mt={"20"}>
        <Button
          bgColor={"#03A9F4"}
          borderBottom={"4px solid #008CCF"}
          w={"280px"}
          h={"56px"}
        >
          <Text color={"white"} fontWeight={"400"}>
            SEE ALL FEATURES
          </Text>
        </Button>
      </Text>
      <br />
      <VStack maxW={"xl"} m={"auto"} mt={20}>
        <Text fontSize={["lg", "4xl"]} color={"gray.700"}>
          Time tracking apps
        </Text>
        <Text color={"gray"} fontSize={["md", "xl"]} textAlign={"center"}>
          Clockify works across devices. Track time from anywhere — all data is
          synced online.
        </Text>
      </VStack>
      <SimpleGrid
        columns={[1, 2]}
        width={"70%"}
        m={"auto"}
        mt={"10"}
        gap={"20"}
      >
        <VStack>
          <Image src="https://clockify.me/assets/images/time-tracking-app-desktop.png"></Image>
          <Text fontWeight={"medium"} fontSize={"md"}>
            DESKTOP APP
          </Text>
          <ButtonGroup
            colorScheme={"none"}
            color={"blue.400"}
            variant={"outline"}
            borderColor={"blue.400"}
          >
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              Window
            </Button>
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              Mac
            </Button>
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              Linux
            </Button>
          </ButtonGroup>
        </VStack>
        <VStack>
          <Image src="https://clockify.me/assets/images/time-tracking-app-web.png"></Image>
          <Text fontWeight={"medium"} fontSize={"md"}>
            WEB APP
          </Text>
          <ButtonGroup
            colorScheme={"none"}
            color={"blue.400"}
            variant={"outline"}
            borderColor={"blue.400"}
          >
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              Edge
            </Button>
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              Chrome
            </Button>
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              Firefox
            </Button>
          </ButtonGroup>
        </VStack>
      </SimpleGrid>
      <SimpleGrid
        columns={[1, 2]}
        width={"70%"}
        m={"auto"}
        mt={"20"}
        gap={"20"}
      >
        <VStack>
          <Image src="https://clockify.me/assets/images/time-tracking-app-mobile.png"></Image>
          <Text fontWeight={"medium"} fontSize={"md"}>
            MOBILE APP
          </Text>
          <ButtonGroup
            colorScheme={"none"}
            color={"blue.400"}
            variant={"outline"}
            borderColor={"blue.400"}
          >
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              Android
            </Button>
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              iOS
            </Button>
          </ButtonGroup>
        </VStack>
        <VStack>
          <Image src="https://clockify.me/assets/images/time-tracking-app-kiosk.png"></Image>
          <Text fontWeight={"medium"} fontSize={"md"}>
            KIOSK APP
          </Text>
          <ButtonGroup
            colorScheme={"none"}
            color={"blue.400"}
            variant={"outline"}
            borderColor={"blue.400"}
          >
            <Button
              _hover={{ bgColor: "blue.400", color: "white" }}
              w={"110px"}
            >
              Any Device
            </Button>
          </ButtonGroup>
        </VStack>
      </SimpleGrid>
      <Text textAlign={"center"} mt={"20"} fontSize={"4xl"} color={"gray.700"}>
        Why track time with Clockify
      </Text>
      <SimpleGrid
        w={[, "80%"]}
        m={"auto"}
        columns={{ base: "1", md: "2" }}
        gap={"10"}
        mt={20}
      >
        {clockyCardsData.map((ele) => {
          return (
            <ClockyCards
              icon={ele.icon}
              heading={ele.heading}
              text={ele.text}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Homepage;
