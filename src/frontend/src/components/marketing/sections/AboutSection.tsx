import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    'Reliable and quality-focused manufacturing',
    'Bulk supply capability for B2B clients',
    'Competitive pricing without compromising quality',
    'Timely delivery guaranteed',
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in packaging excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-base text-foreground/90 leading-relaxed">
              We are a reliable and quality-focused packaging material manufacturing company 
              dedicated to serving B2B clients with excellence. Our commitment to delivering 
              premium packaging solutions has made us a trusted partner for businesses across 
              various industries.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              As a bulk supplier, we understand the importance of consistency, reliability, 
              and cost-effectiveness. We offer competitive pricing without compromising on 
              quality, ensuring your products are protected with the best materials available.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              Our timely delivery guarantee means you can count on us to meet your deadlines, 
              every time. We pride ourselves on building long-term relationships with our 
              clients through exceptional service and superior products.
            </p>
          </div>

          <Card className="shadow-industrial">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
