export interface IShortProductInfo {
    id: number;
    name: string;
    brand: string;
    category: string[];
    price: number;
    isFavorite: boolean;
    image: string;
}

export interface IFullProductInfo extends IShortProductInfo {
    description: string;
}