import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Truck, Calendar, TrendingUp, MapPin, DollarSign, Users, BarChart3 } from "lucide-react";

const Operations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Business Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic operations designed for efficiency, market penetration, 
              and sustainable growth across Rwanda and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & Distribution */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-6 h-6 text-primary" />
                    Pricing & Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)] rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Rice Pricing Strategy
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Market analysis shows rice sells at 1,200, 1,100, and 1,000 RWF per kg. 
                        Our factory selling price is set at <span className="font-semibold text-primary">1,000 RWF per kg</span>, 
                        accounting for 10% distributor margin.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Distribution Network
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Company-run selling points across all <span className="font-semibold text-primary">30 districts of Rwanda</span>, 
                        where wholesalers and retailers can purchase stocks directly.
                      </p>
                      <Badge variant="outline" className="bg-[hsl(var(--food-blue)/0.1)]">
                        National Coverage
                      </Badge>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Market-Based Pricing
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Maize flour and animal feed prices are determined by market trends 
                        at production time, ensuring competitive positioning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    Production Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-[hsl(var(--food-blue)/0.1)] to-[hsl(var(--food-green)/0.1)] rounded-lg">
                      <h4 className="font-semibold mb-2">Monthly Capacity</h4>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Rice:</span>
                          <span className="font-semibold text-primary">312 tons/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Maize Flour:</span>
                          <span className="font-semibold text-primary">208 tons/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Animal Feeds:</span>
                          <span className="font-semibold text-primary">312 tons/month</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Annual Capacity</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        <span className="font-semibold text-primary">7,488 tons</span> at full capacity 
                        in 2 shifts after the second year of operation.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Growth Strategy</h4>
                      <p className="text-muted-foreground text-sm">
                        Start at <span className="font-semibold text-primary">80% capacity</span>, 
                        increase by <span className="font-semibold text-primary">10% annually</span>, 
                        reaching 100% by year two.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Assembly Plan & Capacity */}
            <Card className="shadow-[var(--shadow-glow)] mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  Assembly Plan Capacity
                </CardTitle>
                <CardDescription>
                  Strategic capacity planning for sustainable growth and market penetration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)] rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Rice Mill Factory</h4>
                    <p className="text-2xl font-bold text-primary mb-2">312</p>
                    <p className="text-sm text-muted-foreground">tons/month capacity</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-[hsl(var(--food-orange)/0.1)] to-[hsl(var(--food-blue)/0.1)] rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Maize Processing</h4>
                    <p className="text-2xl font-bold text-primary mb-2">208</p>
                    <p className="text-sm text-muted-foreground">tons/month capacity</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-[hsl(var(--food-blue)/0.1)] to-[hsl(var(--food-green)/0.1)] rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Animal Feeds</h4>
                    <p className="text-2xl font-bold text-primary mb-2">312</p>
                    <p className="text-sm text-muted-foreground">tons/month capacity</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 border-l-4 border-primary bg-[hsl(var(--food-green)/0.05)]">
                  <h5 className="font-semibold mb-2">Full Capacity Achievement</h5>
                  <p className="text-sm text-muted-foreground">
                    According to production capacity planning, the factory will reach 
                    <span className="font-semibold text-primary"> 7,488 tons per annum</span> at 
                    full capacity operating in 2 shifts after the second year of operation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Workforce & Market Goals */}
            <Card className="shadow-[var(--shadow-glow)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Workforce & Market Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Dedicated Workforce</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We are committed to building a food processing plant business whose food brand 
                      will be well accepted in Rwanda, the East Africa Community and other countries 
                      of the world. Our dedicated workforce ensures customer satisfaction with every 
                      product produced in our plant.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Market Expansion</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      In the future, as food demand increases, JONATHAN GROUP RWANDA Ltd will respond 
                      to that demand while providing job opportunities to local labor, contributing 
                      to Rwanda's economic development and food security.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-[hsl(var(--food-green)/0.1)] rounded-lg">
                    <p className="font-semibold text-primary">Local Market</p>
                    <p className="text-xs text-muted-foreground">Rwanda - All Districts</p>
                  </div>
                  <div className="text-center p-3 bg-[hsl(var(--food-orange)/0.1)] rounded-lg">
                    <p className="font-semibold text-primary">Regional Market</p>
                    <p className="text-xs text-muted-foreground">East Africa Community</p>
                  </div>
                  <div className="text-center p-3 bg-[hsl(var(--food-blue)/0.1)] rounded-lg">
                    <p className="font-semibold text-primary">Global Market</p>
                    <p className="text-xs text-muted-foreground">International Export</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Operations;