import { CDN_URL } from "../utils/constants"

const Restaurant = (props) => {
    const {name, cuisines, avgRating, locality, cloudinaryImageId, id} = props?.resObj?.info
    return (
        <div className="restaurant-card" key={id} id={id}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default Restaurant