import { useState } from "react";
import "./App.css";
import Color from "./components/Color";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Color></Color>
    </div>
  );
}

export default App;
