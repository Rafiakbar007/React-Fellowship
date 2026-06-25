
import React from "react";

function Cardcomp ({cardname , btnText="button default value" , cardimg}) {


return (

    <div>

{/*----------------------------------------------------------------------------------------*/}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl ">

        {/* Background Image */}
        <img
        src={cardimg}
        alt="Cover"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-8 min-h-87.5 text-white">
          
          <h2 className="text-3xl font-bold">
          {cardname}
          </h2>

          <p className="text-sky-300 font-medium mt-2">
          The Anti-Patterns hello my name is rafia
          </p>

          <div className="flex gap-2 mt-4 mb-4 text-sm">
            <span>No. 4</span>
            <span>•</span>
            <span>2025</span>
          </div>

          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-semibold">
            {btnText}
          </button>

        </div>

      </div>
      {/*----------------------------------------------------------------------------------------*/}


    </div>
)

}

export default Cardcomp