import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Express Delivery</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/merchant" className="text-gray-700 hover:text-blue-600">
              Espace Marchand
            </Link>
            <Link to="/delivery" className="text-gray-700 hover:text-blue-600">
              Espace Livreur
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;