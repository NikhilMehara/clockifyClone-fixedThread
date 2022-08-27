import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import React from 'react';

export default function Scheduler() {

    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            schedule: { type: 'month' }
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
            view={view}
            onEventClick={onEventClick}
       />
    ); 
}
