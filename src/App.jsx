import React, { useState } from 'react';
import CostLineChart from './CostLineChart';

const App = () => {

  const [maxOrders, setMaxOrders] = useState(108);
  const [hourlyRate, setHourlyRate] = useState(400);
  const [cookHourlyRate, setCookHourlyRate] = useState(400);
  const [portionCost, setPortionCost] = useState(740);
  const [portionPrice, setPortionPrice] = useState(1000);



  const handleMaxOrdersChange = (event) => {
    const newMaxOrders = parseInt(event.target.value, 10);
    setMaxOrders(newMaxOrders);
  };

  const handleHourlyRateChange = (event) => {
    const newHourlyRate = parseInt(event.target.value, 10);
    setHourlyRate(newHourlyRate);
  };

  const handleCookHourlyRateChange = (event) => {
    const newCookHourlyRate = parseInt(event.target.value, 10);
    setCookHourlyRate(newCookHourlyRate);
  };
  

  const handlePortionCostChange = (event) => {
    const newPortionCost = parseInt(event.target.value, 10);
    setPortionCost(newPortionCost);
  };

  const handlePortionPriceChange = (event) => {
    const newPortionPrice = parseInt(event.target.value, 10);
    setPortionPrice(newPortionPrice);
  };
  
  

  return (
    <div>
    <label htmlFor="maxOrders">Max Orders: </label>
    <input
      type="number"
      id="maxOrders"
      value={maxOrders}
      onChange={handleMaxOrdersChange}
    />
    <br />
    <label htmlFor="hourlyRate">Hourly Rate per Motorcycle: </label>
    <input
      type="number"
      id="hourlyRate"
      value={hourlyRate}
      onChange={handleHourlyRateChange}
    />
     <br />
    <label htmlFor="cookHourlyRate">Hourly Rate per Cook: </label>
    <input
      type="number"
      id="cookHourlyRate"
      value={cookHourlyRate}
      onChange={handleCookHourlyRateChange}
    />
     <br />
    <label htmlFor="portionCost">Portion Cost: </label>
    <input
      type="number"
      id="portionCost"
      value={portionCost}
      onChange={handlePortionCostChange}
    />
     <br />
    <label htmlFor="portionPrice">Portion Price: </label>
    <input
      type="number"
      id="portionPrice"
      value={portionPrice}
      onChange={handlePortionPriceChange}
    />
    <CostLineChart minOrders={12} maxOrders={maxOrders} step={12} hourlyRate={hourlyRate} cookHourlyRate={cookHourlyRate} portionCost={portionCost} portionPrice={portionPrice}/>
  </div>
  );
};

export default App;
