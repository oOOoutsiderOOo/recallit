export type Trip = {
    id: number;
    image: any;
    text: string;
    fav: boolean;
    price: string;
    realDuration: string;
    virtualDuration: string;
    type: string;
};

export type Trips = Trip[];
