import { useState } from "react";

export default function Side() {
    var counter = 0; 
    var block = (<h2>Heading - 3</h2>); 
    const [value, state] = useState(
        [(<h1>Heading - 1</h1>),(<h1>Heading - 2</h1>)]
    )
    const increment = () => {
        counter++; 
        block = this.setState(
            <div>
                <h1>Heading ({counter})</h1>
            </div>
        )
        console.log(counter);  
    }
    const  here = value.map(
        item => {
            console.log(item);  
        }
    ) 
    const button = (<button onClick={increment}>Click me!</button>)
    const changing = (event) => {
        var Charging = [1,2,3,4,5]; 
        console.log(event.target.value); 
    } 
    return  (
        <div className='main'>
            <div className='write'>
                This is the side section
                {button}
                {block}
            </div>
            <div className='list'>
                <p>Title</p>
                <div className='container'>
                    <textarea 
                    id ="area"
                    rows={30}
                    onChange={changing}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}