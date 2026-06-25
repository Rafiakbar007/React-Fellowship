import { useState } from "react";
import "./Counterapp.css";



function Counterapp (){

    let [counter, setCounter] = useState(0)
    let [darkMode, setDarkMode] = useState(false)

    //let counter = 5

    let mode = "container";
    
    if (darkMode) {
        mode = "container-dark"
    }

    const IncreaseFun = () => {
     
        if (counter<20) {
             
             counter = counter+1;
             setCounter(counter)
             console.log("increased",  counter);
        }
       
    }

    const DecreaseFun = () => {

        if (counter>0) {

            counter = counter-1;
            setCounter(counter)
            console.log("decreased", counter);
        }
       
    }

    const ResetFun = () => {
         
        setCounter(0)
    }

    const DarkmodeFun = () => {
        
        setDarkMode(!darkMode);
    }

    return(

        
        <div className={mode}>

            <div className="card">

                <h1>COUNTER APP</h1>

                <h2>{counter} </h2>

                <div className="buttons">
                    
                    <button onClick={DecreaseFun}>-</button>
                    <button onClick={IncreaseFun}>+</button>
                    <button onClick={ResetFun}>R</button>
                    <button onClick={DarkmodeFun}>
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                </div>

{/* conditional rendering */}

                {counter === 5 && (
                    <div className="limmitMessage">
                         <p>⚠️ Maximum count limit reached!</p>
                    </div>
                )}

            </div>

        </div>

    )

}

export default Counterapp;