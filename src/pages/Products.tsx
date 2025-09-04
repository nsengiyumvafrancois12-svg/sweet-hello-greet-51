import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wheat, Scale, Users, Package, Award, CheckCircle } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Our Premium Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Quality cereals and feeds processed with international standards, 
              sourced from Rwandan farmer cooperatives across all 30 districts.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="shadow-[var(--shadow-glow)] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wheat className="w-6 h-6 text-primary" />
                    Rice Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Premium rice produced from Rwandan farmers' cooperatives, offering long, 
                    middle, and short grain varieties processed with advanced mill technology.
                  </p>
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline" className="bg-[hsl(var(--food-green)/0.1)] border-primary">Long Grain Rice</Badge>
                    <Badge variant="outline" className="bg-[hsl(var(--food-green)/0.1)] border-primary">Middle Grain Rice</Badge>
                    <Badge variant="outline" className="bg-[hsl(var(--food-green)/0.1)] border-primary">Short Grain Rice</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Packaged in sacs of different sizes for wholesale and retail distribution.
                  </p>
                  
                  <div className="mt-4 p-3 bg-[hsl(var(--food-orange)/0.1)] rounded-lg">
                    <h5 className="font-semibold text-sm mb-2">Monthly Capacity:</h5>
                    <p className="text-sm text-muted-foreground">312 tons/month</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-glow)] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-6 h-6 text-primary" />
                    Maize Flour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    High-quality maize flour processed from maize grain sourced from 
                    cooperatives across different districts, ensuring consistent quality and nutrition.
                  </p>
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline" className="bg-[hsl(var(--food-orange)/0.1)] border-secondary">Premium Grade</Badge>
                    <Badge variant="outline" className="bg-[hsl(var(--food-orange)/0.1)] border-secondary">Standard Grade</Badge>
                    <Badge variant="outline" className="bg-[hsl(var(--food-orange)/0.1)] border-secondary">Commercial Grade</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Available in various package sizes to meet different market needs.
                  </p>
                  
                  <div className="mt-4 p-3 bg-[hsl(var(--food-blue)/0.1)] rounded-lg">
                    <h5 className="font-semibold text-sm mb-2">Monthly Capacity:</h5>
                    <p className="text-sm text-muted-foreground">208 tons/month</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-[var(--shadow-glow)] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Animal Feeds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Nutritious animal feeds produced from cereal processing remains, 
                    enhanced with additional ingredients for optimal livestock nutrition.
                  </p>
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline" className="bg-[hsl(var(--food-blue)/0.1)] border-accent">Cattle Feed</Badge>
                    <Badge variant="outline" className="bg-[hsl(var(--food-blue)/0.1)] border-accent">Pig Feed</Badge>
                    <Badge variant="outline" className="bg-[hsl(var(--food-blue)/0.1)] border-accent">Chicken Feed</Badge>
                    <Badge variant="outline" className="bg-[hsl(var(--food-blue)/0.1)] border-accent">Fish Feed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Sold to farmers for livestock nutrition across Rwanda and beyond.
                  </p>
                  
                  <div className="mt-4 p-3 bg-[hsl(var(--food-green)/0.1)] rounded-lg">
                    <h5 className="font-semibold text-sm mb-2">Monthly Capacity:</h5>
                    <p className="text-sm text-muted-foreground">312 tons/month</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Description Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-6 h-6 text-primary" />
                    Product Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Rice Production</h4>
                      <p className="text-sm text-muted-foreground">
                        JONATHAN GROUP RWANDA Ltd produces mainly rice from Rwandan farmers 
                        regrouped in cooperatives and federations. We offer long, middle, and 
                        short grain rice packaged in sacs of different sizes.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Maize Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        The company processes maize bought from different cooperatives growing 
                        maize grain from different districts, converting it into high-quality 
                        maize flour packaged into sacs of different sizes.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Animal Feed Production</h4>
                      <p className="text-sm text-muted-foreground">
                        Remains from paddy rice, maize grain and other cereals are processed 
                        and combined with other ingredients to produce nutritious animal feeds 
                        sold to farmers for feeding cows, pigs, chickens, fish, and other livestock.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-glow)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-primary" />
                    Quality Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">International quality standards compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">World-class quality control procedures</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">Extensive internal quality checks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">All regulatory standards met</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">Premium packaging and presentation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm">Sourced from certified cooperatives</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-[hsl(var(--food-green)/0.1)] to-[hsl(var(--food-orange)/0.1)] rounded-lg">
                    <h5 className="font-semibold mb-2">Export Ready</h5>
                    <p className="text-sm text-muted-foreground">
                      Our products meet international export requirements for global markets 
                      including Eastern Africa, Europe, and beyond.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;