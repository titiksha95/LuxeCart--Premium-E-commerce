import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Headphones, Watch, Speaker, Camera } from "lucide-react";

const categories = [
  {
    id: "smartphones",
    name: "Smartphones",
    icon: Smartphone,
    count: 156,
    color: "text-blue-500"
  },
  {
    id: "laptops", 
    name: "Laptops",
    icon: Laptop,
    count: 89,
    color: "text-purple-500"
  },
  {
    id: "audio",
    name: "Audio",
    icon: Headphones,
    count: 203,
    color: "text-green-500"
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: Watch,
    count: 67,
    color: "text-orange-500"
  },
  {
    id: "speakers",
    name: "Speakers",
    icon: Speaker,
    count: 134,
    color: "text-red-500"
  },
  {
    id: "cameras",
    name: "Cameras",
    icon: Camera,
    count: 78,
    color: "text-indigo-500"
  }
];

export const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of premium technology products across various categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant="ghost"
                className="h-auto p-6 flex flex-col items-center space-y-3 bg-background hover:bg-background/80 border border-border/50 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors ${category.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-medium text-foreground text-sm mb-1">
                    {category.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {category.count} items
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};