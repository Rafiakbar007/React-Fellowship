
import { useState } from 'react'

import CharacterGallery from './CharacterGallery'



function CharacterSlider({theme}) {


  return (

    <section id="characters">
        <div>
        
        <CharacterGallery theme={theme}/>
    </div>
    </section>
  )
}

export default CharacterSlider