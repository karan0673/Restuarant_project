import Restaurantcard from "./Restaurantcard"
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react";
import useoffline from "../utils/useoffline";
import {Link} from "react-router-dom";


const Body = () =>{

    let [listOfrestaurant,setlistOfrestaurant]=useState([]);
    let [filteredRestaurant, setFilteredRestaurant] = useState([]);
    
    let [searchtext,setsearchtext]=useState([""]);
    const onlinestatus = useoffline();


    useEffect(()=>{
      fetchData();
    },[])


    console.log("hi"+ listOfrestaurant);
    
    let fetchData = async()=>{
       let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")   
    
       let json = await data.json();
       console.log(json);

       setlistOfrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfrestaurant.length===0){
        return <Shimmer/>
    }

    if(onlinestatus === false){
        return(
            <h1>please check your internet connection!!!!.</h1>
        )
    }
    return(

        <div className="">
        <div className="flex p-7 space-x-8">
            <div className="">
            <button className="bg-slate-200 text-xl px-4 py-1 rounded-lg" onClick={()=>{
                let filterlist = listOfrestaurant?.filter(
                    (res) => res?.info?.avgRating > 4.5);
                    console.log(listOfrestaurant);
                    setFilteredRestaurant(filterlist);
            }}             
            >Filter
            </button>

            </div>
            <div className="space-x-2">
        <input className="border-yellow-8 border-4 rounded-md h-9" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value)}} placeholder="Search here..." onMouseOver={()=>{
            console.log("Cursor_on_searchbar")
        }}
        ></input>
        <button className="bg-slate-200 text-xl px-4 py-1 rounded-lg hover:bg-sky-600" onClick={()=>{
            console.log(searchtext)
            const filteredRestaurant = listOfrestaurant.filter((res) => res?.info?.name?.toLowerCase().includes(searchtext.toLowerCase()))
            setFilteredRestaurant(filteredRestaurant);
        }}>
            Search
        </button>
        </div>
        </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant)=>(
                <Link
                key={restaurant?.info}
                to={"/Restaurant/" + restaurant?.info?.id}>
                <Restaurantcard resData={restaurant?.info}/>
                </Link>
                ))}
            </div>
        </div>
    )
    
}

export default Body