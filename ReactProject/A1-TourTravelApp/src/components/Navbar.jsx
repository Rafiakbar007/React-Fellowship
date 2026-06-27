function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          TravelPK
        </h1>

        {/* Links */}
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Destinations</li>
          <li className="hover:text-yellow-300 cursor-pointer">Packages</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;