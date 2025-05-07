"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle2 } from "lucide-react"

export default function CTA() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting ABBSCO LLC. We'll get back to you shortly.",
      })
      setIsSubmitted(true)
      setIsSubmitting(false)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Get a Free Quote</h2>
            <p className="text-slate-700 mb-6">
              Ready to transform your home or business? Contact ABBSCO LLC today for a free, no-obligation quote on your
              painting project.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Why Choose ABBSCO LLC?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Over 25 years of professional painting experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Licensed, bonded, and insured for your protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>EPA Lead-Safe Certified for safe painting practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>5-15 year warranties on exterior painting projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Attention to detail and superior craftsmanship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Multiple payment methods accepted for your convenience</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="mb-2">
                <strong>Phone:</strong> (509) 939-6156
              </p>
              <p className="mb-2">
                <strong>Email:</strong> info@abbsco.com
              </p>
              <p className="mb-2">
                <strong>Address:</strong> 505 N Argonne Rd, Spokane Valley, WA 99212
              </p>
              <p className="mb-2">
                <strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
            <p className="text-slate-600 mb-6">
              Your message has been sent successfully. We'll get back to you shortly to discuss your painting project.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                })
              }}
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Get a Free Quote</h2>
          <p className="text-slate-700 mb-6">
            Ready to transform your home or business? Contact ABBSCO LLC today for a free, no-obligation quote on your
            painting project.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Why Choose ABBSCO LLC?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Over 25 years of professional painting experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Licensed, bonded, and insured for your protection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>EPA Lead-Safe Certified for safe painting practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>5-15 year warranties on exterior painting projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Attention to detail and superior craftsmanship</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Multiple payment methods accepted for your convenience</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">
              <strong>Phone:</strong> (509) 939-6156
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@abbsco.com
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 505 N Argonne Rd, Spokane Valley, WA 99212
            </p>
            <p className="mb-2">
              <strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold mb-6">Request a Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(509) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project Details</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please describe your project (interior/exterior, approximate square footage, timeline, etc.)"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By submitting this form, you agree to be contacted regarding your request.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
