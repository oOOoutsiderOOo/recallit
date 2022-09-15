import { Trips } from "../../App";

const featTripsData: Trips = [
    {
        id: 0,
        image: require("../../assets/images/locations/underCity.jpg"),
        text: "Live the 40's in this amazing underwater city!",
        fav: true,
        price: "1 BTC",
        realDuration: "1 min",
        virtualDuration: "1 week",
    },
    {
        id: 1,
        image: require("../../assets/images/locations/desert.jpg"),
        text: "Get hot (very hot) in the infinite desert",
        fav: false,
        price: "1 BTC",
        realDuration: "1 min",
        virtualDuration: "1 week",
    },
    {
        id: 2,
        image: require("../../assets/images/locations/postField.jpg"),
        text: "Find a moment to relax in this old farm (before the next bomb drops)",
        fav: true,
        price: "1 BTC",
        realDuration: "1 min",
        virtualDuration: "1 week",
    },
    {
        id: 3,
        image: require("../../assets/images/locations/urbex.jpg"),
        text: "Experience Urbex without the risk of getting murdered by a junkie",
        fav: true,
        price: "0.5 BTC",
        realDuration: "15 sec",
        virtualDuration: "1 day",
    },
];

export default featTripsData;