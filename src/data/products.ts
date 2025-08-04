import { Product } from "@/types";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Elegant Black Dress",
    price: 299,
    originalPrice: 399,
    image: product1,
    images: [product1],
    category: "Dresses",
    description: "A sophisticated black dress perfect for evening occasions. Made from premium materials with exceptional attention to detail.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Cashmere Sweater",
    price: 199,
    originalPrice: 249,
    image: product2,
    images: [product2],
    category: "Knitwear",
    description: "Luxuriously soft cashmere sweater that combines comfort with style. Perfect for layering or wearing alone.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Cream", "Gray"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: "3",
    name: "Classic White Blouse",
    price: 129,
    image: product3,
    images: [product3],
    category: "Tops",
    description: "A timeless white blouse that's a wardrobe essential. Versatile enough for both professional and casual settings.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Ivory"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: "4",
    name: "Tailored Blazer",
    price: 349,
    image: product1,
    category: "Outerwear",
    description: "Impeccably tailored blazer that adds sophistication to any outfit. Crafted from premium wool blend.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    inStock: true,
    rating: 4.6,
    reviews: 73
  },
  {
    id: "5",
    name: "Silk Camisole",
    price: 149,
    image: product2,
    category: "Tops",
    description: "Luxurious silk camisole with delicate details. Perfect for layering or wearing as a statement piece.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne", "Blush", "Black"],
    inStock: true,
    rating: 4.8,
    reviews: 92
  },
  {
    id: "6",
    name: "Wide-Leg Trousers",
    price: 219,
    image: product3,
    category: "Bottoms",
    description: "Elegant wide-leg trousers that offer both comfort and style. Perfect for both work and weekend wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Camel"],
    inStock: true,
    rating: 4.5,
    reviews: 68
  }
];

export const categories = [
  "All",
  "Dresses",
  "Tops",
  "Bottoms",
  "Outerwear",
  "Knitwear"
];