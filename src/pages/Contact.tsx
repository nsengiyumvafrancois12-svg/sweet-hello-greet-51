import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Users, Award, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to experience quality cereal products with international standards? 
              Get in touch for wholesale opportunities and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Send us a message and we'll respond as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+250 xxx xxx xxx" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>
                    
                    <div>
                      <Label htmlFor="inquiry">Type of Inquiry</Label>
                      <select className="w-full p-2 border border-input rounded-md bg-background">
                        <option>Wholesale Partnership</option>
                        <option>Product Information</option>
                        <option>Distribution Opportunities</option>
                        <option>Export Inquiries</option>
                        <option>General Questions</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your requirements, quantities needed, or any specific questions..."
                        rows={6}
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-[hsl(var(--food-green))] to-[hsl(var(--food-orange))] hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-[var(--shadow-glow)]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-primary" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Kigali Special Economic Zone</strong><br />
                      Masoro, Rwanda<br />
                      Strategic location for food processing excellence
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-[var(--shadow-glow)]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-6 h-6 text-primary" />
                      Leadership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-foreground">Jonathan NSENGIMANA</p>
                        <p className="text-sm text-muted-foreground">Founder & CEO</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Leading with experienced technical staff, engineers, technicians, and managers 
                        specializing in rice mill business development.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-[var(--shadow-glow)]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-6 h-6 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="text-primary font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="text-primary font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-[var(--shadow-glow)]">
                  <CardHeader>
                    <CardTitle>Our Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Client's best interests always come first. Everything we do is guided by 
                      professional ethics and accountability to the highest standards, ensuring 
                      we meet our client's needs precisely and completely.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[hsl(var(--food-green)/0.05)] to-[hsl(var(--food-orange)/0.05)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our network of wholesale partners across Rwanda's 30 districts
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--food-green))] to-[hsl(var(--food-orange))] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Quality Assured</h4>
                <p className="text-sm text-muted-foreground">International standards</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--food-orange))] to-[hsl(var(--food-blue))] rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">National Coverage</h4>
                <p className="text-sm text-muted-foreground">All 30 districts</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--food-blue))] to-[hsl(var(--food-green))] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Partnership Support</h4>
                <p className="text-sm text-muted-foreground">Dedicated account management</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--food-green))] to-[hsl(var(--food-orange))] hover:opacity-90">
                Contact Sales Team
              </Button>
              <Button variant="outline" size="lg" className="border-primary hover:bg-primary/10">
                Request Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;