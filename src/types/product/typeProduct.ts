export type Product = {
  title: string;
  price: number;
  discount: number;
  colors: string[];
  size: string[];
  description: string[];
  images: string[];
  category: string;
  gender: string;
  id: string;
};

export type PropsItem = {
  item: Product;
  className?: string;
  classNameImg?: string;
};
