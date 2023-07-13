import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LandingCard from "./Card";
import { NavLink } from 'react-router-dom';
import './landing.css';
import ProductPage from "./ProductPage";
import  {Link} from 'react-router-dom';
function ProductSubCategory(){
const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    try {
      const response = axios
        .get(
          `http://localhost:8090/category/${params.get('categoryName')}`
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
         <li>Sub-Categories</li>   
         {/* <Link to='/productSubCategory' style={{ color: '#000000', textDecoration: 'none' }}></Link>                   */}
                            
      </ul>
     {/* <h4 className='page-title'>SUB CATEGORIES</h4> */}
     {/* <hr className='divider-line'></hr> */}
      <Grid container spacing={4} className="product-card">
        {products.map((s) => (
          <Grid
            item key={s.id}
            style={{ width: "25%", padding: "0px", textAlign: "center" }}
          >
            {console.log(s.image)}
          <NavLink key={s.id}  to={`/products?products=${s.name}`}
          style={{textTransform:'capitalize',textDecoration:'none',fontSize:'30px'}} >
            <LandingCard
              itemID={s.id}
              itemImage={"data:image/jpeg;base64, " + s.image}
              itemName={s.name}
              // itemPrice={s.price}
              // itemStrikePrice={s.price}
              cardType="product"
            ></LandingCard>
          </NavLink>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default ProductSubCategory;



