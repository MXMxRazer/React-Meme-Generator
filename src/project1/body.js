import { useState, useEffect } from 'react';
import '../index.css'
import images from './images';

function Body() {
    const [Gdata, func1] = useState();
    const [show, showSet] = useState(false); 

    const [value, func] = useState(
        {
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
    useEffect(() => {
        fetch("https://meme-api.com/gimme/1")
        .then(res => res.json())
        .then(data => {
            data.memes.map(item => {
                func1(prev => item.url)
            })
        }) }, 
    [show]); 

    const generateClick = () => {
        
        console.log(Gdata)

    }  


    console.log(value); 

    function submitting(event) {
        event.preventDefault(); 
    }

    return (
        <div className='Body'> 
            <form onSubmit={submitting}>
                <div className='labeling'>
                
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
                onClick={() => {
                    generateClick(); 
                    showSet(prev => !prev); 
                }}
                >Generate</button>
                </div>
            </form> 

            <div className='img-class'>    
                { Gdata && <img 
                // src={value.img}
                src={Gdata}
                id='Img'/>}
                {Gdata && <h1 id='img-h1'>{value.top}</h1>}
                {Gdata && <h1 id='img-h2'>{value.btm}</h1>}
            </div>
        </div>
    )
}

export default Body; 