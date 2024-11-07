import { Link } from 'react-router-dom';
import { TruckIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">
        Plateforme de Livraison Express
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Link to="/merchant" 
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <ShoppingBagIcon className="w-16 h-16 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Espace Marchand</h2>
          <p className="text-gray-600 text-center">
            Publiez vos colis à livrer et trouvez rapidement un livreur
          </p>
        </Link>

        <Link to="/delivery" 
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <TruckIcon className="w-16 h-16 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Espace Livreur</h2>
          <p className="text-gray-600 text-center">
            Trouvez des livraisons à effectuer dans votre zone
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;