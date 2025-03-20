import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const validateEmail = (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
      console.log(email);
      setMessage(`✅ ${email}`);
      setIsError(false);
      setEmail("");
    } else {
      setMessage("❌ Invalid Email Address");
      setIsError(true);
    }
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
    setMessage("checking...");
    setIsError(false);
  };

  return (
    <div className="App">
      <h1>Email Validation App</h1>
      <form className="email-container" onSubmit={validateEmail} onChange={updateEmail}>
        <h2 style={{ color: "red" }}>{message}</h2>
        <input type="text" placeholder="Enter your email" />
        <div className="buttons">
          <button type="submit">Validate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
