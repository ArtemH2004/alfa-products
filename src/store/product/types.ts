export interface IShortProductInfo {
    id: number;
    name: string;
    brand: string;
    category: string[];
    price: number;
    image: string;
}

export interface IFullProductInfo extends IShortProductInfo {
    description: string;
}