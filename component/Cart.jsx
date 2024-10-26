import { useDispatch, useSelector } from "react-redux";
import Itemcards from "./Itemcards";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartitems=useSelector((store)=>store?.cart?.item)

    const dispatch=useDispatch();
    const HandleClearCart=()=>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4 font-bold text-lg">
            <h1>Cart (Taste your choice)</h1>
            <button className="bg-black text-white rounded-md m-2 p-1" onClick={HandleClearCart}>
                Remove
            </button>
            {cartitems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
            <div className="w-7/12 m-auto">
            <Itemcards items={cartitems}/>
            </div>
        </div>
    )
}

export default Cart