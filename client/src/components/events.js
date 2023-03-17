import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from 'react-bootstrap/CardGroup';
import FormEvent from "./formevent";



function Events() {
    const [events, setEvents] = useState([]);

    const getRequest = () => {
      fetch("http://localhost:8085/api/events")
      .then((response) => response.json())
      .then(events => {
        setEvents(events); 
        console.log('Events fetched...', events);
        });
    }

    useEffect(() => {getRequest()}, []);

    const postRequest = (newEvent) =>{
      //console.log("From the parent", newEvent);
      return fetch("http://localhost:8085/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the front", data);
        setEvents((events) => [...events, data])
      })
    }
  return (
    <>
       
    <CardGroup className="eventCard">
    
            {events.map(event =>
            <EventCard  key={event.id} title={event.name} location={event.description} time={event.eventtime} reattend={event.reattend}/>
            )}
    
    </CardGroup>
   
    <FormEvent  postRequest={postRequest}/>    </>
  );
}

export default Events;