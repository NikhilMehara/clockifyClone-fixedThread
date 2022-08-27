import { Divider, Heading } from "@chakra-ui/react";
import React from "react";
import CalendarComponent from "../Components/CalendarComponent";
import DashboardNavbar from "../Components/DashboardNavbar";
import Scheduler from "../Components/Scheduler";

const Calendar = () => {
  return (
    <DashboardNavbar>
      <Heading
        textAlign={"center"}
        color={"blue.400"}
        fontWeight={"400"}
        fontFamily={"cursive"}
        my={5}
      >
        Event Calendar
      </Heading>
      <CalendarComponent />
      <Heading
        textAlign={"center"}
        color={"blue.400"}
        fontWeight={"400"}
        fontFamily={"cursive"}
        my={10}
      >
        Task Scheduler
      </Heading>
      <Scheduler />
    </DashboardNavbar>
  );
};

export default Calendar;
