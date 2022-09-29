import { Trips } from "../../types/trips";

const cartData: Trips = [
    {
        id: 1,
        image: require("../../assets/images/locations/desert.jpg"),
        text: "Get hot (very hot) in the infinite desert",
        fav: false,
        price: "1 BTC",
        realDuration: "1 min",
        virtualDuration: "1 week",
        type: "featured",
    },

    {
        id: 990,
        image: require("../../assets/images/locations/dino.png"),
        text: "The dinosaurs",
        fav: false,
        price: "1 DOGE",
        realDuration: "10 sec",
        virtualDuration: "1 day",
        type: "cheap",
    },
    {
        id: 991,
        image: require("../../assets/images/locations/medievalFarm.png"),
        text: "Some medieval farm or something",
        fav: false,
        price: "1 DOGE",
        realDuration: "10 sec",
        virtualDuration: "1 day",
        type: "cheap",
    },

    {
        id: 993,
        image: require("../../assets/images/locations/mars.jpg"),
        text: "Mars... kinda",
        fav: true,
        price: "1 DOGE",
        realDuration: "10 sec",
        virtualDuration: "1 day",
        type: "cheap",
    },
];

export default cartData;
