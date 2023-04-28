import { useState } from "react";
import "./App.css";
import StarsBackground from "./components/StarsBackground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StarsBackground />
  );
}

export default App;
