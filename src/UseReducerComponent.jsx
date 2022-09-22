import React, { useReducer } from "react";
 
// Defining the initial state and the reducer
const initialState = {
    age: 18,
    name: "Sanjeev"
};
const reducer = (state, action) => {
  console.log("state action is",state, action)
  switch (action.type) {
    case "add":
        return {
            ...state,
            age: state.age + action.payload
        }
    case "subtract":
        return {
            ...state,
            age: state.age - action.payload
        }
    case "reset":
      return {
        ...state,
        age: action.payload
      };
    default:
      throw new Error("Unexpected action");
  }
};
 
const App = () => {
    // Initialising useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("State after update is", state)
  return (
    <div>
      <h2>{state.age}</h2>
      <button onClick={() => dispatch({type:"add", payload:5})}>
        add
      </button>
      <button onClick={() => dispatch({type:"subtract", payload:2})}>
        subtract
      </button>
      <button onClick={() => dispatch({type:"reset", payload:0})}>
        reset
      </button>
    </div>
  );
};
 
export default App;