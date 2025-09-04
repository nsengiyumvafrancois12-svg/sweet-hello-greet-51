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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/1a8e5fef-cdeb-4579-9589-31c6a366844c.png')`
          }}
        ></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 border-white/20 text-white backdrop-blur-sm">
              <Factory className="w-4 h-4 mr-2" />
              Food Processing Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              JONATHAN GROUP
              <span className="block bg-gradient-to-r from-[hsl(var(--food-orange))] to-[hsl(var(--food-blue))] bg-clip-text text-transparent">
                RWANDA Ltd
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              A registered food processing company transforming Rwanda's agricultural potential 
              through quality cereal processing, located in Kigali's Special Economic Zone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--food-green))] to-[hsl(var(--food-orange))] hover:opacity-90 shadow-2xl text-white font-semibold px-8 py-4">
                Our Products
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4">
                Contact Us
              </Button>
            </div>
            
            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">312</h3>
                <p className="text-white/80 text-sm">Tons Rice/Month</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">208</h3>
                <p className="text-white/80 text-sm">Tons Maize/Month</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">312</h3>
                <p className="text-white/80 text-sm">Tons Feeds/Month</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">30</h3>
                <p className="text-white/80 text-sm">Districts Covered</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--food-green))] text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/lovable-uploads/5b2a3924-3564-4cf1-9cc1-238081bbdf79.png" 
                alt="Jonathan Group Rwanda" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-primary-foreground/80">
                Transforming Rwanda's agricultural sector through innovative food processing.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Email: info@jonathangroup.rw</p>
                <p>Tel: 0783273848</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Address</h3>
              <p className="text-primary-foreground/80">
                Kigali, Gasabo, Masoro<br />
                Rwanda
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 Jonathan Group Rwanda. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
