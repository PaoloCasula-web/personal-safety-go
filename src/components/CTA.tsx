import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-blue-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card/30 backdrop-blur-xl border border-border rounded-3xl p-12 shadow-card">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mx-auto shadow-glow">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Feel Safe?
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands who trust SecureNow for their personal safety. Download the app and request your first security professional in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:shadow-glow transition-all">
              Download App
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
              Schedule Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>50K+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>4.9★ Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>100+ Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
