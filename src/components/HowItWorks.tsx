import { Smartphone, MapPin, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Request Protection",
    description: "Open the app, specify your location and needs. Get matched with nearby security professionals instantly."
  },
  {
    icon: MapPin,
    title: "Track in Real-Time",
    description: "See your security professional's location and ETA. Stay informed every step of the way."
  },
  {
    icon: ShieldCheck,
    title: "Stay Safe",
    description: "Your verified security professional arrives. Feel protected wherever you go."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting professional security is as easy as 1-2-3
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              {/* Card */}
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-xl font-bold shadow-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
