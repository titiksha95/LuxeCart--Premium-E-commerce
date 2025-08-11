import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">About LuxeCart</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          LuxeCart is your go-to online store for premium quality products. 
          We focus on delivering the best shopping experience with top-notch customer service.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
