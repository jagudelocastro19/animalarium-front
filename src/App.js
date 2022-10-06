import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import ContenedorProductos from './screens/HomePage/ContenedorProductos'
import LoginPage from "./screens/Login/LoginPage";
import RegisterPage from "./screens/Login/RegisterPage";
import AccountPresenter from './screens/Perfil/AccountPresenter'
import PayPagePresenter from './screens/PayPage/PayPagePresenter'
import Provider from './contexts/LoginContext'
import React, { useState } from 'react';

const AppRoutes = ({callCarrito}) => {
  const [carrito,setCarrito] = useState([])
  const handleCarrito = (e) => {
    callCarrito(e);
    setCarrito(e)
  }
  return (
    <Routes>
      <Route path="/" element={<ContenedorProductos handleCarShop={handleCarrito} />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/Account" element={<AccountPresenter />} />
      <Route path="/Cart" element={<PayPagePresenter carrito={carrito}/>} />
    </Routes>
  )
}


const App = () => {
  const [carrito, setCarrito] = useState([]);
  const handleCarrito = (e) => {
    setCarrito(e);
  }
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <PrimarySearchAppBar carrito={carrito} />
          <AppRoutes callCarrito={handleCarrito}/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App

