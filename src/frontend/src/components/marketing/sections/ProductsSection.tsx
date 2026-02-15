import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ProductsSection() {
  const products = [
    {
      title: 'Corrugated Boxes',
      description: 'Durable and versatile corrugated boxes for safe shipping and storage. Available in various sizes and strengths for all your packaging needs.',
      image: '/assets/generated/product-corrugated.dim_512x512.png',
    },
    {
      title: 'Carton Packaging',
      description: 'High-quality carton boxes perfect for retail and e-commerce. Customizable designs to showcase your brand professionally.',
      image: '/assets/generated/product-carton.dim_512x512.png',
    },
    {
      title: 'Bubble Wrap',
      description: 'Premium bubble wrap for superior cushioning and protection. Ideal for fragile items and delicate products during transit.',
      image: '/assets/generated/product-bubblewrap.dim_512x512.png',
    },
    {
      title: 'Packaging Rolls',
      description: 'Industrial-grade packaging rolls for wrapping and securing bulk shipments. Cost-effective solution for high-volume operations.',
      image: '/assets/generated/product-rolls.dim_512x512.png',
    },
    {
      title: 'Custom Printed Packaging',
      description: 'Branded packaging solutions with custom printing. Enhance your brand visibility with professional, eye-catching designs.',
      image: '/assets/generated/product-custom-printed.dim_512x512.png',
    },
  ];

  return (
    <section id="products" className="section-padding bg-secondary/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive packaging solutions for every business need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="shadow-industrial hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="w-32 h-32 rounded-lg bg-secondary/50 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                      width={128}
                      height={128}
                      loading="lazy"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl text-center">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
