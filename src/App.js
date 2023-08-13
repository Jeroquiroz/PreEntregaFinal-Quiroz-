
import './App.css';
import NavBar from '../src/Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./Componentes/itemDetailContainer/itemDetailContainer"
import CheckOut from './Componentes/CheckOut/CheckOut';
import React from 'react'
import  Cart  from './Componentes/Cart/Cart';
import CartProvider from './Componentes/Context/CartContext';


function App() {
  return (

    <>
      

      <BrowserRouter>

      <CartProvider>

      <NavBar/>

      <Routes>

        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:categoryId"} element={<ItemListContainer/>} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path={"/CheckOut"} element={<CheckOut />} />
        <Route path={"/Cart"} element={<Cart />} />
        

      </Routes>

      </CartProvider>
      
      </BrowserRouter>

      
          

    </>
  );
}

export default App;