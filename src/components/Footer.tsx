import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-playfair font-bold">LuxeCart</h2>
            <p className="text-background/70 text-sm">
              Your premium destination for luxury technology products. 
              Experience excellence in every purchase.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Products</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Categories</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-background mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-background mb-4">Stay Updated</h3>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to our newsletter for exclusive deals and new product announcements.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-background/70">support@luxecart.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-background/70">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-background/70">123 Luxury Ave, Tech City</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
          <p>&copy; 2024 LuxeCart. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};