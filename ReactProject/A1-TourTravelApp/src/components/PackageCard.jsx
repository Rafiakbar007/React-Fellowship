function PackageCard({ pkgdata }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">

      {/* Image Placeholder */}
      <div className="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        
        <img
        src={pkgdata.destImage}
        alt={pkgdata.name}
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
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Book Now
      </button>

    </div>
  );
}

export default PackageCard;