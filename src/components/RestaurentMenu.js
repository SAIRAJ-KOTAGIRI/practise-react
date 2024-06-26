import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_CDN_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
    
    const { resId } = useParams()

    const [showIndex, setShowIndex] = useState(0)

    /**
     * the below code moved as custom hook
    const [restaurentData, setRestaurentData] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(RESTAURENT_DATA_CDN_URL+resId+`&catalog_qa=undefined&submitAction=ENTER`);
        const jsondata = await data.json();
        setRestaurentData(jsondata.data.cards)
    }
     */

    const restaurentData = useRestaurentMenu(resId)

    const {name, locality, areaName, cloudinaryImageId, costForTwoMessage, cuisines} = restaurentData?.length ? restaurentData[2]?.card?.card?.info : {}

    // let dishesData = [];
    // if(restaurentData?.length && restaurentData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length) {
    //     let loopingDishesData = restaurentData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //     console.log(loopingDishesData)
    //     loopingDishesData?.forEach((eachRec) => {
    //         console.log(eachRec?.card?.card["@type"])
    //         if(eachRec?.card?.card?.title && eachRec?.card?.card?.itemCards?.length) {
    //             // console.log(eachRec?.card?.card?.itemCards)
    //             dishesData = [...dishesData, ...eachRec?.card?.card?.itemCards]
    //         }
    //     })
    //     console.log(dishesData, "asda")
    // }

    const categories = restaurentData?.length ? restaurentData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.["card"]?.["@type"] === ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")) : [];
    console.log("categories", categories)

    if(restaurentData == null) {
        return (
            <Shimmer /> 
        )
    }

    // if(itemCards?.length) {
    //     let itemCardsTemp = {...itemCards}
    //     itemCardsTemp?.map((eachItem) => {
    //         eachItem.card.info["promoted"] = (Math.random() < 0.5);
    //     })
    //     console.log(itemCardsTemp)
    // }

    

    return (
        <div className="text-center">
            <img className="w-full h-[500px] my-10" alt="res-menu-logo" src={CDN_URL+cloudinaryImageId}/>
            <h1 className="font-bold text-2xl">{name}</h1>
            <h2 className="font-bold mb-10">{locality} , {areaName}</h2>
            <h3>{cuisines?.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2 className="font-bold pt-10 text-lg">Menu</h2>
            {/* <ul className="flex flex-wrap">
                {itemCards?.map((eachItem, index) => (
                    <div className="max-w-[350px] each-res-card m-4 p-4 bg-gray-100 cursor-pointer hover:bg-gray-200" key={eachItem?.card?.info?.id + index}>
                        <img className="each-res-menu-logo w-[300px]" alt="each-res-menu-logo" src={MENU_CDN_URL+eachItem?.card?.info?.imageId}/>
                        <li className="each-res-detail break-words">{eachItem?.card?.info?.name} - Rs: {eachItem?.card?.info?.price / 100}</li>
                    </div>
                ))}
            </ul> */}
            {categories?.map((category, index) => (
                // Controlled Component
                <RestaurentCategory 
                    showItems={index == showIndex}
                    categoryData={category?.card?.card} 
                    setShowIndex={() => setShowIndex(index)}
                    key={category?.card?.card?.title}
                    />
                    
            ))}
        </div>
    )

}

export default RestaurentMenu;