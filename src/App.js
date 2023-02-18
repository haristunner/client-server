import './App.css';
import React, { useState, useEffect, useRef } from "react"
import axios from 'axios';

function App() {

  const [message, setMessage] = useState({});

  const [userName, setUserName] = useState()

  useEffect(() => {
    fetch(`http://localhost:8000/message`)
      .then((res) => res.json())
      .then((data) =>
        setMessage(data))
      .catch((err) => console.log(err))
  }, [])

  //console.log(message)

  const data = {
    userName
  }

  const addUser = (e) => {
    e.preventDefault();
    //console.log(userName);

    axios.post(`http://localhost:8000/name`, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))

    // fetch(`http://localhost:8000/name`, { method: 'post', headers: { 'content-Type': 'application/json' }, body: JSON.stringify(userName) })
    //   .then((res) => res.json())
    //   .catch((err) => console.log(err))
  }


  return (
    <div className="App">
      <p>
        {message.message}
      </p>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button onClick={addUser}>submit</button>
    </div>
  );
}

export default App;
