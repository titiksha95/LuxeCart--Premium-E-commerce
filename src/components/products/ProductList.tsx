import React from "react";
import ProductCard from "./ProductCard";
import img1 from "../../assets/headphones.jpg"
import img2 from "../../assets/smartwatch.webp"
import img3 from "../../assets/image.png"
import img4 from "../../assets/White-Image-1.jpg"



const products = [
  {
    id: 1,
    name: "Cool Headphones",
    price: 59.99,
    image: img1,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: img2,
  },
  {
    id: 3,
    name: "Wireless Mouse",
    price: 19.99,
    image: img3,
  },
    {
    id: 4,
    name: "Cool Headphones",
    price: 59.99,
    image: img4,
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 129.99,
    image: img2,
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 19.99,
    image: img3,
  },
    {
    id: 7,
    name: "Smart Watch",
    price: 129.99,
    image: img2,
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 19.99,
    image: img3,
  },
];

const ProductList: React.FC = () => {
  const handleBuy = (id: number) => {
    console.log(`Product ${id} bought!`);
    // TODO: Integrate with your cart system
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
