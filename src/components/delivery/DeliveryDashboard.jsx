import { useState } from 'react';
import AvailableDeliveries from './AvailableDeliveries';
import ActiveDeliveries from './ActiveDeliveries';

function DeliveryDashboard() {
  const [activeDeliveries, setActiveDeliveries] = useState([]);
  
  const handleAcceptDelivery = (delivery) => {
    setActiveDeliveries([...activeDeliveries, { ...delivery, status: 'active' }]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Espace Livreur</h1>
      
      <div className="grid gap-8">
        <ActiveDeliveries deliveries={activeDeliveries} />
        <AvailableDeliveries onAcceptDelivery={handleAcceptDelivery} />
      </div>
    </div>
  );
}

export default DeliveryDashboard;