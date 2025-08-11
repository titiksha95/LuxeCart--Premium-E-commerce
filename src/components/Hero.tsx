import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">Trusted by 50,000+ customers</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                Discover
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Luxury Tech
                </span>
                That Inspires
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience the finest collection of premium technology products, 
                carefully curated for those who appreciate quality and innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant group">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 text-foreground hover:bg-primary/5"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Products Sold</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroWatch} 
                alt="Premium Smartwatch" 
                className="w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
    </section>
  );
};