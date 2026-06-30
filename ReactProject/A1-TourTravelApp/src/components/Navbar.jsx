

function Navbar() {
  return (

    <nav className="absolute top-0 left-0 w-full z-20 text-white  ">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 border-2 sm:px-6 md:px-8 py-4 md:py-5 mt-2">
        {/* Logo */}
        <h1 className="text-3xl font-bold cursor-pointer">
          TravelPK
        </h1>

        {/* Links */}
        <ul className="flex gap-4 font-medium">
          <li className="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300 cursor-pointer">
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