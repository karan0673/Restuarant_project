import { CDN_URL } from "../utils/contant";

const Restaurantcard = (props) =>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resData;
    const {deliveryTime}=resData?.sla;
    return(
        <div className="p-4 m-3 w-[250px] h-[500px] rounded-lg" style={{backgroundColor:"#f0f0f0"}}>
        <img className="w-[176px] rounded-lg m-4" src={CDN_URL+ 
        cloudinaryImageId}/>
        <h3 className="font-serif font-bold">{name}</h3>
        <h5 className="font-serif">cuisines : {cuisines.join(" , ")}</h5>
        <h5 className="font-serif">{avgRating} Star</h5>
        <h5 className="font-serif">Delivery:{deliveryTime} min</h5>
        </div>
    );
};

export default Restaurantcard;