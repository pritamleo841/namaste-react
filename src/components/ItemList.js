import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import {useDispatch} from "react-redux";

const ItemList = ({items})=>{

    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    };
    
    return (
        <div>
           {items.map(item => 
                <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2 font-bold">
                            <p>{item?.card?.info?.name}</p>
                            <p>₹{item?.card?.info?.price?(item?.card?.info?.price)/100 : (item?.card?.info?.defaultPrice)/100}</p>
                            <p className="text-green-800">
                                {item?.card?.info?.ratings?.aggregatedRating?.rating}({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                            </p>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute">
                            <button className="p-1 mx-16 bg-white shadow-lg rounded cursor-pointer" onClick={()=>handleAddItem(item)}>Add +</button>
                        </div>
                        <img className="w-28" src={CDN_URL+item?.card?.info?.imageId} alt="food image"/>
                    </div>
                </div>
           )}
        </div>
    )
}

export default ItemList;