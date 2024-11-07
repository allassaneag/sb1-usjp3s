import React from 'react';

function AvailableDeliveries({ onAcceptDelivery }) {
  const mockDeliveries = [
    {
      id: 1,
      description: "Petit colis",
      pickupAddress: "123 Rue du Commerce",
      deliveryAddress: "456 Avenue du Marché",
      status: "pending"
    },
    {
      id: 2,
      description: "Documents urgents",
      pickupAddress: "789 Boulevard Central",
      deliveryAddress: "321 Rue des Affaires",
      status: "pending"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Livraisons Disponibles</h2>
      <div className="space-y-4">
        {mockDeliveries.map((delivery) => (
          <div key={delivery.id} className="border rounded-lg p-4">
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
              <button
                onClick={() => onAcceptDelivery(delivery)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Accepter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableDeliveries;