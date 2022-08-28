import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createProject, getProjects } from "../Stores/Tasks/tasks.actions";
import { getItem } from "../Utils/localStorage";

export default function CreateProjectModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("outside");
  const [projectName, setProjectName] = useState("");
  console.log(projectName);
  const dispatch = useDispatch();
  const handleCreate = () => {
    const payload = {
      name: projectName,
      tag: "",
      billable: false,
      useremail: getItem("user"),
    };
    dispatch(createProject(payload));
    dispatch(getProjects());
  };
  const btnRef = React.useRef(null);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        color={"white"}
        border={"1px"}
        fontWeight={400}
        bgColor={"blue.400"}
        borderRadius={"sm"}
        _hover={{
          color: "blue.400",
          bgColor: "white",
          borderColor: "blue.400",
          border: "1px",
        }}
        size={"md"}
      >
        CREATE NEW PROJECT
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Project</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
              <Flex>
                <Input
                  type={"text"}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                ></Input>
              </Flex>
              <Flex>
                <Select
                  icon={<MdArrowDropDown />}
                  placeholder="Select client"
                ></Select>
              </Flex>
              <Flex flexDir={"row"}>
                <Input type={"color"} w={"5rem"}></Input>
                <Flex alignItems={"center"} gap={"1"} ml={5}>
                  <Checkbox isChecked /> Public
                </Flex>
              </Flex>
              <Flex>
                <Select
                  icon={<MdArrowDropDown />}
                  placeholder="Select client"
                ></Select>
              </Flex>
            </SimpleGrid>
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Button onClick={handleCreate} colorScheme={"blue"}>
              Create
            </Button>
            <Button colorScheme={"red"} onClick={onClose}>
              Dismiss
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
