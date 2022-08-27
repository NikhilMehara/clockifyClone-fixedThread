import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import { SearchIcon, ChevronDownIcon, ArrowUpDownIcon } from "@chakra-ui/icons";
import CreateProjectModal from "../Components/CreateProjectModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProject, getProjects } from "../Stores/Tasks/tasks.actions";

const Links = ["Active", "Client", "Access", "Billing"];

const Filter = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        mt={10}
        bgColor="white"
        h={["15rem", "auto"]}
        border="1px"
        borderColor={"gray.400"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          pt={[20, 0]}
        >
          <Flex
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex
              as={"nav"}
              spacing={4}
              flexWrap={"wrap"}
              gap={[10, 5]}
              alignItems="center"
            >
              <Box display={{ base: "none", md: "block" }}>FILTER</Box>
              <Flex flexWrap={"wrap"} mt={[20, 0]}>
                {Links.map((link) => (
                  <Button
                    bgColor={"white"}
                    colorScheme={"none"}
                    color={"black"}
                    borderRadius={"none"}
                    borderRight={"1px dotted grey"}
                    fontWeight={400}
                    borderLeft={"1px dotted grey"}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {link}
                  </Button>
                ))}
              </Flex>
              <InputGroup w={[, "25rem"]}>
                <InputLeftElement
                  color={"gray.500"}
                  children={<SearchIcon />}
                />
                <Input placeholder="Project name" />
              </InputGroup>
              <Button
                variant={"outline"}
                colorScheme={"blue"}
                size={"sm"}
                mr={4}
                borderRadius={"sm"}
              >
                APPLY FILTER
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

const Project = () => {
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.taskReducer);
  const handleDelete = (ele) => {
    dispatch(deleteProject(ele._id));
    dispatch(getProjects());
  };
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <div>
      <DashboardNavbar>
        <Flex justifyContent={"space-between"} mt={10}>
          <Heading size={"lg"} fontWeight={"400"} color={"gray.500"}>
            Projects
          </Heading>
          <CreateProjectModal />
        </Flex>
        <Filter />
        <TableContainer border={"1px"} borderColor={"gray.300"} mt={10}>
          <Table variant="stripe">
            <Thead>
              <Tr
                borderBottom={"1px"}
                borderColor={"gray.300"}
                bgColor="#e4eaee"
              >
                <Td fontSize={"sm"} colSpan={9} color={"gray.500"}>
                  Projects
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr
                fontSize={"sm"}
                borderBottom="1px"
                borderColor={"gray.300"}
                color={"gray.500"}
              >
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    <Checkbox borderColor={"gray.300"} /> NAME{" "}
                    <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    CLIENT <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    TRACKED <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    AMOUNT <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems={"center"} gap={"2"}>
                    PROGRESS <ArrowUpDownIcon />
                  </Flex>
                </Td>
                <Td colSpan={4}>
                  <Flex alignItems={"center"} gap={"2"}>
                    ACCESS <ArrowUpDownIcon />
                  </Flex>
                </Td>
              </Tr>
              {projects.length > 0 &&
                projects.map((ele) => (
                  <Tr
                    fontSize={"0.9rem"}
                    borderBottom={"1px"}
                    borderColor={"gray.300"}
                  >
                    <Td>
                      <Flex alignItems={"center"} gap={"2"}>
                        <Checkbox borderColor={"gray.300"} /> {ele.name}
                      </Flex>
                    </Td>
                    <Td> -- </Td>
                    <Td color={"gray.600"}>0.00h</Td>
                    <Td color={"gray.600"}>0.00 USD</Td>
                    <Td>--</Td>
                    <Td colSpan={2}>Public</Td>
                    <Td cursor={"pointer"} onClick={() => setFav(!fav)}>
                      {!fav ? (
                        <Image
                          onClick={() => setFav(!fav)}
                          src="https://app.clockify.me/favorites-normal.2dcd9618b3e4e3a4.svg"
                        ></Image>
                      ) : (
                        <Image
                          onClick={() => setFav(!fav)}
                          src="https://app.clockify.me/favorites-active.499d0973f3d1cd69.svg"
                        ></Image>
                      )}
                    </Td>
                    <Td cursor={"pointer"}>
                      <Menu>
                        {({ isOpen }) => (
                          <>
                            <MenuButton isActive={isOpen}>
                              <Image src="https://app.clockify.me/assets/ui-icons/menu-dots-vertical.svg"></Image>
                            </MenuButton>
                            <MenuList
                              borderRadius={"md"}
                              borderColor={"gray.300"}
                            >
                              <MenuItem fontWeight={"bold"}>
                                <Button
                                  size={"sm"}
                                  colorScheme={"blue"}
                                  w={"100%"}
                                >
                                  Archieve
                                </Button>
                              </MenuItem>
                              <MenuItem
                                fontWeight={"bold"}
                              >
                                <Button
                                  size={"sm"}
                                  colorScheme={"red"}
                                  w={"100%"}
                                  onClick={() => handleDelete(ele)}
                                >
                                  Delete
                                </Button>
                              </MenuItem>
                            </MenuList>
                          </>
                        )}
                      </Menu>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </DashboardNavbar>
    </div>
  );
};

export default Project;
