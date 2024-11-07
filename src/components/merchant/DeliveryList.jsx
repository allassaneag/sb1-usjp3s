function DeliveryList({ deliveries }) {
  if (deliveries.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        Aucune livraison publiée pour le moment
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Vos livraisons</h2>
      {deliveries.map((delivery) => (
        <div key={delivery.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{delivery.description}</p>
              <p className="text-sm text-gray-600 mt-1">
                De: {delivery.pickupAddress}
              </p>
              <p className="text-sm text-gray-600">
                À: {delivery.deliveryAddress}
              </p>
            </div>
            <span className={`px-2 py-1 rounded-full text-sm ${
              delivery.status === 'pending' 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {delivery.status === 'pending' ? 'En attente' : 'Acceptée'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeliveryList;