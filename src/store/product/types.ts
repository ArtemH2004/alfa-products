export interface IShortProductInfo {
  id: string;
  name: string;
  brand: string;
  category: string[];
  price: number;
  image: string;
}

export interface IFullProductInfo extends IShortProductInfo {
  description: string;
}

export interface IProductState {
  products: IFullProductInfo[];
}

export interface IProductActions {
  setProducts: (products: IFullProductInfo[]) => void;
  getProductById: (id: string) => IFullProductInfo | undefined;
  addProduct: (product: IFullProductInfo) => void;
  editProduct: (id: string, product: IFullProductInfo) => void;
  deleteProduct: (id: string) => void;
}

export interface IProductStore extends IProductState {
  actions: IProductActions;
}
