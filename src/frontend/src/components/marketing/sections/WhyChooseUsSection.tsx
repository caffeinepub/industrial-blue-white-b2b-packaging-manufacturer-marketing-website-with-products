import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Package, Clock, DollarSign } from 'lucide-react';

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality Materials',
      description: 'We use only the finest materials to ensure your products are protected with packaging that meets the highest industry standards.',
    },
    {
      icon: Package,
      title: 'Bulk Supply Capability',
      description: 'Large-scale production capacity to meet your bulk order requirements. No order is too big for our manufacturing facilities.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Reliable logistics and efficient production processes guarantee your orders arrive exactly when you need them.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising quality. We offer the best value for your packaging investment.',
    },
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            The advantages that make us your ideal packaging partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="shadow-industrial hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
