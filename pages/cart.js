import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart,deleteCart } from "../store";

const cart = ()=> {
   
    const state = useSelector((state)=> state.handleCart);
   
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(deleteCart(item))
    }
    const handleAdd = (item) => {
        dispatch(addCart(item))
    }


    const cartItems = (cartItem) => {
        const src = `${cartItem.image}`
        return (
            <div className="row #eceff1 blue-grey lighten-5" >
            <div className="container" key={cartItem.id} style={{margin:"20px"}}>
            <div className="col s4 center-align">
             <Image loader={()=> src} src={src} alt={cartItem.title} height="200" width="180"  />
            </div>
            <div className="col s6 center-align">
                <h3>{cartItem.title}</h3>

                <h5>{cartItem.qty} * ${cartItem.price} = ${cartItem.qty * cartItem.price}</h5>
                <button onClick={()=> handleAdd(cartItem)} style={{margin:"10px"}} ><i className="material-icons">add</i></button>
                <button onClick={()=> handleClose(cartItem)} style={{margin:"10px"}} ><i className="material-icons">remove</i></button>
            </div>
           
            </div>
          </div> 
        )
    }
    const emptycart = ()=> {
        return <h3 className="center-align"> Your Cart is Empty</h3>
    }
    const button = ()=> {
        return (
            < div className="center-align">
                <Link href="/" >
            <button  className=" waves-effect waves-teal btn-flat #76ff03 light-green accent-3"> Checkout </button>
            </Link>
            </ div>
        )
    }
    return (
        <>
        {state.length ===0 && emptycart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
        </>
    )
}
export default cart