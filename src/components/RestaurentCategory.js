import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = (props) => {
    const {categoryData, showItems, setShowIndex} = props

    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            <div className="w-6/12 bg-gray-100 shadow-lg mx-auto my-4 items-center hover:bg-gray-200">
                <div className="flex justify-between p-4 cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{categoryData.title} ({categoryData?.itemCards?.length})</span>
                    <span>↓</span>
                </div>
                {showItems ? <ItemList items={categoryData?.itemCards}/> : <></>}
            </div>
        </div>
    )
}

export default RestaurentCategory;