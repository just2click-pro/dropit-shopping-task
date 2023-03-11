export interface CatalogProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  plus_minus?: number;
}

export interface ProductDetails extends CatalogProduct {
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}
