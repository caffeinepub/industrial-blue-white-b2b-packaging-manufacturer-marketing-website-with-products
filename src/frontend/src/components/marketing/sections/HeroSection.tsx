import { Button } from '@/components/ui/button';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Strong Packaging. Safe Delivery. Trusted Quality.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              We are a leading manufacturer of premium packaging materials, serving businesses with 
              high-quality corrugated boxes, custom packaging solutions, and reliable bulk supply. 
              Your products deserve the best protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-base font-semibold shadow-industrial group"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('products')}
                className="text-base font-semibold"
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-industrial">
              <img
                src="/assets/generated/hero-banner.dim_1920x800.png"
                alt="Industrial packaging warehouse with corrugated boxes and packaging materials"
                className="w-full h-full object-cover"
                width={1920}
                height={800}
                loading="eager"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
