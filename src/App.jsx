import { useState } from "react";
import "./App.css";

function App() {
  const [greetingInputText, setGreetingInputText] = useState("");
  const [greetingText, setGreetingText] = useState("");

  const updateGreetingInputText = (event) => {
    setGreetingInputText(event.target.value);
  };

  const updateGreetingText = () => {
    setGreetingText(greetingInputText);
  };

  return (
    <div className="App">
      <h1>Simple Greeting Message App 2</h1>
      <div className="greeting-container">
        <h2>{greetingText}</h2>
        <input
          type="text"
          value={greetingInputText}
          onChange={updateGreetingInputText}
        />
        <div className="buttons">
          <button onClick={updateGreetingText}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
