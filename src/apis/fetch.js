import { useEffect, useState } from "react";

function Fetch() {
    const [Gdata, func] = useState({});

    console.log("Refreshed");

    useEffect( () => {
    console.log("Ran!"); 
    fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => func(data)) }, 
    []);  

    return (
        <div className="Fetch">
            <h1>Heading for the api JSON.</h1>
            <p>{JSON.stringify(Gdata, null, 4)}</p>
        </div>
    )
}

export default Fetch; 