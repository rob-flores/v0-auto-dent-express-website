import Link from "next/link"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImagePlaceholder } from "@/components/image-placeholder"

const services = [
  {
    id: "paintless-dent-repair",
    title: "Paintless Dent Repair",
    description: "Add your description for paintless dent repair here. Explain the process, benefits, and what customers can expect.",
    features: [
      "Feature or benefit #1",
      "Feature or benefit #2",
      "Feature or benefit #3",
      "Feature or benefit #4",
    ],
  },
  {
    id: "door-dings",
    title: "Door Ding Removal",
    description: "Add your description for door ding removal here. Describe how you handle minor dents from parking lot incidents.",
    features: [
      "Feature or benefit #1",
      "Feature or benefit #2",
      "Feature or benefit #3",
      "Feature or benefit #4",
    ],
  },
  {
    id: "hail-damage",
    title: "Hail Damage Repair",
    description: "Add your description for hail damage repair here. Explain your approach to restoring vehicles damaged by hail storms.",
    features: [
      "Feature or benefit #1",
      "Feature or benefit #2",
      "Feature or benefit #3",
      "Feature or benefit #4",
    ],
  },
  {
    id: "headliner-repair",
    title: "Headliner Repair",
    description: "Add your description for headliner repair here. Describe your headliner restoration and replacement services.",
    features: [
      "Feature or benefit #1",
      "Feature or benefit #2",
      "Feature or benefit #3",
      "Feature or benefit #4",
    ],
  },
  {
    id: "additional-services",
    title: "Additional Services",
    description: "Add descriptions for any other services you offer. This could include body work, touch-up paint, or other specialties.",
    features: [
      "Additional service #1",
      "Additional service #2",
      "Additional service #3",
      "Additional service #4",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-foreground text-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-background/70 max-w-2xl mx-auto text-lg">
              Professional dent repair and auto body services to restore your vehicle to its original condition.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Add an introduction to your service offerings and your commitment to quality workmanship.
              </p>
            </div>

            <div className="space-y-16 md:space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <ImagePlaceholder 
                      label={`${service.title} - Add before/after or work photo`}
                      aspectRatio="video"
                    />
                  </div>
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button asChild>
                        <a href="tel:+1234567890">
                          Get a Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Add a description of your repair process from start to finish.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Step 1 Title", desc: "Description of your first step in the repair process." },
                { step: "02", title: "Step 2 Title", desc: "Description of your second step in the repair process." },
                { step: "03", title: "Step 3 Title", desc: "Description of your third step in the repair process." },
                { step: "04", title: "Step 4 Title", desc: "Description of your fourth step in the repair process." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Information</h2>
              <p className="text-muted-foreground mb-8">
                Add information about your pricing structure, free estimates, and any financing options available.
              </p>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Free Estimates Available</h3>
                <p className="text-muted-foreground mb-6">
                  Add details about your free estimate process. Explain what customers can expect and how to schedule.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="tel:+1234567890">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for a Quote
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Add common questions and answers about your services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Question #1 - Add your FAQ here",
                  answer: "Add your answer here. Provide helpful information that addresses common customer concerns.",
                },
                {
                  question: "Question #2 - Add your FAQ here",
                  answer: "Add your answer here. Be clear and concise while being thorough.",
                },
                {
                  question: "Question #3 - Add your FAQ here",
                  answer: "Add your answer here. Consider including details about your process, timing, or guarantees.",
                },
                {
                  question: "Question #4 - Add your FAQ here",
                  answer: "Add your answer here. Address any concerns about pricing, insurance, or scheduling.",
                },
                {
                  question: "Question #5 - Add your FAQ here",
                  answer: "Add your answer here. Include any other information customers commonly ask about.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free estimate. We&apos;ll assess your vehicle and provide a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+1234567890">Call (123) 456-7890</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
