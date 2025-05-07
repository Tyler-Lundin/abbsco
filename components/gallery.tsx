"use client"

import { useState } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    src: "/images/Trent-2.webp",
    alt: "Exterior house painting by ABBSCO LLC",
    category: "Exterior",
  },
  {
    src: "/images/Slack-2.webp",
    alt: "Professional painting project by ABBSCO LLC",
    category: "Exterior",
  },
  {
    src: "/images/Hoskins-4.webp",
    alt: "Residential painting by ABBSCO LLC",
    category: "Exterior",
  },
  {
    src: "/images/100_0166.webp",
    alt: "Interior painting project by ABBSCO LLC",
    category: "Interior",
  },
  {
    src: "/images/Falkins-3.webp",
    alt: "Home painting project by ABBSCO LLC",
    category: "Exterior",
  },
  {
    src: "/images/Nina-3.webp",
    alt: "Professional painting work by ABBSCO LLC",
    category: "Exterior",
  },
  {
    src: "/images/Smith-4.webp",
    alt: "Residential exterior painting by ABBSCO LLC",
    category: "Exterior",
  },
  {
    src: "/images/100_1657.webp",
    alt: "Interior painting detail by ABBSCO LLC",
    category: "Interior",
  },
  {
    src: "/images/Cheney-1.webp",
    alt: "House painting project by ABBSCO LLC",
    category: "Exterior",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Our Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse through our portfolio of completed painting projects in the Spokane Valley area.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer border-slate-200 transition-all hover:shadow-md">
                      <CardContent className="p-0 relative aspect-square">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <span className="text-white text-sm font-medium">{image.category}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                    <DialogTitle className="sr-only">Image Preview</DialogTitle>
                    <div className="relative h-[80vh]">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="relative mr-2" />
          <CarouselNext className="relative ml-2" />
        </div>
      </Carousel>
    </section>
  )
}
