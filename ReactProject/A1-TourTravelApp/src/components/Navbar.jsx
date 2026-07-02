

function Navbar() {
  return (

    <nav className="absolute top-0 left-0 w-full z-20 text-white  ">

      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center px-4 py-4 mt-2 md:flex-row md:border-2 sm:flex-row sm:border-2">
        {/* Logo */}
        <h1 className="text-3xl font-bold cursor-pointer">
          TravelPK
        </h1>

        {/* Links */}
        <ul className="font-medium flex flex-col md:flex-row md:gap-6 sm:flex-row ">
          <li className="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300 cursor-pointer sm:px-4 sm:py-2 md:px-4 md:py-2">
            Home
          </li>

          <li className="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300 cursor-pointer">
            Destinations
          </li>

          <li className="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300 cursor-pointer">
            Packages
          </li>

          <li className="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;