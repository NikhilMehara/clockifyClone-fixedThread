import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, getJson } from "@mobiscroll/react";

function CalendarComponent() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      "https://trial.mobiscroll.com/events/?vers=5",
      (events) => {
        setEvents(events);
      },
      "jsonp"
    );
  }, []);

  const responsive = React.useMemo(() => {
    return {
      xsmall: {
        view: {
          calendar: {
            type: "month",
          },
          agenda: {
            type: "day",
          },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          calendar: {
            labels: true,
          },
        },
      },
    };
  }, []);

  return (
    <Eventcalendar
      theme="ios"
      themeVariant="light"
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      eventDelete={true}
      data={myEvents}
      responsive={responsive}
    />
  );
}

export default CalendarComponent;
