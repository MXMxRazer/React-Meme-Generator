import { useState } from 'react';
import '../index.css'
import images from './images';

function Body() {

    const [value, func] = useState(
        {
            top: "", 
            btm: "",
            img: ""  
        }
    ); 

    function randomize(event) { 
        func(
            prev => {
                const ran = Math.floor(Math.random() * images.length);
                return {
                    ...prev, 
                    img : images[ran].img   
                }
            }
        ) 
    }

    function handler(event) {
        const {name, value} = event.target
        func(
            prev => {
                return {
                    ...prev, 
                    [name] : value
                }
            }
        )
    }

    console.log(value); 

    function submitting(event) {
        event.preventDefault(); 
    }

    return (
        <div className='Body'> 
            <form onSubmit={submitting}>
                <div className='labeling'>
                <label htmlFor='first' id='flabel'>Top Text</label>
                <input 
                type="text"
                id="first"
                name='top'
                value={value.top}
                onChange={handler}
                ></input>
                
                <label htmlFor='last' id='llabel'>Bottom Text</label>
                <input 
                type="text"
                id="last"
                name='btm'
                value={value.btm}
                onChange={handler}
                ></input>
                </div>

                <div className='clicking'>
                <button 
                type='submit' 
                id='button'
                onClick={randomize}
                >Generate</button>
                </div>
            </form> 

            <div className='img-class'>    
                { value.img && <img 
                src={value.img}
                id='Img'/>}
                {value.img && <h1 id='img-h1'>{value.top}</h1>}
                {value.img && <h1 id='img-h2'>{value.btm}</h1>}
            </div>
        </div>
    )
}

export default Body; 