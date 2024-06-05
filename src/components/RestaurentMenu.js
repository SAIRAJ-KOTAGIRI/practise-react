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
        <div className="container res-menu">
            <img className="res-menu-logo" alt="res-menu-logo" src={CDN_URL+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h2>{locality} , {areaName}</h2>
            <h3>{cuisines?.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((eachItem) => (
                    <div className="each-res-card" key={eachItem?.card?.info?.id}>
                        <img className="each-res-menu-logo" alt="each-res-menu-logo" src={MENU_CDN_URL+eachItem?.card?.info?.imageId}/>
                        <li className="each-res-detail">{eachItem?.card?.info?.name} - Rs: {eachItem?.card?.info?.price / 100}</li>
                    </div>
                ))}
            </ul>
        </div>
    )

}

export default RestaurentMenu;