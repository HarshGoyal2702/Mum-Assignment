import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AllProducts({ isAuthenticated }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/v1/product/products");
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    fetchProducts();
  }, [navigate]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className=" flex flex-col items-center gap-7 p-7">
      <Typography
        component="h1"
        variant="h5"
        style={{
          borderBottom: "2px solid black",
        }}
      >
        All Products
      </Typography>
      <div className=" flex items-center justify-center gap-4 flex-wrap">
        {products?.map((item, index) => {
          return (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              category={item.category}
              price={item.price}
              id={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
