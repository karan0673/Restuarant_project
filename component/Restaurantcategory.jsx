import Itemcards from "./Itemcards";

const Restaurantcategory=({data,showItems, setshowIndex}) =>{
   console.log(data);
   const handleClick = () => {
      setshowIndex();
    };
   return(
    <div>
        {/* ResCategory */}
        <div className="w-6/12 m-auto shadow-lg my-4 bg-gray-200 p-4 font-semibold rounded-xl ">
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick}>
         <span>
         {data.title} ({data?.itemCards?.length})</span>
         <span className="space-x-2">⏬</span>
        </div>
        {showItems && <Itemcards items={data?.itemCards}/>}
        </div> 
   </div>
   ) 
}



export default Restaurantcategory;