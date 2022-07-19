import React from "react";
import { useState } from "react";

function App() {
    let now = new Date().toLocaleTimeString()
    const [Time, setTime] = useState(now);


    setInterval(updateTime,100)

    function updateTime(){
        let newTime =new Date().toLocaleTimeString();
        setTime(newTime)
    }

    return (
        <div className="container">
            <h1>{Time}</h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    );
}

export default App;
