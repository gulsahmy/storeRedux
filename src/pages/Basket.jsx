import React from 'react'
import { useSelector } from 'react-redux';
import FiiledBasketTotal from '../components/FiiledBasketTotal';
import EmtyBasketTotal from '../components/EmtyBasketTotal';

const Basket = () => {
  const basketItems = useSelector((state) => state.basket);
  return (
    <div>
      {basketItems.length > 0 ? <FiiledBasketTotal /> : <EmtyBasketTotal />}
    </div>
  )
}

export default Basket