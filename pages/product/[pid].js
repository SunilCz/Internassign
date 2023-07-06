import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addCart,deleteCart } from "../../store";
import Link from "next/link";


const Product = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [cartbtn , setcartbtn] = useState("Add to Cart");
  const dispatch = useDispatch();
   useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${pid}`);
      setData( await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
 
  const handleCart = (product)=>{
   if(cartbtn === "Add to Cart"){
    dispatch(addCart(product))
    setcartbtn("Remove to Cart")
   }
   else {
    dispatch(deleteCart(product))
     setcartbtn("Add to Cart")
   }
  }
  const Loading = ()=> {
    return <h1>Loading...</h1>
  }

  const Showproduct = ()=> {
    const src = `${data.image}`
    return (
        <div className="showproduct">
        <div  className="col s6" >
           
           <Image loader={()=> src} src={src} alt={data.title} height="400" width="400" />
           <h3 className="display-6 center-align" > 
            ${data.price}
         </h3>
        
        </div>
        <div className="col s6">
        
         <h1 className="display-5"> {data.title} </h1>
         <p className="lead fw-bolder">
           Rating {data.rating && data.rating.rate}
           <i className="material-icons">star</i>
         </p>
         
         <p className="lead">{data.description}</p>
         <button onClick={()=> handleCart(data)} className="waves-effect waves-teal btn-flat #ffff00 yellow accent-2"  style={{margin:"10px"}}>{cartbtn} </button>
        </div>

        </div>
    )
  }
  return (
    <div>
      <div className="container">
        <div className="row">
            {isLoading ? <Loading /> : <Showproduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
