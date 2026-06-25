import "./App.css"
import Cardcomp from "./components/Cardcomp"

function Cardapp () {

    return (

    <div className="bg-indigo-600 h-dvh w-dvw flex justify-center items-center gap-5">

      <p>hello</p>
      
      <Cardcomp  cardname="Flower Class" btnText="click me" cardimg="./flower.png"/>
     
      <Cardcomp  cardname="Garden Class" cardimg="./pinkflower.png" />
      
      
    
    </div>

    )
}

export default Cardapp