


function DestinationPopUp ({destination, closepopup}) {


    return (
            <div>

       <div className="fixed inset-0 bg-black/65 flex justify-center items-center">

  <div
    className="relative rounded-xl w-96 overflow-hidden"
    style={{
      backgroundImage: `url(${destination.destImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >

    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 p-6 text-white">

      <h1 className="text-xl font-bold mb-2">
        {destination.name}
      </h1>

      <p>{destination.description}</p>

      <p>
        <strong>Location:</strong> {destination.location}
      </p>

      <p>
        <strong>Best Time:</strong> {destination.bestTime}
      </p>

      <p>
        <strong>Attractions:</strong> {destination.attractions}
      </p>

      <p>
        <strong>Package Price:</strong> {destination.price}
      </p>

      <button
        onClick={closepopup}
        className="mt-4 bg-white/20 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        Close
      </button>

    </div>

  </div>

</div>
            </div>
    )
}

export default DestinationPopUp;