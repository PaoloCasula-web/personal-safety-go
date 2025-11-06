import { Shield, Clock, Star, Lock, Headphones, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All security personnel are thoroughly vetted, background-checked, and certified."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock protection whenever you need it, day or night."
  },
  {
    icon: Star,
    title: "Rated & Reviewed",
    description: "Choose professionals based on real client ratings and verified reviews."
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your data is encrypted and your privacy is our top priority."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is always ready to assist you with any concerns."
  },
  {
    icon: Zap,
    title: "Instant Matching",
    description: "Advanced algorithm matches you with the best professional in seconds."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              SecureNow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium security services built on trust, reliability, and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
