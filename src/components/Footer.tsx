const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">HST</span>
              </div>
              <div>
                <div className="font-bold text-lg">SOLUTIONS</div>
                <div className="text-xs text-gray-400">Engineering The Future, Today</div>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              We are a trusted Digital engineering and Enterprise modernization partner, 
              combining deep technical expertise and industry experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>hello@hstsolutions.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Tech Street<br />Innovation City, IC 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HST Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;