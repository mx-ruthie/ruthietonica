//import { useState } from "react";
import { useReducer } from "react";

const FormEvent = (props) => {


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
          case "change_reattend" : {
            return {...event, eventtime: action.reattend}
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
        //this is clearing the form onSubmit
        e.target.reset();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
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
            <label>Reattend?</label>
            <input
                type="radio"
                id="add-event-description"
                value={event.reattend} //state
                onChange={(e)=>{
                    dispatchEvent({
                      type: "change_reattend", 
                      newReattend: true
                    })
                   }
                  }
            />
            <button type="submit" className="button-67">Add Event</button>
        </form>
    )

}

export default FormEvent;