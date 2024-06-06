import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_CDN_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
const RestaurentMenu = () => {
    
    const { resId } = useParams()

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

    const {itemCards} = restaurentData?.length ? restaurentData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card : {}
    return (restaurentData == null) ? <Shimmer /> : (
        <div className="px-10 pt-5">
            <img className="w-full h-[500px]" alt="res-menu-logo" src={CDN_URL+cloudinaryImageId}/>
            <h1 className="font-bold text-lg">{name}</h1>
            <h2 className="font-bold">{locality} , {areaName}</h2>
            <h3>{cuisines?.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2 className="font-bold pt-10 text-lg">Menu</h2>
            <ul className="flex flex-wrap">
                {itemCards?.map((eachItem) => (
                    <div className="max-w-[350px] each-res-card m-4 p-4 bg-gray-100 cursor-pointer hover:bg-gray-200" key={eachItem?.card?.info?.id}>
                        <img className="each-res-menu-logo w-[300px]" alt="each-res-menu-logo" src={MENU_CDN_URL+eachItem?.card?.info?.imageId}/>
                        <li className="each-res-detail break-words">{eachItem?.card?.info?.name} - Rs: {eachItem?.card?.info?.price / 100}</li>
                    </div>
                ))}
            </ul>
        </div>
    )

}

export default RestaurentMenu;