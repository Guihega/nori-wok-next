export type MenuCategory = "wok" | "ramen" | "sushi" | "veggie";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  categories: MenuCategory[];
  tag: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
