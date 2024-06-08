import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/store/cartSlice";

const ItemList = ({items, fromcart}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch An Action
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map((item, index) => (
                <div key={item?.card?.info?.id + index} data-testid="foodItems" className="flex text-left p-2 m-2 justify-between border-gray-500 border-b-2">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹ {item?.card?.info?.price ?  (item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100)}</span>
                        </div>
                        <p className="py-2 text-xs">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="w-3/12">
                        {
                            fromcart ? <></> : <div className="absolute">
                                <button className="cursor-pointer p-2 bg-black text-white shadow-lg mx-16 rounded-lg"  onClick={() => handleAddItem(item)}>Add +</button>
                            </div>
                        }
                        
                        {item?.card?.info?.imageId ? <img className="w-full" src={CDN_URL + item?.card?.info?.imageId} />: <></>}
                    </div>
                    
                </div>
            ))}
        </div>
    )
} 

export default ItemList;