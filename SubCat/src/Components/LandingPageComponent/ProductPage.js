import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LandingCard from "./Card";
import { NavLink } from 'react-router-dom';
import ProductDetails from "../ProductDetailPage/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Link} from 'react-router-dom';
import ProductSubCategory from "./ProductSubCategory";
const ProductPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    try {
      const response = axios
        .get(
          `http://localhost:8090/api/product/subCategory/${params.get('products')}`
        )
        .then((response) => {
          var arr = [response.data];
          setProducts(response.data);
          console.log(response.data);
          return response;
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
     <ul style = {{display: "flex",listStyle: "none"}}>
         <li><Link to='/' style={{ color: '#000000', textDecoration: 'none' }}>Home /</Link></li>
         <li><Link to='/' style={{ color: '#000000', textDecoration: 'none' }}>Categories /</Link></li> 
         <li><Link to='/productSubCategory/*' element = {<ProductSubCategory/>}style={{ color: '#000000', textDecoration: 'none' }}>Sub-Categories /</Link></li>   
         {/* <li><Link to='/product/*' element = {<ProductPage/>}style={{ color: '#000000', textDecoration: 'none' }}>Products</Link></li> */}
         <li>Products</li>
         {/*                   */}
                            
      </ul>
       {/* <h4 className='page-title'>PRODUCTS</h4> */}
      <Grid container spacing={4} className="product-card">
        {products.map((s) => (
          <Grid
            item key={s.id}
            style={{ width: "25%", padding: "0px", textAlign: "center" }}
          >
          <NavLink key={s.id}  to={`/productDetails?id=${s.id}`}
          style={{textTransform:'capitalize',textDecoration:'none',fontSize:'30px'}}>
            <LandingCard className="card-title"
              itemID={s.id}
              itemImage={"data:image/jpeg;base64," + s.image}
              itemName={s.name}
              itemPrice={s.price}
              itemStrikePrice={s.price}
              cardType="product"
            ></LandingCard>
            
          </NavLink>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductPage;
