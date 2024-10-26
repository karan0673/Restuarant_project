import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contant";
import { addItem } from "../utils/cartSlice";

const Itemcards=({items})=>{
const dispatch= useDispatch();

const HandleCart = (item)=> {
    dispatch(addItem(item));
};  
    

return (
    <div>
    <div>
    {items?.map((item) =>(
    <div className="p-4 m-6 border-gray-500 border-b-2 text-left flex" key={item?.card?.info?.id}>
    <div className="w-9/12">
    <div>
        <span className="py-2">
            {item?.card?.info?.name}
        </span>
        <span >
            {" "} - ₨ {item?.card?.info?.price/100}
        </span>
    </div>
    <div>
    <p className="font-normal text-left">{item?.card?.info?.description}</p>
    </div>
    </div>
    <div>
    <img src={CDN_URL+item?.card?.info?.imageId} className=" w-28 py-2 rounded-xl 3/12"></img>
    <div>
        <button className="mx-6 p-1 bg-slate-950 text-white w-16 rounded-md" 
        onClick={()=>HandleCart(item)}>ADD+</button>
    </div>
    </div>
    </div>
    
    ))}
    </div>
    </div>
)
}

export default Itemcards;