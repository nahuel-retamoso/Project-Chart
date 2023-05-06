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

  const calculateData = (P, hourlyRate, cookHourlyRate, portionCost, portionPrice) => {
    const portionsPerCook = 24;
    const maxHoursPerDay = 8;

    const cooks = Math.ceil(P / portionsPerCook);
    const motorcycles = Math.ceil((P * 15) / (60 * maxHoursPerDay));
  
    const cost = (
      P * portionCost +
      cooks * cookHourlyRate * maxHoursPerDay +
      motorcycles * hourlyRate * maxHoursPerDay
    );

  
    const gain = P * portionPrice - cost;

    const price = P * portionPrice;
  
    return { P, Cost: cost, Gain: gain, Price: price, Cooks: cooks, Motorcycles: motorcycles };
  };
  
  

  
  const data = Array.from(
    { length: Math.ceil((maxOrders - minOrders) / step) + 1 },
    (_, i) => {
      const P = minOrders + i * step;
      return calculateData(P, hourlyRate, cookHourlyRate, portionCost, portionPrice);
    }
  );
  
    return (
      <LineChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="P" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Cost" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Gain" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Price" stroke="#FF0000" />
        <Line type="monotone" dataKey="Cooks" stroke="#0000FF" />
        <Line type="monotone" dataKey="Motorcycles" stroke="#00FF00" />
      </LineChart>
    );
  };
  
  export default CostLineChart;
  