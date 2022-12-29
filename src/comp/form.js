import { useState } from 'react'
import '../index.css'

export default function Form() {

    const [value, func] = useState(
        {
            fName: "",
            lName: "", 
            state: false 
        }
    ); 

    function run(event) {
        const {name, value, type, checked} = event.target
        func (
            prev => {
                return {
                    ...prev, 
                    [name] : type === "checkbox" ? checked : value
                }
            }
            )
    }
    console.clear(); 
    console.log(value); 

    return (
        <form className='form'>
            <input 
            type="text"
            name='fName'
            placeholder='First Name'
            onChange={run}
            value={value.fName}
            ></input>
            <input 
            type="text"
            name='lName'
            placeholder='Last Name'
            onChange={run}
            value={value.lName}
            ></input>
            <br></br>
            <input 
            type="checkbox"
            value={value.state}
            checked={value.state}
            onChange={run}
            name="state"
            id='tick'
            ></input>
            <label htmlFor='tick'>Click it!</label>
        </form>
    )
}