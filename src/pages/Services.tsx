
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Compass, Map, Utensils, Bed, Calendar, User, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    duration: "",
    budget: "",
    interests: "",
    travelStyle: "",
    additionalInfo: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours with your personalized itinerary.",
    });
    console.log("Itinerary request:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      icon: Map,
      title: "Custom Itinerary Planning",
      description: "Personalized day-by-day travel plans based on your interests, budget, and travel style",
      features: ["Detailed daily schedules", "Transportation recommendations", "Budget optimization", "Backup plans"]
    },
    {
      icon: Utensils,
      title: "Local Food Recommendations",
      description: "Discover authentic local cuisine and hidden culinary gems off the beaten path",
      features: ["Restaurant recommendations", "Street food guides", "Local market tours", "Dietary accommodations"]
    },
    {
      icon: Bed,
      title: "Accommodation Guidance",
      description: "Find the perfect place to stay, from luxury hotels to budget-friendly local guesthouses",
      features: ["Hotel comparisons", "Local guesthouse options", "Location optimization", "Booking assistance"]
    },
    {
      icon: Calendar,
      title: "Activity & Experience Planning",
      description: "Curated experiences and activities tailored to your interests and adventure level",
      features: ["Cultural experiences", "Adventure activities", "Relaxation spots", "Local events"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "Free",
      description: "Perfect for simple trips and first-time travelers",
      features: [
        "3-day itinerary",
        "Basic accommodation recommendations",
        "Popular restaurant suggestions",
        "Main attraction list",
        "Email support"
      ]
    },
    {
      name: "Standard Plan",
      price: "Free",
      description: "Comprehensive planning for most travel needs",
      features: [
        "7-day detailed itinerary",
        "Multiple accommodation options",
        "Local food recommendations",
        "Activity suggestions",
        "Transportation guide",
        "Budget breakdown",
        "Priority email support"
      ]
    },
    {
      name: "Premium Plan",
      price: "Free",
      description: "Complete travel planning with local insights",
      features: [
        "14-day comprehensive itinerary",
        "Luxury & budget accommodation options",
        "Hidden local gems",
        "Exclusive experience recommendations",
        "Detailed transportation planning",
        "Daily budget optimization",
        "24/7 support during travel",
        "Local contact information"
      ]
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
              <Link to="/destinations" className="text-foreground hover:text-primary transition-colors">Destinations</Link>
              <Link to="/services" className="text-primary font-medium">Services</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            </div>
            <Button asChild variant="outline">
              <Link to="/destinations">Browse Destinations</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Free Itinerary Planning Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get personalized travel itineraries with local recommendations for food, activities, and accommodations - completely free for easy and adventurous travelers
          </p>
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('planning-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Planning Now
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive travel planning services to make your journey unforgettable
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Plans Are Free</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the level of detail that suits your travel needs - all our services are completely free
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                <CardHeader>
                  {index === 1 && (
                    <Badge className="w-fit mb-2">Most Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"} onClick={() => document.getElementById('planning-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Form */}
      <section id="planning-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Plan Your Perfect Trip</h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your travel preferences and we'll create a personalized itinerary just for you
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Itinerary Planning Request</CardTitle>
                <CardDescription>
                  Fill out this form and we'll get back to you within 24 hours with your customized travel plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="destination">Destination</Label>
                      <Input
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        placeholder="e.g., Tokyo, Japan"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="duration">Trip Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        placeholder="e.g., 7 days"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., $1000-2000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="travelStyle">Travel Style</Label>
                      <Input
                        id="travelStyle"
                        name="travelStyle"
                        value={formData.travelStyle}
                        onChange={handleInputChange}
                        placeholder="e.g., Adventure, Relaxation, Cultural"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interests">Interests & Preferences</Label>
                    <Textarea
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interests, food preferences, activity levels, etc."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any specific requirements, accessibility needs, or special requests?"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Service?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We're passionate travelers who understand what makes a trip truly memorable
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-4">
                <User className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p className="opacity-90">Every itinerary is tailored to your unique preferences and travel style</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Map className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="opacity-90">We provide insider knowledge and hidden gems that guidebooks miss</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Completely Free</h3>
              <p className="opacity-90">All our services are free - we're here to help fellow travelers explore the world</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
