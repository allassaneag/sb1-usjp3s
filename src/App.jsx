import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import MerchantDashboard from './components/merchant/MerchantDashboard';
import DeliveryDashboard from './components/delivery/DeliveryDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merchant" element={<MerchantDashboard />} />
            <Route path="/delivery" element={<DeliveryDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;