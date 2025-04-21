import React from "react";
import { useEffect, useReducer } from "react";

/**
  useReducer - 
                                    // two Dispatch Function
                                    // its initial State
  const [ variable, setVariable ] = setReducer(fn(), state)



  useState 
                                 
                                 // set Initial State 
  const [ variable, setVariable ] = setState(state)


 */

export default function Contact() {
  const inital_state = {
    us_state: "",
    phone_number: "",
    email: "",
  };

  // how would we do that

  function reducer(state, action) {
    switch (action) {
      case "SET_STATE":
        return { ...state, us_state: action.payload };
      case "SET_PHONE":
        return { ...state, phone_number: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };

      default:
        return {
          ...state,
          us_state: action.payload.us_state,
          phone_number: action.payload.phone_number,
          email: action.payload.email,
        };
    }
  }

  const [data, setData] = useReducer(reducer, inital_state);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch("http://localhost:8080/contact");
        const response = await data.json();
        console.log(response);
        setData({ type: "SET_ALL", payload: response });
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }, []);
  return (
    <div>
      <h1>{data.us_state}</h1>
      <h2>{data.phone_number}</h2>
      <h3>{data.email}</h3>
    </div>
  );
}
