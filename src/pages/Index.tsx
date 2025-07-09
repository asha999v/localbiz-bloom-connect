import { ArrowRight, Users, TrendingUp, Shield, MessageSquare, BarChart3, Zap, Heart, Star, Leaf, Handshake, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-community.jpg";
import localProductsImage from "@/assets/local-products.jpg";
import aiTechImage from "@/assets/ai-technology.jpg";
import testimonialImage from "@/assets/testimonial-owner.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">LocalBiz AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Stories</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering local business,
              <br />
              <span className="text-accent">one connection at a time</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Connect local suppliers with small business owners through AI-powered matching, 
              negotiation, and community-driven commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <Users className="w-5 h-5 mr-2" />
                Join as Supplier
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/20 border-primary-foreground text-primary-foreground hover:bg-background hover:text-foreground">
                <Target className="w-5 h-5 mr-2" />
                Join as Business Owner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">How Local Sourcing Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, transparent, and community-focused. Our platform makes it easy for local businesses to find and work with each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Connect & Discover",
                description: "Local suppliers and businesses find each other through our smart matching algorithm based on location, needs, and values.",
                icon: <Handshake className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "AI-Powered Negotiation",
                description: "Our AI agents help negotiate fair prices, terms, and delivery schedules that work for both parties.",
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Grow Together",
                description: "Track success, get marketing insights, and build lasting partnerships that strengthen your local community.",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">AI-Powered Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Smart technology that empowers your business decisions and builds stronger local connections.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8 animate-fade-in">
              {[
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Smart Negotiation Agent",
                  description: "AI that understands local market prices and helps negotiate fair deals for everyone."
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Business Analytics",
                  description: "Track your local impact, sales trends, and community engagement with detailed insights."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Marketing Automation",
                  description: "Promote your partnerships and showcase your local sourcing story automatically."
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-lg bg-card hover:shadow-card transition-all duration-300" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-primary rounded-lg opacity-20 blur-lg"></div>
              <img 
                src={aiTechImage} 
                alt="AI Technology" 
                className="relative rounded-lg shadow-green w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Investor Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src={localProductsImage} 
                alt="Local Products" 
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Built for Trust & Growth</h2>
              <p className="text-xl text-muted-foreground">
                Backed by leading investors who believe in sustainable, community-driven commerce.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Shield className="w-8 h-8" />, title: "Secure Payments", desc: "Protected transactions" },
                  { icon: <Heart className="w-8 h-8" />, title: "Community First", desc: "Local impact focus" },
                  { icon: <Star className="w-8 h-8" />, title: "Verified Partners", desc: "Quality assurance" },
                  { icon: <Leaf className="w-8 h-8" />, title: "Sustainable", desc: "Eco-friendly sourcing" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Community Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real business owners building stronger local communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Martinez",
                role: "Bakery Owner",
                quote: "LocalBiz AI helped me find amazing local flour suppliers. My customers love knowing their bread supports our community.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Farm Supplier", 
                quote: "I've connected with 12 local restaurants through the platform. The AI negotiation tool saved me hours of back-and-forth emails.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Cafe Owner",
                quote: "The analytics showed me how much my local sourcing meant to customers. It's become our biggest selling point!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonialImage} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Local Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of businesses already building stronger communities through local partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 border-primary-foreground text-primary-foreground hover:bg-background hover:text-foreground">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">LocalBiz AI</span>
              </div>
              <p className="text-background/70 mb-4">
                Connecting local suppliers with small businesses through AI-powered community commerce.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">For Suppliers</a></li>
                <li><a href="#" className="hover:text-background transition-colors">For Businesses</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 mb-4 md:mb-0">
              © 2024 LocalBiz AI. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">Twitter</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">LinkedIn</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;