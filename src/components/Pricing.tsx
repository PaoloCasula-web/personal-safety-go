import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "49",
    period: "per hour",
    description: "Perfect for occasional security needs",
    features: [
      "Verified security professional",
      "Real-time GPS tracking",
      "In-app messaging",
      "24/7 support",
      "Insurance covered"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "89",
    period: "per hour",
    description: "For enhanced protection and priority service",
    features: [
      "Elite security professional",
      "Priority dispatch",
      "Advanced threat assessment",
      "Dedicated support line",
      "Full insurance coverage",
      "Incident reporting"
    ],
    popular: true
  },
  {
    name: "Executive",
    price: "Custom",
    period: "pricing",
    description: "Tailored security solutions for VIPs",
    features: [
      "Personal security detail",
      "24/7 dedicated team",
      "Advance route planning",
      "Counter-surveillance",
      "Executive protection training",
      "Comprehensive risk assessment"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the level of protection that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-glow scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-blue-500 hover:shadow-glow' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
