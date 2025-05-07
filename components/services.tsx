import { Home, Building2, PaintBucket, Droplets, Hammer, Brush, Paintbrush, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Interior Painting",
    description: "Transform your home's interior with our professional painting services.",
    icon: <Home className="h-10 w-10 text-slate-700" />,
  },
  {
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with quality paints and expert application.",
    icon: <PaintBucket className="h-10 w-10 text-slate-700" />,
  },
  {
    title: "Commercial Painting",
    description: "Professional painting solutions for offices, retail spaces, and commercial buildings.",
    icon: <Building2 className="h-10 w-10 text-slate-700" />,
  },
  {
    title: "Residential Painting",
    description: "Specializing in single family residential repaints with attention to detail.",
    icon: <Paintbrush className="h-10 w-10 text-slate-700" />,
  },
  {
    title: "Drywall Repair",
    description: "Expert drywall repair services to fix holes, cracks, and water damage.",
    icon: <Hammer className="h-10 w-10 text-slate-700" />,
  },
  {
    title: "Texture Matching",
    description: "Seamless texture matching for walls and ceilings to blend repairs perfectly.",
    icon: <Brush className="h-10 w-10 text-slate-700" />,
  },
  {
    title: "Pressure Washing",
    description: "Thorough cleaning of exterior surfaces to prepare for painting or refresh your property.",
    icon: <Droplets className="h-10 w-10 text-slate-700" />,
  },
  {
    title: "Custom Homes",
    description: "Specialized painting services for custom homes with premium finishes.",
    icon: <Wrench className="h-10 w-10 text-slate-700" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="container py-8 md:py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ABBSCO LLC offers a comprehensive range of professional painting services for residential and commercial
          properties in Spokane Valley and surrounding areas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-slate-200 transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
