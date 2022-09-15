import { Trips } from "../../App";

const cheapTripsData: Trips = [
    {
        id: 990,
        image: require("../../assets/images/locations/dino.png"),
        text: "The dinosaurs",
        fav: false,
        price: "1 DOGE",
        realDuration: "10 sec",
        virtualDuration: "1 day",
    },
    {
        id: 991,
        image: require("../../assets/images/locations/medievalFarm.png"),
        text: "Some medieval farm or something",
        fav: false,
        price: "1 DOGE",
        realDuration: "10 sec",
        virtualDuration: "1 day",
    },
    {
        id: 992,
        image: require("../../assets/images/locations/pirates.jpg"),
        text: "Pirates?",
        fav: true,
        price: "1 DOGE",
        realDuration: "10 sec",
        virtualDuration: "1 day",
    },
    {
        id: 993,
        image: require("../../assets/images/locations/mars.jpg"),
        text: "Mars... kinda",
        fav: true,
        price: "1 DOGE",
        realDuration: "10 sec",
        virtualDuration: "1 day",
    },
];

export default cheapTripsData;
