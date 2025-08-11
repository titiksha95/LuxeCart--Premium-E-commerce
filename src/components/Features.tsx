import { Shield, Truck, CreditCard, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Your data and transactions are protected with enterprise-grade security."
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders over $50 with fast delivery options."
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day hassle-free returns with full refund guarantee."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help you with any questions."
  }
];

export const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};