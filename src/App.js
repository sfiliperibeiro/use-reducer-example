import Counter from "./components/Counter";
import LightSwitch from "./components/LightSwitch";

const App = () => {
  return (
    <div>
      <h1>useReducer Example</h1>
      <hr></hr>

      <Counter />
      <hr></hr>
      <LightSwitch />
    </div>
  );
};

export default App;
