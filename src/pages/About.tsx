import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, Target, Building2, Globe, Factory } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About Jonathan Group Rwanda
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transforming Rwanda's agricultural potential through innovative rice mill processing
              and quality food production since our establishment.
            </p>
          </div>
        </div>
      </section>

      {/* Rice Mill Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Rice Mill Plant & Food Processing</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                JONATHAN GROUP RWANDA Ltd is a rice mill plant that helps to get rice grain from paddy 
                by removing rice husk and rice bran before packaging. The basic raw material is paddy 
                (raw form of rice crop), and quality depends on both the crop and processing excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Industry Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When it comes to food processing, the industry is worth billions of dollars globally. 
                  In Rwanda, the food processing industry is at the baby stage, presenting immense opportunities. 
                  Processed foods like instant noodles, pasta, tomato pastes are mainly imported yet 
                  they're integral to modern meals and daily lives.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This demand allows us to build a well-managed food processing and packaging business 
                  that can grow into a conglomerate. The cereals food processing industry is a major 
                  economic sector in countries like Brazil, Ukraine, China, India, Thailand, and Pakistan.
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
              
              <Card className="shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="w-6 h-6 text-primary" />
                    Processing Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Quality Control</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Every product undergoes extensive internal checks through our world-class 
                        quality control department to meet all regulatory standards.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Raw Materials</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        We source premium paddy and cereals from farmer cooperatives across 
                        all districts of Rwanda, ensuring consistent quality.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Processing Capacity</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Rice: 312 tons/month</li>
                        <li>• Maize Flour: 208 tons/month</li>
                        <li>• Animal Feeds: 312 tons/month</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-[hsl(var(--food-blue)/0.05)] to-[hsl(var(--food-green)/0.05)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
              <p className="text-lg text-muted-foreground">
                Building Rwanda's premier food processing company with global standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="h-full shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    Vision Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We aren't into this business only to earn massive revenue. We are very passionate about 
                    creating a successful food processing business, which will be in competition with already 
                    existing companies. We believe that with the right efforts, we will be ranked among one 
                    of the top 5 food processing companies in Rwanda within five years. We are sure we will 
                    achieve this as we have full dedication into bringing this into reality.
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
                    To establish a stellar company, we are required to offer our customers products of 
                    exceptional quality. Our aim is to build a lasting brand known for delivering premium 
                    products. Every product of ours will go through extensive internal checks and quality 
                    control procedures. We have a world-class and fully equipped quality control department, 
                    which will be in charge of every production procedure to ensure deliverables pass all 
                    regulatory standards.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="shadow-[var(--shadow-glow)]">
              <CardHeader>
                <CardTitle>Business Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  JONATHAN GROUP RWANDA Ltd is a food processing company focused on adding value to cereals 
                  (rice, maize, soya, etc.) produced in Rwanda. Located in Kigali Economic Zone, we serve 
                  the global market, especially Rwanda, Eastern Africa, Africa, and Europe.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our factory also produces animal feeds from cereal processing remains, providing nutrition 
                  for fish, cows, pigs, and other livestock, serving farmers in Rwanda and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;