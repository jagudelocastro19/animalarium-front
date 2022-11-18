import React, { createContext, useState } from 'react';

const Provider = ({ children }) =>{
  const [isLogged,setIsLogged] = useState(false);
  const [userInfo,setUserInfo] = useState([]);
  const [articleInfo,setArticleInfo] = useState([]);
  const [car, setCar] = useState([]);
  
  return (            
          <AppContext.Provider 
          value={[
            isLogged,
            setIsLogged,
            userInfo,
            setUserInfo,
            car,
            setCar,
            articleInfo,
            setArticleInfo,
          ]}>
              {children}
          </AppContext.Provider>  
  );
}

export default Provider;
export const AppContext = createContext();