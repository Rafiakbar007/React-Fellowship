
import { useState } from "react"

import data from "./Data"
import "./App.css"



function Accordian() {

  const [showAns, setShowAns] = useState(null)
  const [showMultiAns, setShowMultiAns] = useState(false)
  const [multiAns, setMultiAns] = useState([])


  function singleAnswerFun(dataItemId) {

    if (showAns === dataItemId) {

      setShowAns(null)
    }
    else {
      setShowAns(dataItemId)
    }

  }

  function multiAnsFun(dataItemId) {

    let cpymultiAns = [...multiAns]
    const indexSelected = cpymultiAns.indexOf(dataItemId)

    if (indexSelected === -1) cpymultiAns.push(dataItemId)
    else cpymultiAns.splice(indexSelected, 1)

    setMultiAns(cpymultiAns)


  }

  console.log(showAns, multiAns)

  return (

    <div>

      <h1>ACCORDIAN</h1>


      <button
        className={showMultiAns ? "btnstyle" : "bstyle"}
        onClick={() => setShowMultiAns(!showMultiAns)}
      >
        {showMultiAns ? "Multiple Selection ON" : "Multiple Selection OFF"}
      </button>

      {
        data.map((dataItem) => (

          <div className="mCont" key={dataItem.id}>

            <div className="qContainer">

              {dataItem.question}

              <div className="aContainer"
                onClick={
                  showMultiAns
                    ?
                    (() => multiAnsFun(dataItem.id))
                    :
                    () => singleAnswerFun(dataItem.id)}
              > +
              </div>

            </div>

            <div >
              {
                showMultiAns ?
                  multiAns.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                  :
                  showAns === dataItem.id &&
                  <div>{dataItem.answer}</div>

              }
            </div>



          </div>
        ))
      }
      <div></div>

    </div>
  )
}

export default Accordian