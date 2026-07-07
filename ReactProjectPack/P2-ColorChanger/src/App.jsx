
import { useState } from "react"

import "./App.css"
import StarRating from './Components/StarRating'
import ImageSlider from './Components/ImageSlider'
import LoadMore from './Components/LoadMore'
import TreeView from './Components/TreeView'


function ColorChanger() {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [newColor, setNewColor] = useState("#000000")

  function handleCreateRandomHexColor() {

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)]
    }

    console.log(hexColor)

    setNewColor(hexColor)
  }


  console.log("type of color", typeOfColor)
  console.log("new color", newColor)


  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    console.log(`rgb(${r},${g},${b})`)

    setNewColor(`rgb(${r},${g},${b})`)

  }

  return (
    <div
      className="main-container"
      style={{ background: newColor }}
    >
      <div className="color-card">

        <h1 className="heading">
          Color Generator
        </h1>

        <div className="btn-container">

          <button
            className={typeOfColor === "hex" ? "active-btn" : ""}
            onClick={() => setTypeOfColor("hex")}
          >
            HEX Mode
          </button>

          <button
            className={typeOfColor === "rgb" ? "active-btn" : ""}
            onClick={() => setTypeOfColor("rgb")}
          >
            RGB Mode
          </button>

          <button
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
          >
            Generate Color
          </button>

        </div>

        <div className="color-value">
          <p>Current Color</p>
          <h2>{newColor}</h2>
        </div>

      </div>

      <StarRating noOfStars={6}/>
      <LoadMore />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'5'}/>
      <TreeView />

    </div>
  )
}

export default ColorChanger