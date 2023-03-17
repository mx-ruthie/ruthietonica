//import { useState } from "react";
import { useReducer } from "react";

const FormEvent = (props) => {

    //This is my state with the initial values empty
    //This is my data
    //{title: 'Women', location: 'Overland'. eventtime: "2023-03-29T07:00:00.000Z"}

    function reducer(event, action) {
        console.log(action);
        switch(action.type){
          case "change_name" : {
            return {...event, name: action.newName}
          }
        }
      }
      const [event, dispatchEvent] = useReducer(reducer, { name: "", location: "", eventtime: "" })
      
    // const handleNameChange = (e) => {
    //     e.preventDefault();
    //     let newName = e.target.value;
    //     setEvent((event) => ({ ...event, title: newTitle }));
    //     //console.log(event.title);

    // }
    // const handleLocationChange = (e) => {
    //     e.preventDefault();
    //     let newLocation = e.target.value;
    //     setEvent((event) => ({ ...event, location: newLocation }));
    //     //console.log(event.location);
    // }
    // const handleDateChange = (e) => {
    //     e.preventDefault();
    //     let newDate = e.target.value;
    //     setEvent((event) => ({ ...event, eventtime: newDate }));
    //     //console.log(event.eventtime);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        //setEvent(event);
        console.log(event);
        props.postRequest(event);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                id="add-event-name"
                placeholder="The Name of your Event"
                required
                value={event.name} //state
                onChange={(e)=>{
                    dispatchEvent({
                      type: "change_name", 
                      newName: e.target.value
                    })
                   }
                  }
            />
            {/* <label>Place</label>
            <input
                type="text"
                id="add-event-location"
                placeholder="The Location of your Event"
                required
                value={event.location} //state
                onChange={handleLocationChange}
            /> */}
            {/* <label>Date</label>
            <input
                type="date"
                id="add-event-date"
                value={event.eventtime} //state
                onChange={handleDateChange}
            /> */}
            <button type="submit" >Add Event</button>
        </form>
    )

}

export default FormEvent;