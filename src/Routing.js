import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminProduct from "./components/AdminProduct/AdminProduct";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";
import Favorite from "./components/Favorite/Favorite";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
// import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/Products/ProductsList";

const Routing = () => {
  let PUBLIC_ROUTE = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/product",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/product/:id",
      element: <Details />,
      id: 3,
    },
    {
      link: "/favorite",
      element: <Favorite />,
      id: 8,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 9,
    },
    {
      link: "/payment",
      element: <Payment />,
      id: 10,
    },
    // {
    //   link: "/details/:id",
    //   element: <Details />,
    //   id: 3,
    // },
  ];
  let ADMIN_ROUTE = [
    {
      link: "/admin",
      element: <AdminProduct />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 1,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {PUBLIC_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
