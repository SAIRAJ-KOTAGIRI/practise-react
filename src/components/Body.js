import Restaurant from "./Restaurent"
import resObj from "../utils/mockdata"
import { useState } from "react"

const Body = () => {
    // let listOfRestaurents = []
    let [listOfRestaurents, setListOfRestaurents] = useState(resObj);
    return (
        <div className="body">
            <div className="filter-section">
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        setListOfRestaurents(resObj.filter((res)=> res.info.avgRating > 4))
                    }}>Top Rated Restaurent</button>
                </div>
                <div className="reset">
                    <button className="reset-btn" onClick={() => {
                        setListOfRestaurents(resObj)
                    }}>Reset</button>
                </div>
            </div>
            
            <div className="restaurant-container">
                {
                    listOfRestaurents?.map(restaurent => <Restaurant key={restaurent?.info?.id} resObj={restaurent}/>)
                }
            </div>
        </div>
    )
}

export default Body