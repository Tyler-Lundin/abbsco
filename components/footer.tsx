import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">ABBSCO LLC</h2>
            <p className="mb-1">Professional Painting Services</p>
            <p className="mb-4">Established 2006 • Over 25 years of experience</p>
            <address className="not-italic space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>505 N Argonne Rd, Spokane Valley, WA 99212</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+15099396156" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-sm">
                  (509) 939-6156
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:info@abbsco.com" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-sm">
                  info@abbsco.com
                </Link>
              </div>
            </address>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
            <ul className="space-y-1">
              {[
                ["Monday", "9:00 AM - 5:00 PM"],
                ["Tuesday", "9:00 AM - 5:00 PM"],
                ["Wednesday", "9:00 AM - 5:00 PM"],
                ["Thursday", "9:00 AM - 5:00 PM"],
                ["Friday", "9:00 AM - 5:00 PM"],
                ["Saturday", "Closed"],
                ["Sunday", "Closed"],
              ].map(([day, hours]) => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Payment */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              <FooterIconLink
                href="https://www.yelp.com/biz/abbs-co-spokane-valley"
                label="Yelp"
                iconPath="M18 12.5c.5.5.5 1 .5 1.5a2 2 0 1 1-4 0c0-.5 0-1 .5-1.5 M14 11V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5 M5 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8 M8 14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2 M12 12.5c-.5.5-.5 1-.5 1.5a2 2 0 1 0 4 0c0-.5 0-1-.5-1.5"
              />
              <FooterIconLink
                href="https://www.angi.com/companylist/us/wa/spokane/abbs-co-reviews-8488807.htm"
                label="Angi"
                iconPath="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              />
              <Link
                href="https://www.mapquest.com/us/washington/abbs-co-368688450"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">MapQuest</span>
                <MapPin className="h-5 w-5" />
              </Link>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
            <div className="flex flex-wrap gap-2">
              {["Visa", "MasterCard", "Discover", "American Express", "Check"].map((method) => (
                <span key={method} className="bg-slate-800 px-3 py-1 rounded-md text-xs font-medium">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} ABBSCO LLC. All rights reserved.</p>
          <p className="mt-1">Contractor License: ABBSCC*868R4</p>
          <p className="mt-1">Bonded & Insured • EPA Lead-Safe Certified</p>
        </div>
      </div>
    </footer>
  )
}

function FooterIconLink({
  href,
  label,
  iconPath,
}: {
  href: string
  label: string
  iconPath: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-white"
    >
      <span className="sr-only">{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d={iconPath} />
      </svg>
    </Link>
  )
}
