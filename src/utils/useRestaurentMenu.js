import { useEffect, useState } from "react";
import { RESTAURENT_DATA_CDN_URL } from "./constants";


const useRestaurentMenu = (resId) => {
    // Fetch Data
    const [restaurentData, setRestaurentData] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(RESTAURENT_DATA_CDN_URL+resId+`&catalog_qa=undefined&submitAction=ENTER`)
        const jsondata = await data.json()
        setRestaurentData(jsondata.data.cards)
    }

    return restaurentData;
}

export default useRestaurentMenu;