import Restaurant,  { withPromotedLabel } from "./Restaurent"
import { useState, useEffect, useContext } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const Body = () => {
    // let listOfRestaurents = []
    let [listOfRestaurents, setListOfRestaurents] = useState([]);
    let [searchTxt, setSearchTxt] = useState("");
    let [filteredRestaurents, setFilteredRestaurents] = useState([])

    const {setUserName, loggedInUser} = useContext(UserContext)

    const RestaurentCardPromoted = withPromotedLabel(Restaurant)

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        
        const {restaurants} = json?.data?.cards[4]?.card?.card?.gridElements
        ?.infoWithStyle
        if(restaurants?.length) {
            restaurants?.map((eachItem) => {
                eachItem.info["promoted"] = (Math.random() < 0.5);
            })
        }
        setListOfRestaurents(restaurants);
        setFilteredRestaurents(restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h1>
                You are offline, Please check your internet Connection
            </h1>
        )
    }

    return listOfRestaurents.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-section flex items-center">
                <div className="search-section m-4 p-4 border-solid">
                    <input data-testid="searchInput" className="border border-solid border-gray-300" type="text" value={searchTxt} onChange={(e) => {
                        setSearchTxt(e.target.value)
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 border-solid rounded-lg" onClick={() => {
                        setFilteredRestaurents(listOfRestaurents.filter((res) => res?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())))
                    }}>Search</button>
                </div>
                <div className="">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        setFilteredRestaurents(listOfRestaurents.filter((res)=> res.info.avgRating > 4))
                    }}>Top Rated Restaurent</button>
                </div>
                <div className="px-4">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        setFilteredRestaurents(listOfRestaurents)
                        setSearchTxt("")
                    }}>Reset</button>
                </div>
                USER NAME (React Context): <input className="p-2 m-2 border border-solid border-gray-300" 
                value={loggedInUser}
                onChange={(e) => {
                    setUserName(e.target.value)
                }} type="text"/>
            </div>
            
            <div className="restaurant-container flex flex-wrap">
                {
                    filteredRestaurents?.map(restaurent => <Link key={restaurent?.info?.id} to={"/restaurent/"+restaurent?.info?.id}>
                        {
                        restaurent?.info?.promoted ? <RestaurentCardPromoted key={restaurent?.info?.id} resObj={restaurent}/> : <Restaurant key={restaurent?.info?.id} resObj={restaurent}/>
                        }
                    </Link>)
                }
            </div>
        </div>
    )
}

export default Body