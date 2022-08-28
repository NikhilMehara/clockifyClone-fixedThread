import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { IoMdStats } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { RiFunctionLine, RiFileList3Line } from "react-icons/ri";
import { GrTag, GrCircleQuestion } from "react-icons/gr";
const LinkItems = [
  { name: "TIME TRACKER", icon: MdAccessTime, path: "/tracker" },
  { name: "CALENDAR", icon: BsCalendar3, path: "/calendar" },
  { name: "DASHBOARD", icon: RiFunctionLine, path: "/dashboard" },
  { name: "REPORTS", icon: IoMdStats, path: "/" },
  { name: "PROJECTS", icon: RiFileList3Line, path: "/project" },
  { name: "TEAM", icon: GrGroup, span: "ANALYZE", path: "/" },
  { name: "CLIENTS", icon: VscAccount, path: "/" },
  { name: "TAGS", icon: GrTag, path: "/" },
  { name: "SETTINGS", icon: FiSettings, path: "/" },
];
import { Link as RouterLink } from "react-router-dom";
import { getItem } from "../Utils/localStorage";
import { useDispatch } from "react-redux";
import { logout } from "../Stores/Auth/auth.actions";

export default function DashboardNavbar({ children }) {
  const user = getItem("user");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 210 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <RouterLink to="/">
          <Image src="https://clockify.me/assets/images/clockify-logo.svg" />
        </RouterLink>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Box>
          <Text fontSize={"sm"} ml={"7"} color={"gray.500"}>
            {link?.span}
          </Text>
          <RouterLink to={link.path}>
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          </RouterLink>
        </Box>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#ccced0",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const user = getItem("user");
  const dispatch = useDispatch();
  const signoutHandler = () => {
    try {
      dispatch(logout());
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Logged Out Successfully!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Get back soon. You have to be consistent towards your goal!
        </AlertDescription>
      </Alert>;
    } catch (err) {
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>;
    }
  };
  return (
    <Flex
      ml={{ base: 0, md: 40 }}
      px={{ base: 4, md: 4 }}
      height="3.5rem"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="none"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <RouterLink to={"/"}>
        <Image
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          src="https://clockify.me/assets/images/clockify-logo.svg"
        />
      </RouterLink>

      <HStack spacing={{ base: "0", md: "8" }}>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Text>{user}</Text>
          <Text
            border={"1px solid #8ad9fa"}
            fontSize={["2", "8", "12"]}
            color={"#8ad7fa"}
            _hover={{ bg: "#8ad7fa", color: "#fff" }}
            p={[1]}
          >
            UPGRADE
          </Text>
          <Box>
            <IconButton
              borderLeft={"1px solid grey"}
              borderRadius="none"
              borderStyle={"dotted"}
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<GrCircleQuestion />}
            />
            <IconButton
              borderRadius="none"
              borderLeft={"1px solid grey"}
              borderRight={"1px solid grey"}
              borderStyle={"dotted"}
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />
          </Box>
        </HStack>

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              zIndex={999}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem
                cursor={"pointer"}
                color={"red"}
                fontWeight={500}
                onClick={signoutHandler}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
