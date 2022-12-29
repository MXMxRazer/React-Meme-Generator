import { useSound, useState } from "react"
import Sound from './sound.mp3'

export default function Imp() {
    let time;
    const [values, functions] = useState(
        {
            hour: '',
            mins: '',
            sec: '',
        }
    )
    const typing = (event) => {
        values.hour = event.target.value
        console.log(values);
    }

    const typing2 = (event) => {
        values.mins = event.target.value
        console.log(values);
    }
    const typing3 = (event) => {
        values.sec = event.target.value
        console.log(values);
    }

    var a = 0;
    setInterval(() => {
        console.log(a);
        a++;
        if (a > 60) {

            a = 0;
        }
    }, 500);

    function play() {
        const [play] = useSound(Sound);
    }

    console.log(values)
    console.log("Ran!")
    function Demo() {
        const [isChecked, setIsChecked] = useState(
            false
        );

        const [playActive] = useSound(
            '/sounds/pop-down.mp3',
            { volume: 0.25 }
        );
        const [playOn] = useSound(
            '/sounds/pop-up-on.mp3',
            { volume: 0.25 }
        );
        const [playOff] = useSound(
            '/sounds/pop-up-off.mp3',
            { volume: 0.25 }
        );

        return (
            <div>
                <form>
                    <h3 id="h">Hours: </h3>
                    <input
                        name="hour"
                        onChange={typing}
                    ></input>
                    <h3 id="m">mins: </h3>
                    <input
                        onChange={typing2}
                        name="minute"
                    ></input>
                    <h3 id="s">sec: </h3>
                    <input
                        onChange={typing3}
                        name="second"
                    ></input>
                    <div class="timer">
                        <button onClick={play}>
                            Click me!
                        </button>
                        <h1>{values.hour} : {values.mins} {values.sec}</h1>
                    </div>
                </form>
                <checkbox
                    name="demo-checkbox"
                    checked={isChecked}
                    size={24}
                    label="I agree to self-isolate"
                    onChange={() => setIsChecked(!isChecked)}
                    onMouseDown={playActive}
                    onMouseUp={() => {
                        isChecked ? playOff() : playOn();
                    }}
                />
            </div>
        )
    }
}