


function PackagePopUp ({pkgdata,closePopUpBtn}) {



    return (

        <div>

<div className="fixed inset-0 bg-black/65 flex justify-center items-center">

  <div
    className="relative rounded-xl overflow-hidden w-full max-w-md mx-4"
    style={{
      backgroundImage: `url(${pkgdata.destImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >

    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 p-6 text-white">

      <h1 className="text-xl font-bold mb-2">
        {pkgdata.title}
      </h1>

      <p>{pkgdata.price}</p>

      <p>
        <strong>Duration:</strong> {pkgdata.duration}
      </p>

      <p>
        <strong>Accomodation:</strong> {pkgdata.accomodation}
      </p>

      <p>
        <strong>Transport:</strong> {pkgdata.transport}
      </p>

      <p>
        <strong>Meals:</strong> {pkgdata.meals}
      </p>

      <p>
        <strong>Guid:</strong> {pkgdata.guid}
      </p>

      <p>
        <strong>Highlights:</strong> {pkgdata.highlights}
      </p>

     <div className="flex gap-2 ">

 <button
        onClick={closePopUpBtn}
        className="mt-4 bg-white/20 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        Close
      </button>

      <button
        onClick={() => alert("Tour booked Successfully !")}
        className="mt-4 bg-white/20 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        Confirm Tour
      </button>

     </div>

    </div>

  </div>

</div>

        </div>
    )
}

export default PackagePopUp;