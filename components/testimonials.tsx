import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Janet C.",
    source: "Angi",
    date: "December 2015",
    rating: 5,
    comment:
      "ABBS CO Professional Painting personnel were the most reliable, hard working people I have ever had the pleasure of doing business with. The exterior of our house looks fantastic! I would highly recommend them.",
  },
  {
    name: "Michael S.",
    source: "Yelp",
    date: "August 2022",
    rating: 5,
    comment:
      "BJ and his team did an amazing job on our home's exterior. They were professional, on time, and the quality of work exceeded our expectations. Would definitely hire again!",
  },
  {
    name: "Sarah L.",
    source: "Google",
    date: "May 2023",
    rating: 5,
    comment:
      "We hired ABBSCO to paint our living room and kitchen. The attention to detail was impressive, and they were very respectful of our home. The finished result looks beautiful!",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Customer Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about our painting services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic">"{testimonial.comment}"</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.source} • {testimonial.date}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
