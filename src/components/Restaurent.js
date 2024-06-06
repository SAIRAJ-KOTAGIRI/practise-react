import { CDN_URL } from "../utils/constants"

const Restaurant = (props) => {
    const {name, cuisines, avgRating, locality, cloudinaryImageId, id} = props?.resObj?.info
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200" key={id} id={id}>
            <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="font-bold">{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default Restaurant