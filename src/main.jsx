import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Shop from './components/Shop/Shop';
import HomeLayout from './Layout/home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoaders from './loaders/cartProductLoaders';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductLoaders
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
