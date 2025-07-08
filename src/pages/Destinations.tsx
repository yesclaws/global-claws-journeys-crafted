
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Compass, Map, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Mountain Alps",
      location: "Europe",
      description: "Breathtaking mountain landscapes, cozy alpine villages, and world-class skiing destinations",
      image: "photo-1458668383970-8ddd3927deed",
      guides: [
        { title: "Alpine Village Hopping", duration: "7 days", difficulty: "Easy" },
        { title: "Mountain Hiking Trails", duration: "5 days", difficulty: "Moderate" },
        { title: "Ski Resort Guide", duration: "3 days", difficulty: "Easy" },
        { title: "Photography Hotspots", duration: "4 days", difficulty: "Easy" },
        { title: "Local Cuisine Tour", duration: "2 days", difficulty: "Easy" }
      ],
      highlights: ["Scenic cable car rides", "Traditional chalets", "Local mountain cuisine", "Hiking trails", "Winter sports"]
    },
    {
      id: 2,
      name: "Desert Adventures",
      location: "Middle East & Africa",
      description: "Explore ancient cultures, stunning desert landscapes, and traditional markets",
      image: "photo-1466442929976-97f336a657be",
      guides: [
        { title: "Sahara Desert Experience", duration: "6 days", difficulty: "Moderate" },
        { title: "Ancient Cities Tour", duration: "4 days", difficulty: "Easy" },
        { title: "Camel Trekking Guide", duration: "3 days", difficulty: "Moderate" }
      ],
      highlights: ["Camel trekking", "Desert camping", "Ancient architecture", "Traditional markets", "Stargazing"]
    },
    {
      id: 3,
      name: "Forest Retreats",
      location: "Various Regions",
      description: "Peaceful forest escapes, wildlife spotting, and nature immersion experiences",
      image: "photo-1523712999610-f77fbcfc3843",
      guides: [
        { title: "Forest Hiking Trails", duration: "5 days", difficulty: "Moderate" },
        { title: "Wildlife Photography", duration: "4 days", difficulty: "Easy" },
        { title: "Eco-Lodge Stays", duration: "3 days", difficulty: "Easy" },
        { title: "Forest Meditation Retreats", duration: "7 days", difficulty: "Easy" }
      ],
      highlights: ["Wildlife spotting", "Forest bathing", "Eco-lodges", "Nature photography", "Hiking trails"]
    },
    {
      id: 4,
      name: "Coastal Escapes",
      location: "Various Coastlines",
      description: "Pristine beaches, coastal towns, and ocean adventures",
      image: "photo-1504893524553-b855bce32c67",
      guides: [
        { title: "Hidden Beach Guide", duration: "5 days", difficulty: "Easy" },
        { title: "Coastal Road Trips", duration: "7 days", difficulty: "Easy" },
        { title: "Island Hopping", duration: "6 days", difficulty: "Moderate" }
      ],
      highlights: ["Secluded beaches", "Coastal hiking", "Water sports", "Seafood cuisine", "Sunset views"]
    },
    {
      id: 5,
      name: "Cultural Cities",
      location: "Worldwide",
      description: "Historic cities, cultural landmarks, and urban exploration",
      image: "photo-1492321936769-b49830bc1d1e",
      guides: [
        { title: "Historic City Centers", duration: "4 days", difficulty: "Easy" },
        { title: "Museum & Gallery Tour", duration: "3 days", difficulty: "Easy" },
        { title: "Local Neighborhood Guide", duration: "2 days", difficulty: "Easy" }
      ],
      highlights: ["Historic architecture", "Museums", "Local markets", "Street food", "Cultural sites"]
    },
    {
      id: 6,
      name: "Riverside Journeys",
      location: "Various Rivers",
      description: "Scenic river valleys, waterside towns, and peaceful water activities",
      image: "photo-1506744038136-46273834b3fb",
      guides: [
        { title: "River Valley Exploration", duration: "5 days", difficulty: "Easy" },
        { title: "Waterside Towns", duration: "4 days", difficulty: "Easy" },
        { title: "River Activities Guide", duration: "3 days", difficulty: "Moderate" }
      ],
      highlights: ["River cruises", "Waterside dining", "Fishing spots", "Scenic walks", "Historic bridges"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Wanderlust</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/destinations" className="text-primary font-medium">Destinations</Link>
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
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=600&fit=crop)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Destinations</h1>
          <p className="text-xl text-white/90">
            Comprehensive guides for the world's most beautiful destinations
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={`https://images.unsplash.com/${destination.image}?w=400&h=300&fit=crop`}
                      alt={destination.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{destination.location}</Badge>
                        <span className="text-sm text-muted-foreground">{destination.guides.length} Guides</span>
                      </div>
                      <CardTitle className="text-2xl">{destination.name}</CardTitle>
                      <CardDescription>{destination.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.slice(0, 3).map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                          {destination.highlights.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{destination.highlights.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Popular Guides:</h4>
                        <div className="space-y-2">
                          {destination.guides.slice(0, 2).map((guide, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm">
                              <span>{guide.title}</span>
                              <div className="flex items-center space-x-2 text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                <span>{guide.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link to="/services">Plan Your Visit</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized itineraries and local recommendations for any destination
          </p>
          <Button size="lg" asChild>
            <Link to="/services">Start Planning</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
