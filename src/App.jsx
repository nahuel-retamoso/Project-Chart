import React, { useState } from 'react';
import CostLineChart from './CostLineChart';
import { Flex, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react';

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
    <Flex w='100%' bg='blackAlpha.100'>
      <Flex w='70%' justify='center'>
        <CostLineChart minOrders={12} maxOrders={maxOrders} step={12} hourlyRate={hourlyRate} cookHourlyRate={cookHourlyRate} portionCost={portionCost} portionPrice={portionPrice} />
      </Flex>
      <Flex position='sticky' alignSelf='flex-start' top='0' direction='column' boxShadow='md' p='20px' h='100vh' w='30%'>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon w='70%' children="Max Orders" />
            <Input
              type="number"
              id="maxOrders"
              value={maxOrders}
              onChange={handleMaxOrdersChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w='70%' children="Hourly Rate per Motorcycle" />
            <Input
              type="number"
              id="hourlyRate"
              value={hourlyRate}
              onChange={handleHourlyRateChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w='70%' children="Hourly Rate per Cook" />
            <Input
              type="number"
              id="cookHourlyRate"
              value={cookHourlyRate}
              onChange={handleCookHourlyRateChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w='70%' children="Portion Cost" />
            <Input
              type="number"
              id="portionCost"
              value={portionCost}
              onChange={handlePortionCostChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w='70%' children="Max Orders" />
            <Input
              type="number"
              id="portionPrice"
              value={portionPrice}
              onChange={handlePortionPriceChange}
            />
          </InputGroup>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default App;
