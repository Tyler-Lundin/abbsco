"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10" />
      <div className="relative h-[600px]">
        <div 
          className={`absolute inset-0 bg-slate-900 transition-opacity duration-1000 ${
            isImageLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src="/images/hero.png"
          alt="Professional Painting Services"
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          quality={90}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Professional Painting Services in Spokane Valley
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Quality interior and exterior painting with over 25 years of experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/#contact" className="flex items-center gap-2">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                <Link href="tel:+15099396156" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (509) 939-6156
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-white font-medium">Bonded & Insured</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-white font-medium">EPA Lead-Safe Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
