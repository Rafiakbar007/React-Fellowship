function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        Image
      </div>

      {/* Destination Name */}
      <h2 className="text-2xl font-bold mb-2">
        {destination.name}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        {destination.description}
      </p>

      {/* Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Explore
      </button>

    </div>
  );
}

export default DestinationCard;