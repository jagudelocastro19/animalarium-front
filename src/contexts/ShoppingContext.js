import React, { createContext, useState } from 'react';

const ProviderShop = ({ children }) =>{
  const [car, setCar] = useState([]);
  
  return (            
          <ShopContex.ProviderShop 
          value={[
            car,
            setCar,
          ]}>
              {children}
          </ShopContex.ProviderShop>  
  );
}

export default ProviderShop;
export const ShopContex = createContext();