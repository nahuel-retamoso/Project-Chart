import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


const CostLineChart = ({ minOrders, maxOrders, step, hourlyRate, cookHourlyRate, portionCost, portionPrice }) => {

  const calculateData = (
    P,
    hourlyRate,
    cookHourlyRate,
    portionCost,
    portionPrice
  ) => {
    const portionsPerCook = 24;
    const maxHoursPerDay = 8;
    const minutesPerDelivery = 15;
    const deliveriesPerHour = 60 / minutesPerDelivery;
  
    const cooks = Math.ceil(P / portionsPerCook);
    const motorcycles = Math.ceil(P / (deliveriesPerHour * maxHoursPerDay));
  
    const actualCookHours = Math.ceil((P / portionsPerCook) * maxHoursPerDay);
    const actualMotorcycleHours = Math.ceil(
      (P / (deliveriesPerHour * maxHoursPerDay)) * maxHoursPerDay
    );
  
    const cost =
      P * portionCost +
      cookHourlyRate * actualCookHours +
      hourlyRate * actualMotorcycleHours;
  
    const gain = P * portionPrice - cost;

    const price = P * portionPrice;

    const motorcycleCost = actualMotorcycleHours * hourlyRate;

    const cookCost = actualCookHours * cookHourlyRate;
  
    return {
      P,
      Cost: cost,
      Gain: gain,
      Price: price,
      Cooks: cooks,
      Motorcycles: motorcycles,
      MotorcycleCost: motorcycleCost,
      CookCost: cookCost,
      MotorcycleHours: actualMotorcycleHours,
      CookHours: actualCookHours,
    };
  };
  
  
  
  const data = Array.from(
    { length: Math.ceil((maxOrders - minOrders) / step) + 1 },
    (_, i) => {
      const P = minOrders + i * step;
      return calculateData(P, hourlyRate, cookHourlyRate, portionCost, portionPrice);
    }
  );
  
    return (
      <div>
        <LineChart
          width={1000}
          height={600}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="P" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Cost" stroke="#8884d8" />
          <Line type="monotone" dataKey="Gain" stroke="#82ca9d" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Price" stroke="#FF0000" />
        </LineChart>
        <LineChart
          width={1000}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="P" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Cooks" stroke="#0000FF" />
          <Line type="monotone" dataKey="Motorcycles" stroke="#00FF00" />
          <Line type="monotone" dataKey="MotorcycleCost" stroke="#FF00FF" />
          <Line type="monotone" dataKey="CookCost" stroke="#FF5F00" />
          <Line type="monotone" dataKey="MotorcycleHours" stroke="#00FFFF" />
          <Line type="monotone" dataKey="CookHours" stroke="#000000" />
        </LineChart>
      </div>
    );
  };
  
  export default CostLineChart;
  

