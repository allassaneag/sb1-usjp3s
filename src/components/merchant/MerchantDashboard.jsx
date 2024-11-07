import { useState } from 'react';
import DeliveryForm from './DeliveryForm';
import DeliveryList from './DeliveryList';

function MerchantDashboard() {
  const [deliveries, setDeliveries] = useState([]);

  const handleNewDelivery = (delivery) => {
    setDeliveries([...deliveries, { ...delivery, id: Date.now() }]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tableau de Bord Marchand</h1>
      <DeliveryForm onSubmit={handleNewDelivery} />
      <DeliveryList deliveries={deliveries} />
    </div>
  );
}

export default MerchantDashboard;