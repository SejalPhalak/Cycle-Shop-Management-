import { useState, useEffect } from 'react';
import './Home.css'; // Import styles

export default function Home() {
  // Store cycle list
  const [cycles, setCycles] = useState([]);

  // Load mock data on page load
  useEffect(() => {
    // Data without images (will add assets later)
    const mockData = [
      { id: 1, name: "Hero Sprint Pro", price: 150 },
      { id: 2, name: "Hercules Roadeo", price: 200 },
      { id: 3, name: "Firefox Target", price: 250 }
    ];
    setCycles(mockData);
  }, []);

  return (
    <div className="home-container">
      <h2 className="page-title">Available Cycles for Rent</h2>
      
      <div className="cycle-list">
        {cycles.map((cycle) => (
          <div className="cycle-card" key={cycle.id}>
            
            {/* Temporary image box */}
            <div className="cycle-placeholder">
              Image Coming Soon
            </div>
            
            <div className="cycle-info">
              <h3>{cycle.name}</h3>
              <p>₹{cycle.price} / day</p>
              <button className="btn-book">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}