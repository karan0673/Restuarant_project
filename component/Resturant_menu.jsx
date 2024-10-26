import Restaurantcategory from "../component/Restaurantcategory"
import useResturant_menu from "../utils/useResturant_menu"
import Shimmer from "./Shimmer"
import { useParams} from "react-router-dom";
import {useState} from "react"



const Resturant_menu = () =>{

    const { resId } = useParams();
    // console.log(resId);
    
    const [showIndex, setshowIndex] = useState(null);
    
    const resInfo = useResturant_menu(resId);
    console.log(resInfo);
    

    if (resInfo===null) return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(itemCards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    console.log(categories);
    

    return(

        <div className="text-center p-8">
        <h1 className="font-bold m-6 text-xl">{name}</h1>
        <p className="font-bold text-lg">cuisines : {cuisines.join(" , ")}</p>
        <h2 className="font-bold text-sm"> price of two : {costForTwoMessage}</h2>
        <h3 className="font-bold text-sm">Rating : {avgRating} star</h3>
        {categories.map((category,index) => (
            <Restaurantcategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false }
          setshowIndex={() => setshowIndex(index)}/>
        ))}
        </div>

    )
}

export default Resturant_menu;
