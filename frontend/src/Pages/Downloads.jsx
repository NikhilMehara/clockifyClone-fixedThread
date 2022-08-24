import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Image,
  Badge,
  UnorderedList,
  ListItem,
  Tooltip,
} from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";
import styles from "./download.style.module.css";
import { Link } from "react-router-dom";
const Downloads = () => {
  return (
    <Box>
      <Headers />

      <Box bg={"#f7fcff"} p="4rem">
        <Text fontSize={"3xl"} textAlign="center" pt="2rem">
          Start tracking time with Clockify
        </Text>
        <Box display="flex" justifyContent="center" pt="2rem" pb="0.2rem">
          <Button
            bg={"#0277bd"}
            border={"none"}
            color="#fff"
            _hover={{ bg: "#0397bd" }}
            pt="6"
            pb="6"
            pl="14"
            pr="14"
          >
            CREATE FREE ACCOUNT
          </Button>
        </Box>
        <HStack justifyContent="center" pb="2rem">
          <FaUsers />
          <Text _hover={{ textDecoration: "underline" }} cursor="pointer">
            136,180 people signed up last month
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default Downloads;

const Headers = () => {
  return (
    <Box align="center">
      <Box
        display="flex"
        justifyContent="center"
        fontSize="4xl"
        mt="5rem"
        gap={"2"}
      >
        <Text>Time tracking apps</Text>
      </Box>
      <Text>
        Install Clockify and track time from anywhere — everything is synced
        online.
      </Text>
      <Box>
        <Box>
          <DeviceDiff />
        </Box>

        <Box w={["20rem", "30rem", "50rem"]}>
          <BadgeWrapper data={textWrite} />
        </Box>
        <VStack justifyContent="center">
          <PosterImg />
        </VStack>
      </Box>
    </Box>
  );
};
const DeviceApp = [
  "Chrome",
  "Firefox",
  "Mac",
  "Window",
  "Linux",
  "Android",
  "iOS",
];
const DeviceDiff = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      gap={"2"}
      p={"2"}
      flexWrap={"wrap"}
    >
      {DeviceApp?.map((el, index) => (
        <UnorderedList key={index}>
          <ListItem cursor={"pointer"} color={"blue"}>
            {el}
          </ListItem>
        </UnorderedList>
      ))}
    </Box>
  );
};

const textWrite = [
  { name: "Idle detection",span:"Stop Timer from Tracking time you speed away fron your computer" },
  { name: " Auto start/stop",span:"Automatically start or stop the timer when you turn on your computer or browser." },
  { name: " Offline mode" ,span:"Get notification when you forgatto start a timer."},
  { name: " Default project",span:"Stop Timer from Tracking time you speed away fron your computer" },
  { name: "Reminders",span:"Get notification when you forgatto start a timer." },
  { name: "Pomodoro timer" },
  { name: "Auto tracker", span:"Get notification when you forgatto start a timer."},
  { name: "Expenses",span:"Stop Timer from Tracking time you speed away fron your computer" },
  { name: "Time off" ,span:"Get notification when you forgatto start a timer."},
];

const BadgeWrapper = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <Tooltip
          hasArrow
          key={index}
          label={el.span}
          bg="black"
          color="#fff"
          placement="top-start"
        >
          <Badge colorScheme="green" ml={"2"}>
            {el.name}
          </Badge>
        </Tooltip>
      ))}
    </>
  );
};

const PosterData = [
  {
    image: "https://clockify.me/assets/images/clockify-apps-extension.png",
    title: "Browser extension",
    span: "Track time via extension.",
    img: [
      "https://clockify.me/assets/images/chrome-store.svg",
      "https://clockify.me/assets/images/firefox-store.svg",
      "https://clockify.me/assets/images/edge-store.svg",
    ],
  },

  {
    image: "https://clockify.me/assets/images/clockify-apps-desktop.png",
    title: "Desktop app",
    span: "Track time on your computer.",
    img: [
      "https://clockify.me/assets/images/download-app-mac.svg",
      "https://clockify.me/assets/images/download-app-windows.svg",
      "https://clockify.me/assets/images/download-app-linux.svg",
    ],
  },

  {
    image: "https://clockify.me/assets/images/clockify-apps-mobile.png",
    title: "Mobile app",
    span: "Track time and expenses on your phone.",
    img: [
      "https://clockify.me/assets/images/app-store-ios.svg",
      "https://clockify.me/assets/images/play-store-android.svg",
    ],
  },

  {
    image: "https://clockify.me/assets/images/clockify-apps-kiosk.png",
    title: "Kiosk",
    span: "Set up a shared time clock kiosk on any device.",
    tags: ["TTBLET", "PHONE", "COMPUTER"],
    button: "Learn more",
  },

  {
    image: "https://clockify.me/assets/images/pumble-apps.png",
    title: "Chat app",
    span: "Chat via Pumble app (desktop and mobile).",
    img: [
      "https://clockify.me/assets/images/app-store-ios.svg",
      "https://clockify.me/assets/images/play-store-android.svg",
      "https://clockify.me/assets/images/download-app-mac.svg",
      "https://clockify.me/assets/images/download-app-windows.svg",
    ],
  },
];

const PosterImg = () => {
  return (
    <>
      {PosterData?.map(
        ({ title, image, span, img, tags, button }, index, el) => (
          <Box key={index} w={["20rem", "45rem", "53rem"]}>
            <Box
              className={styles.masterBox}
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"start"}
              mt="6rem"
              mb="6rem"
            >
              <Box display="flex" margin="auto" justifyContent="center">
                <Image src={image} className={styles.mainImage} />
              </Box>
              <Box className={styles.mainBoxSVG}>
                <Box>
                  <Text fontSize={"3xl"}> {title}</Text>
                  <Text pt="2" pb="5">
                    {span}
                  </Text>
                  <Box display={"flex"} gap={"3"} pt="2" pb="2">
                    {tags?.map((el, index) => (
                      <UnorderedList key={index}>
                        <ListItem>{el}</ListItem>
                      </UnorderedList>
                    ))}
                  </Box>
                  {button ? (
                    <Text color={"blue"} textAlign={"start"} fontSize={"1xl"}>
                      Lern more
                    </Text>
                  ) : null}
                </Box>

                <Box
                  className={styles.appSVG}
                  display="flex"
                  flexWrap="wrap"
                  width={["20rem", "25rem", "25rem"]}
                  gap="5"
                >
                  {img?.map((el, index) => (
                    <Image
                      key={index}
                      src={el}
                      className={styles.IconSVG}
                      _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#fdecec",
              }}
            ></div>
          </Box>
        )
      )}
    </>
  );
};
