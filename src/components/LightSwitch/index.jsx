import { useReducer } from "react";
import { reducer } from "../../reducers/reducer";
import Lightbulb from "./Lightbulb";

const LightSwitch = () =>{

    const initialValue = false;

    const [state, dispatch] = useReducer(reducer, initialValue);

    const handleClick = () => {
        dispatch("TOGGLE")
    };

    return(
        <div style={{
            display:"flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 30
        }}>
            <Lightbulb fillColor={state ? "yellow" : "black"} />
            <button style={{marginTop: 20}} onClick={handleClick}>ON / OFF</button>
        </div>
    )
}

export default LightSwitch;