import {
  Box,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={20}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={3}>
            <Box>
              <Link to={"/"}>
                <Image src="https://clockify.me/assets/images/clockify-logo.svg"></Image>
              </Link>
              <Text fontSize={"xs"} w={"15rem"}>
                The world's leading time tracker and timesheet software for
                teams
              </Text>
            </Box>
            <Text fontSize={"sm"} _hover={{color: "blue.400"}}>
              <Link to={"/signup"}>SIGN UP FREE</Link>
            </Text>
            <Text fontSize={"sm"} _hover={{color: "blue.400"}}>
              <Link to={"/login"}>LOG IN</Link>
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>PRODUCT</ListHeader>
            <Link to="/">Features</Link>
            <Link to="/">Download</Link>
            <Link to="/">Integrations</Link>
            <Link to="/">Upgrade</Link>
            <Link to="/">API</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>SOLUTION</ListHeader>
            <Link to="/">Time clock</Link>
            <Link to="/">Timecard calculator</Link>
            <Link to="/">Timesheet</Link>
            <Link to="/">Reporting</Link>
            <Link to="/">Scheduling</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>COMPANY</ListHeader>
            <Link to="/">About us</Link>
            <Link to="/">Customers</Link>
            <Link to="/">
              <Text fontSize={"xs"}>WE ALSO MAKE</Text>
            </Link>
            <HStack>
              <Image src="https://clockify.me/assets/images/pumble-icon-color.svg"></Image>
              <Link to="/">Pumble</Link>
            </HStack>
            <HStack>
              <Image src="https://clockify.me/assets/images/plaky-icon-color.svg"></Image>
              <Link to="/">Plaky</Link>
            </HStack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>SUPPORT</ListHeader>
            <Link to="/">Help</Link>
            <Link to="/">Tutorials</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Footer
