import { useSelector } from "react-redux";
import store from "../utils/store";
import CartCard from "../CartCard";


const Cart = ()=>{
    let cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);
    // console.log(cartItems[0]);
    cartItems.map((element)=>{
        console.log(element);
    })
    return(
        <>
            <h1>This is Cart Page</h1>
            {
                cartItems.map((element)=>{
                    return <CartCard {...element}/>
                })
            }
        </>
    )
}

export default Cart;