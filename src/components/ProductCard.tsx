import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  isNew?: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
  isNew
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative bg-gradient-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden border border-border/50">
      
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground">
              New
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive">
              -{discount}%
            </Badge>
          )}
          {badge && (
            <Badge variant="secondary">
              {badge}
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button 
          size="sm" 
          variant="ghost" 
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-accent text-accent' 
                    : 'text-muted-foreground'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 shadow-sm"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};