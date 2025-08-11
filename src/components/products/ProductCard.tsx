import React from "react";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  onBuy: (id: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onBuy }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-contain" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        <button
          onClick={() => onBuy(id)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
