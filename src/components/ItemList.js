import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="flex text-left p-2 m-2 justify-between border-gray-500 border-b-2">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹ {item?.card?.info?.price / 100}</span>
                        </div>
                        <p className="py-2 text-xs">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute ">
                            <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg">Add + </button>
                        </div>
                        {item?.card?.info?.imageId ? <img className="w-full" src={CDN_URL + item?.card?.info?.imageId} />: <></>}
                    </div>
                    
                </div>
            ))}
        </div>
    )
} 

export default ItemList;