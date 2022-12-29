import { render } from '@testing-library/react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useEffect, useState } from 'react';
import '../index.css'
import objs from './objs'
import Side from './side'

export default function Main() { 
    const [notes, funcNotes] = useState([]); 
    const [notesValue, valfunc] = useState(
        {
            pos: false,  
            text: '',
        }
    ); 
    var key = 0;
    var counter = 0; 
    var lists;  
    let items; 
    
    if (notes == '') {
        notes[0] = 1; 
    }
    var Charging; 
    items = objs.map(values => <li key={values.id}>{values.name}</li>)
    const increment = (counter) => {
        console.log(notes);
        counter = notes.length;  
        lists = 
        (
            <h1 key={counter}>Header-{counter}</h1>
        )
        funcNotes (
            prev => ([
                ...prev, 
                lists
            ])
        )
        console.log("Finished!")
        console.log(notes.length)
    }  

    const rendering = () => {
        this.setState( {
            comp: true,  
        })
    }

   const button = (<button onClick={() => increment(counter)}> Click me !</button>)
   const button2 = (<button onClick={rendering}>Adder</button>)

    const changing = (event) => {
        notesValue['text'] = event.target.value; 
        console.log(notesValue);
    
    return  (
        <div className='main'>
            <div className='write'>
                {button}
                <ul>{Charging}</ul>
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
}