import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Globe, Factory, Building2, Eye, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] via-[hsl(var(--food-orange)/0.1)] to-[hsl(var(--food-blue)/0.1)] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-[hsl(var(--food-green)/0.1)] border-primary">
              <Factory className="w-4 h-4 mr-2" />
              Food Processing Excellence
            </Badge>
            <h1 className="text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-[hsl(var(--food-green))] to-[hsl(var(--food-orange))] bg-clip-text text-transparent">
              JONATHAN GROUP RWANDA Ltd
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A registered food processing company transforming Rwanda's agricultural potential 
              through quality cereal processing, located in Kigali's Special Economic Zone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--food-green))] to-[hsl(var(--food-orange))] hover:opacity-90 shadow-[var(--shadow-glow)]">
                Our Products
              </Button>
              <Button variant="outline" size="lg" className="border-primary hover:bg-primary/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-[var(--shadow-glow)] hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Strategic Location</CardTitle>
                <CardDescription>
                  Based in Kigali Special Economic Zone, Masoro
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center shadow-[var(--shadow-glow)] hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>National Reach</CardTitle>
                <CardDescription>
                  Wholesale points across all 30 districts of Rwanda
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center shadow-[var(--shadow-glow)] hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>International Standards</CardTitle>
                <CardDescription>
                  Quality products meeting global export requirements
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gradient-to-r from-[hsl(var(--food-green)/0.05)] to-[hsl(var(--food-orange)/0.05)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Rice Mill Plant & Food Processing</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                JONATHAN GROUP RWANDA Ltd is a rice mill plant that helps to get rice grain from paddy 
                by removing rice husk and rice bran before packaging. Quality depends on both the crop and processing excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Industry Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When it comes to food processing, the industry is worth billions of dollars globally. 
                  In Rwanda, the food processing industry is at the baby stage, presenting immense opportunities.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Green Business Opportunity</h4>
                      <p className="text-sm text-muted-foreground">
                        Cereals food processing is a green business in Africa with many opportunities 
                        for innovative value addition to local cereals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Global Market Potential</h4>
                      <p className="text-sm text-muted-foreground">
                        70% of our rice, maize flour, and animal feeds can be sold not just 
                        regionally but across the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)] rounded-lg">
                  <h4 className="font-bold text-2xl text-primary mb-2">312</h4>
                  <p className="text-sm text-muted-foreground">Tons Rice/Month</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[hsl(var(--food-orange)/0.1)] to-[hsl(var(--food-blue)/0.1)] rounded-lg">
                  <h4 className="font-bold text-2xl text-primary mb-2">208</h4>
                  <p className="text-sm text-muted-foreground">Tons Maize/Month</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[hsl(var(--food-blue)/0.1)] to-[hsl(var(--food-green)/0.1)] rounded-lg">
                  <h4 className="font-bold text-2xl text-primary mb-2">312</h4>
                  <p className="text-sm text-muted-foreground">Tons Feeds/Month</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-blue)/0.1)] rounded-lg">
                  <h4 className="font-bold text-2xl text-primary mb-2">30</h4>
                  <p className="text-sm text-muted-foreground">Districts Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
              <p className="text-lg text-muted-foreground">
                Building Rwanda's premier food processing company with global standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="h-full shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    Vision Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We are passionate about creating a successful food processing business that competes 
                    with established companies. Our goal is to be ranked among the top 5 food processing 
                    companies in Rwanda within five years.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Mission Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To establish a stellar company offering customers products of exceptional quality 
                    through world-class quality control procedures and regulatory standards compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & CEO Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership</h2>
              <p className="text-lg text-muted-foreground">
                Meet the visionary behind Jonathan Group Rwanda
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/576421b4-d66a-4443-8aea-f9f75901110d.png" 
                    alt="Jonathan Nsengimana - Founder and CEO" 
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-[var(--shadow-glow)]"
                  />
                </div>
              </div>
              
              <div className="lg:w-2/3 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">Jonathan Nsengimana</h3>
                <p className="text-lg text-primary mb-6 font-semibold">Founder and CEO</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With a passion for transforming Rwanda's agricultural sector through innovative food processing, 
                  Jonathan Nsengimana leads Jonathan Group Rwanda with a vision to create sustainable value 
                  from local resources while meeting international quality standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under his leadership, the company has established itself as a key player in cereal processing, 
                  serving all 30 districts of Rwanda and positioning for regional expansion with a commitment 
                  to excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Ready to experience quality cereal products with international standards? 
              Contact us to learn more about our wholesale opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--food-green))] to-[hsl(var(--food-orange))] hover:opacity-90">
                Contact Sales Team
              </Button>
              <Button variant="outline" size="lg" className="border-primary hover:bg-primary/10">
                Request Quote
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>📍 Kigali Special Economic Zone, Masoro, Rwanda</p>
              <p>🌍 Serving all 30 districts of Rwanda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
