import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart Details</h1>
            {
                cartItems?.length == 0 ? <h1>Cart is empty, Please add Items to the Cart !!</h1> : 
                <div>
                    <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={() => handleClearCart()}>Clear Cart</button>
                    <div className="w-6/12 m-auto border border-gray-600">
                        <ItemList fromcart={true} items={cartItems} />
                    </div>
                </div>
                
            }
            
        </div>
    )
}

export default Cart;