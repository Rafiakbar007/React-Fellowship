
import { useState } from "react";
import DestinationPopUp from "./DestinationPopUp";



function DestinationCard({ destination }) {

 const [showDestinationPopUp, setShowDestinationPopUp] = useState(false)

  return (
    <div className="bg-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500 transform-gpu">

      {/* Image */}
      <img
        src={destination.destImage}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        
        <h3 className="text-xl font-bold mb-2">
          {destination.name}
        </h3>

        <p className="text-gray-600 mb-4">
          {destination.description}
        </p>

       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300"
       onClick={() => setShowDestinationPopUp(true)}
       >
  Explore
</button>

{showDestinationPopUp && (

  <DestinationPopUp

    destination = {destination}
    closepopup = {() => setShowDestinationPopUp (false)}
  
  />

)} 

      </div>

    </div>
  );
}

export default DestinationCard;