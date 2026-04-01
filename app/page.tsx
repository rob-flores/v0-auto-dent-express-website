import Link from "next/link"
import { ArrowRight, Shield, Clock, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImagePlaceholder } from "@/components/image-placeholder"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-foreground text-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Expert Dent Repair,{" "}
                  <span className="text-accent">Flawless Results</span>
                </h1>
                <p className="text-lg md:text-xl text-background/70 leading-relaxed max-w-lg">
                  Your tagline or brief description here. Describe your commitment to quality and customer satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/services">
                      View Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-background/30 text-background hover:bg-background/10">
                    <Link href="/about">Learn About Us</Link>
                  </Button>
                </div>
              </div>
              <div>
                <ImagePlaceholder 
                  label="Hero image - Add a photo of your work or shop" 
                  aspectRatio="video"
                  className="border-background/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Auto Dent Express King?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Add your unique selling points and what makes your business stand out from the competition.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-card border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-muted-foreground text-sm">
                  Your description here. Explain your quality guarantee or warranty.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
                <p className="text-muted-foreground text-sm">
                  Your description here. Explain your turnaround times and availability.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-muted-foreground text-sm">
                  Your description here. Highlight your team&apos;s experience and certifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional dent repair services to restore your vehicle to its original condition.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Paintless Dent Repair", desc: "Brief description of this service" },
                { title: "Door Ding Removal", desc: "Brief description of this service" },
                { title: "Hail Damage Repair", desc: "Brief description of this service" },
                { title: "Headliner Repair", desc: "Brief description of this service" },
              ].map((service, index) => (
                <div key={index} className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-shadow">
                  <ImagePlaceholder 
                    label={`${service.title} image`}
                    aspectRatio="video"
                    className="rounded-none border-0 border-b"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                    <Link 
                      href="/services" 
                      className="text-primary font-medium text-sm inline-flex items-center hover:underline"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials / Reviews */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Add your customer testimonials and reviews here.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    &quot;Add your customer review here. Include their experience with your services and what they appreciated most.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold">
                      {i}
                    </div>
                    <div>
                      <p className="font-medium">Customer Name</p>
                      <p className="text-sm text-muted-foreground">Location</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Restore Your Vehicle?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Add your call-to-action text here. Encourage visitors to contact you or get a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+1234567890">Call (123) 456-7890</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/services">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
