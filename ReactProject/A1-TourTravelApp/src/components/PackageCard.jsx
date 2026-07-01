

import { useState } from "react";
import PackagePopUp from "./PackagePopUp"



function PackageCard({ pkgdata }) {

  const [showPackagePopUp, setShowPackagePopUp] = useState(false)


  return (


    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-transform duration-500">

      
      <div className="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        
        <img
        src={pkgdata.destImage}
        alt={pkgdata.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      </div>

      {/* Package Title */}
      <h2 className="text-2xl font-bold mb-3">
        {pkgdata.title}
      </h2>

      {/* Price */}
      <p className="text-gray-700 mb-2">
        Price: {pkgdata.price}
      </p>

      {/* Duration */}
      <p className="text-gray-700 mb-4">
        Duration: {pkgdata.duration}
      </p>

      {/* Button */}
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
       onClick={() => setShowPackagePopUp(true)}
      >
        Book Now
      </button>

      {
        showPackagePopUp && (

          <PackagePopUp
          pkgdata = {pkgdata}
          closePopUpBtn = {() => setShowPackagePopUp(false)}
          />
        )
      }

    </div>
  );
}

export default PackageCard;