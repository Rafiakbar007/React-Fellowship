
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import DestinationSection from "./components/DestinationSection"
import PackageSection from "./components/PackageSection"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

import destinations from "./data/destinations"
import packages from "./data/packages"
import testimonials from "./data/testimonials"




function App() {
 

  return (
    <div className='bg-black/20'>

      <Hero />
      <DestinationSection destinations={destinations}/>
      <PackageSection packages={packages}/>
      <Testimonials reviews={testimonials} />
      <Footer />

    </div>
  )
}

export default App
