import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Stack } from '@mui/material'; // Import Stack for layout

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/product/v1/getAllProduct');
      console.log('API Response:', response.data);

      if (Array.isArray(response.data.data)) {
        setProductList(response.data.data);
      } else {
        console.error('API response data is not an array:', response.data.data);
        setProductList([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProductList([]);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <React.Fragment>
      {Array.isArray(productList) && productList.length > 0 ? (
        <Stack
          direction="row"
          //spacing={1} // Adjust spacing between cards
          
          columnGap="20px"
          flexWrap="wrap" // Allow cards to wrap to the next line if there is not enough space
          sx={{ padding: '10px' }} // Optional: Add padding around the container
        >
          {productList.map((product) => (
            <ProductCard 
              key={product.id} // Ensure each item has a unique key
              product={product} 
            />
          ))}
        </Stack>
      ) : (
        <p>No products available.</p>
      )}
    </React.Fragment>
  );
};

export default HomePage;
