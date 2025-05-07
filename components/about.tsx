import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">About ABBSCO LLC</h2>
            <p className="text-slate-700 mb-6">
              ABBSCO LLC is a professional painting company based in Spokane Valley, Washington. Established in 2006, we
              bring over 25 years of experience to every project, delivering exceptional quality and customer
              satisfaction.
            </p>
            <p className="text-slate-700 mb-6">
              Owned and operated by BJ and Jodie Abbs, our company specializes in residential repaints, offering
              interior and exterior painting services for homeowners throughout the Spokane area.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">Licensed Contractor (ABBSCC*868R4)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">Bonded & Insured</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">EPA Lead-Safe Certified</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">5-15 Year Exterior Warranties</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">Locally Owned & Operated</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-slate-700">Attention to Detail</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
              <p className="text-slate-700">
                To provide exceptional painting services with integrity, professionalism, and attention to detail,
                ensuring every customer receives the highest quality workmanship and customer service.
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about.png"
              alt="ABBSCO LLC Professional Painting"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
