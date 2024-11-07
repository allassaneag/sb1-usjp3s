import React from 'react';

function ActiveDeliveries({ deliveries }) {
  if (deliveries.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Livraisons Actives</h2>
        <p className="text-gray-500 text-center">Aucune livraison active pour le moment</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Livraisons Actives</h2>
      <div className="space-y-4">
        {deliveries.map((delivery) => (
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
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                En cours
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveDeliveries;