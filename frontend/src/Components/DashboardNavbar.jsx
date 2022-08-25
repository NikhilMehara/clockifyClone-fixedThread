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
import Projects from './../Pages/Projects';
const LinkItems = [
  { name: "TIME TRACKER", icon: MdAccessTime },
  { name: "CALENDAR", icon: BsCalendar3 },
  { name: "DASHBOARD", icon: RiFunctionLine },
  { name: "REPORTS", icon: IoMdStats },
  { name: "PORJECTS", icon: RiFileList3Line },
  { name: "TEAM", icon: GrGroup, span: "ANALYZE" },
  { name: "CLIENTS", icon: VscAccount },
  { name: "TAGS", icon: GrTag },
  { name: "SETTINGS", icon: FiSettings },
];

export default function DashboardNavbar({ children }) {
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
        <Projects/>
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
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="https://clockify.me/assets/images/clockify-logo.svg" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Box>
          <Text fontSize={"sm"} ml={"7"}>
            {link?.span}
          </Text>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
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
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
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

      <Image
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        src="https://clockify.me/assets/images/clockify-logo.svg"
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Text>Name' workspace</Text>
          <Text
            border={"1px solid #8ad9fa"}
            fontSize={["2", "8", "12"]}
            color={"#8ad7fa"}
            _hover={{ bg: "#8ad7fa", color: "#fff" }}
            p={[1]}
          >
            UPGRADE
          </Text>
          <Box
          
          >
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
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
