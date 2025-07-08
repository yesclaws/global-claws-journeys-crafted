
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Map, Utensils, Bed } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Mountain Alps",
      description: "Breathtaking mountain landscapes and cozy alpine villages",
      image: "photo-1458668383970-8ddd3927deed",
      guides: 5
    },
    {
      id: 2,
      name: "Desert Adventures",
      description: "Explore ancient cultures and stunning desert landscapes",
      image: "photo-1466442929976-97f336a657be",
      guides: 3
    },
    {
      id: 3,
      name: "Forest Retreats",
      description: "Peaceful forest escapes and nature immersion",
      image: "photo-1523712999610-f77fbcfc3843",
      guides: 4
    }
  ];

  const services = [
    {
      icon: Map,
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your interests and budget"
    },
    {
      icon: Utensils,
      title: "Local Food Guides",
      description: "Discover authentic local cuisine and hidden culinary gems"
    },
    {
      icon: Bed,
      title: "Accommodation Tips",
      description: "Find the perfect place to stay, from boutique hotels to local guesthouses"
    },
    {
      icon: Compass,
      title: "Activity Planning",
      description: "Curated experiences and activities for every type of traveler"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Wanderlust</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/destinations" className="text-foreground hover:text-primary transition-colors">Destinations</Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            </div>
            <Button asChild>
              <Link to="/services">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Expert travel guides and personalized itinerary planning services for unforgettable journeys
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked collection of breathtaking destinations with comprehensive travel guides
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${destination.image}?w=400&h=300&fit=crop`}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {destination.guides} Guides
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{destination.name}</CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/destinations">View Guides</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free personalized itinerary planning with local recommendations for food, activities, and accommodations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">Start Planning Your Trip</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us help you create the perfect itinerary with local insights and personalized recommendations
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/services">Get Your Free Itinerary</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Compass className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Wanderlust</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted companion for unforgettable travel experiences and personalized itineraries.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Custom Itineraries</li>
                <li>Local Food Guides</li>
                <li>Accommodation Tips</li>
                <li>Activity Planning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-muted-foreground">
                Ready to plan your next adventure? Get in touch for personalized recommendations.
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Wanderlust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
