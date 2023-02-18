import './App.css';
import React, { useState, useEffect } from "react"

function App() {

  const [message, setMessage] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/message`)
      .then((res) => res.json())
      .then((data) =>
        setMessage(data))
      .catch((err) => console.log(err))
  }, [])

  //console.log(message)

  return (
    <div className="App">
      {message.message}
    </div>
  );
}

export default App;
