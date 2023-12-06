import {useSelector} from "react-redux";
import {CartItemsContainer} from "./CartItemsContainer";
import {CartItem} from "./CardItem";

export const CartPage = () => {
    const cart = useSelector(state => state.cart);
    console.log("Cart in CartPage:", cart);
  
    return (
        <>
      
            {
                Array.isArray(cart) && cart.map(item => (
                    <CartItem
                        key={item.id}
                        bicycle={item}
                    />
                ))
            }
       
        </>
    )
}

export default CartPage