import Link from "next/link"
import { CheckCircle, Users, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImagePlaceholder } from "@/components/image-placeholder"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-foreground text-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-background/70 max-w-2xl mx-auto text-lg">
              Add your company introduction here. Tell visitors who you are and what you stand for.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ImagePlaceholder
                  label="Add a photo of your shop, team, or owner"
                  aspectRatio="square"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ad your company story here. Describe how Auto Dent Express King was founded, your mission, and your journey so far.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Add more details about your experience, passion for the work, and commitment to customer satisfaction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Share what drives your business and what sets you apart from competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Achievements */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Calendar className="h-7 w-7" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">XX+</p>
                <p className="text-muted-foreground mt-1">Years in Business</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">X,XXX+</p>
                <p className="text-muted-foreground mt-1">Vehicles Repaired</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-7 w-7" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">X,XXX+</p>
                <p className="text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="h-7 w-7" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">XX</p>
                <p className="text-muted-foreground mt-1">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Add a brief introduction to your company values and principles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-3">Value #1</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Add your first core value here. Explain what it means to your business and how you uphold it.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-3">Value #2</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Add your second core value here. Describe how this value impacts your service delivery.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-3">Value #3</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Add your third core value here. Share how customers benefit from this commitment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Add a brief description of your team and their expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <ImagePlaceholder
                    label="Team member photo"
                    aspectRatio="square"
                    className="mb-4 max-w-[200px] mx-auto rounded-full"
                  />
                  <h3 className="font-semibold text-lg">Team Member Name</h3>
                  <p className="text-primary text-sm mb-2">Position / Title</p>
                  <p className="text-muted-foreground text-sm">
                    Brief bio or description of this team member&apos;s role and expertise.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Affiliations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                List your industry certifications, training, and professional affiliations.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-32 h-32">
                  <ImagePlaceholder
                    label={`Cert ${i}`}
                    aspectRatio="square"
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Work With Us?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Add your call-to-action text here. Invite visitors to contact you or schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+1234567890">Contact Us Today</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
