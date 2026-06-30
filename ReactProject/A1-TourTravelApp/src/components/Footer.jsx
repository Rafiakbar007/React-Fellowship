import FooterImage from "../assets/FooterImage.png";

function Footer() {
  return (
    <footer className="relative mt-16 text-white">

      {/* Background Image */}
      <img
        src={FooterImage}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 ">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              TravelPK
            </h2>

            <p className="text-gray-300">
              Explore the beauty of Pakistan with
              unforgettable tours and travel
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300 ">
              <li className="hover: text-white cursor-pointer">
                Home
              </li>

              <li className="hover:text-white cursor-pointer">
                Destinations
              </li>

              <li className="hover:text-white cursor-pointer">
                Packages
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-300">
              📍 Islamabad, Pakistan
            </p>

            <p className="text-gray-300 mt-2">
              📧 info@travelpk.com
            </p>

            <p className="text-gray-300 mt-2">
              📞 +92 300 1234567
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-2 mt-10 pt-6 pb-6 text-center text-gray-300">

          <p>
            © 2026 TravelPK. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;