function DeliveryForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({
      description: formData.get('description'),
      pickupAddress: formData.get('pickupAddress'),
      deliveryAddress: formData.get('deliveryAddress'),
      status: 'pending'
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description du colis
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="w-full p-2 border rounded-md"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="pickupAddress" className="block text-sm font-medium text-gray-700 mb-2">
          Adresse de ramassage
        </label>
        <input
          type="text"
          id="pickupAddress"
          name="pickupAddress"
          required
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-2">
          Adresse de livraison
        </label>
        <input
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          required
          className="w-full p-2 border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Publier la livraison
      </button>
    </form>
  );
}

export default DeliveryForm;