import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ChangeName from './ChangeName';

function App() {
  const [username, setUsername] = useState("");
  const handleInput = ev => {
    setUsername(ev.target.value);
  }

  return (
    <>
      <h1>State and Props</h1>
      <label htmlFor="username">Enter your name here: </label>
      <input type="text" id='username' placeholder='My wonderful name'
        onChange={handleInput}
      />
      <p> Hi there, {username} </p>
      <p>{username}, you are doing great today</p>
      <ChangeName username={username} setUsername={setUsername} />
    </>
  );
}

export default App;
