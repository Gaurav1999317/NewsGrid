import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p>Email: <a href="mailto:info@example.com" className="text-blue-400 hover:underline">info@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 234 567 890</a></p>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-bold mb-2">Address</h2>
          <p>1234 Example Street</p>
          <p>City, State, 56789</p>
          <p>Country</p>
        </div>

        {/* Additional Information */}
        <div>
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <p>
            <a href="#" className="text-blue-400 hover:underline">Facebook</a> | 
            <a href="#" className="text-blue-400 hover:underline ml-2">Twitter</a> | 
            <a href="#" className="text-blue-400 hover:underline ml-2">Instagram</a>
          </p>
          <p className="mt-4">© {new Date().getFullYear()} Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
