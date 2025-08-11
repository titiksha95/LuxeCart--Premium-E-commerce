import { ProductCard } from "./ProductCard";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productHeadset from "@/assets/product-headset.jpg";
import productSpeaker from "@/assets/product-speaker.jpg";

const products = [
  {
    id: "1",
    name: "Premium Wireless Earbuds Pro",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 1247,
    image: productEarbuds,
    badge: "Best Seller",
    isNew: false
  },
  {
    id: "2", 
    name: "UltraBook Pro 15-inch Laptop",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.9,
    reviews: 892,
    image: productLaptop,
    isNew: true
  },
  {
    id: "3",
    name: "Flagship Smartphone 256GB",
    price: 899.99,
    rating: 4.7,
    reviews: 2156,
    image: productPhone,
    badge: "Editor's Choice"
  },
  {
    id: "4",
    name: "Gaming Headset RGB Elite",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 743,
    image: productHeadset,
    isNew: true
  },
  {
    id: "5",
    name: "Premium Wireless Speaker",
    price: 299.99,
    rating: 4.8,
    reviews: 567,
    image: productSpeaker,
    badge: "Premium"
  },
  {
    id: "6",
    name: "Wireless Earbuds Studio",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.5,
    reviews: 1098,
    image: productEarbuds,
    isNew: false
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium technology products, 
            designed to elevate your digital lifestyle.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-elegant font-medium">
            View All Products
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};