
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Map, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Travel Planner & Founder",
      bio: "With over 10 years of travel experience across 40+ countries, Sarah founded Wanderlust to share her passion for authentic travel experiences.",
      expertise: ["Cultural Immersion", "Budget Travel", "Solo Travel", "Southeast Asia"]
    },
    {
      name: "Marcus Chen",
      role: "Adventure Specialist",
      bio: "Marcus specializes in adventure travel and outdoor activities. He's summited mountains on every continent and loves planning active itineraries.",
      expertise: ["Mountain Climbing", "Outdoor Adventures", "Photography", "Europe & Americas"]
    },
    {
      name: "Elena Rodriguez",
      role: "Food & Culture Expert",
      bio: "Elena is our resident foodie and cultural expert. She's lived in 8 different countries and knows the best local spots everywhere.",
      expertise: ["Culinary Tours", "Local Culture", "Hidden Gems", "Latin America & Europe"]
    }
  ];

  const stats = [
    { number: "500+", label: "Itineraries Created" },
    { number: "50+", label: "Countries Covered" },
    { number: "1000+", label: "Happy Travelers" },
    { number: "100%", label: "Free Service" }
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
              <Link to="/destinations" className="text-foreground hover:text-primary transition-colors">Destinations</Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="text-primary font-medium">About</Link>
            </div>
            <Button asChild>
              <Link to="/services">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&h=800&fit=crop)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Wanderlust</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're passionate travelers on a mission to help fellow adventurers discover the world through personalized, authentic travel experiences
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wanderlust was born from a simple belief: everyone deserves to experience the joy of authentic travel, 
                regardless of their budget or experience level. We started this journey after countless hours spent 
                helping friends and family plan their dream trips, realizing that personalized, local insights make 
                all the difference between a good trip and an unforgettable adventure.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why We Do This</h3>
                <p className="text-muted-foreground mb-6">
                  Travel has the power to transform perspectives, create lasting memories, and connect us with different 
                  cultures and communities. We believe that everyone should have access to well-planned, meaningful travel 
                  experiences that go beyond typical tourist attractions.
                </p>
                <p className="text-muted-foreground">
                  That's why all our services are completely free. We're not here to make money from your dreams - 
                  we're here to help you make them a reality.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop"
                  alt="Travel planning"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team of experienced travelers and local experts are here to help you plan your perfect adventure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in creating travel experiences that are authentic, sustainable, and tailored to each traveler
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Map className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Local Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We provide recommendations from local experts and experienced travelers who know the real gems of each destination
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Personalized Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every itinerary is customized based on your interests, budget, travel style, and personal preferences
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We're here to help before, during, and after your trip with updates, tips, and any adjustments needed
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered amazing destinations with our personalized planning services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/services">Plan Your Trip</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/destinations">Browse Destinations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
