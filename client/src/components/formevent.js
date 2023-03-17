//import { useState } from "react";
import { useReducer } from "react";

const FormEvent = (props) => {

    //This is my state with the initial values empty
    //This is my data
    //{title: 'Women', location: 'Overland'. eventtime: "2023-03-29T07:00:00.000Z"}

    function reducer(event, action) {
        //console.log(action, "monitoring if change is happening in console");
        switch(action.type){
          case "change_name" : {
            return {...event, name: action.newName}
          }
          case "change_description" : {
            return {...event, description: action.newDescription}
          }
          case "change_eventtime" : {
            return {...event, eventtime: action.newDate}
          }
          
        }
      }

      //wrote the useReducer hook *after* writing the reducer function above
      const [event, dispatchEvent] = useReducer(reducer, { name: "", location: "", eventtime: "" })
    
    // previously had a series of these change handlers until implementing reducer 
    // const handleNameChange = (e) => {
    //     e.preventDefault();
    //     let newName = e.target.value;
    //     setEvent((event) => ({ ...event, title: newTitle }));
    //     //console.log(event.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        //setEvent(event);
        //console.log(event);
        props.postRequest(event);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                id="add-event-name"
                placeholder="Event Name"
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
            <label>Description</label>
            <input
                type="text"
                id="add-event-description"
                placeholder="Event Description"
                required
                value={event.description} //state
                onChange={(e)=>{
                    dispatchEvent({
                      type: "change_description", 
                      newDescription: e.target.value
                    })
                   }
                  }
            />
             <label>Date</label>
            <input
                type="date"
                id="add-event-date"
                placeholder="Date"
                required
                value={event.eventtime} //state
                onChange={(e)=>{
                    dispatchEvent({
                      type: "change_eventtime", 
                      newDate: e.target.value
                    })
                   }
                  }
            />
            <button type="submit" >Add Event</button>
        </form>
    )

}

export default FormEvent;