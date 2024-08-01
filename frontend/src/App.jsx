import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Navbar from "./components/Navbar";
import axios from "axios";
import SignUp from "./pages/SignUp";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const isAuthenticatedUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/v1/user/info");
      const data = response.data;
      if (data.success === true) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    isAuthenticatedUser();
  }, [isAuthenticated]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route
          path="/products"
          element={<AllProducts isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/product/add"
          element={<NewProduct isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/product/update/:id"
          element={<UpdateProduct isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/login"
          element={<Login isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/register"
          element={<SignUp isAuthenticated={isAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
