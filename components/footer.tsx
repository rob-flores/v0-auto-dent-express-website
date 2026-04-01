import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              Auto Dent <span className="text-accent">Express King</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Your description here. Tell customers about your commitment to quality dent repair and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-background/70 hover:text-background transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="text-background/70 hover:text-background transition-colors text-sm">
                About Us
              </Link>
              <Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">
                Services
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">
                Paintless Dent Repair
              </Link>
              <Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">
                Door Ding Removal
              </Link>
              <Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">
                Hail Damage Repair
              </Link>
              <Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">
                Headliner Repair
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@autodentexpressking.com" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@autodentexpressking.com</span>
              </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>123 Main Street<br />Your City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Auto Dent Express King. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
