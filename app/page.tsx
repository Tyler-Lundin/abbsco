import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <CTA />
    </div>
  )
}
