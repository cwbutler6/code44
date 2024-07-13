import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-warm-black text-warm-cream">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-8 text-warm-gold">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-warm-black/80 border-warm-gold/30">
            <CardHeader>
              <CardTitle className="text-warm-gold">Book Your Event</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-warm-cream/10 text-warm-cream" />
                <Input placeholder="Email" type="email" className="bg-warm-cream/10 text-warm-cream" />
                <Input placeholder="Phone" type="tel" className="bg-warm-cream/10 text-warm-cream" />
                <Select>
                  <SelectTrigger className="bg-warm-cream/10 text-warm-cream">
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="social">Social Gathering</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Estimated Guest Count" type="number" className="bg-warm-cream/10 text-warm-cream" />
                <Textarea placeholder="Tell us about your event" className="bg-warm-cream/10 text-warm-cream" />
                <Button className="w-full bg-warm-gold hover:bg-warm-gold/90 text-warm-black">Submit Inquiry</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            <Card className="bg-warm-black/80 border-warm-gold/30">
              <CardHeader>
                <CardTitle className="text-warm-gold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-warm-cream">
                <p>Address: 123 Elegant Avenue, Luxe City, LC 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@code44events.com</p>
              </CardContent>
            </Card>
            
            {/* Map placeholder - replace with actual map component */}
            <div className="aspect-video bg-warm-cream/10 flex items-center justify-center">
              <p className="text-warm-cream/50">Map Placeholder</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 text-warm-gold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is the capacity of Code 44?", a: "Code 44 can accommodate up to 300 guests comfortably." },
              { q: "Do you offer catering services?", a: "We work with a selection of premium catering partners and can assist in arranging catering for your event." },
              { q: "Is parking available?", a: "Yes, we offer complimentary valet parking for all events." },
              { q: "Can we bring our own decorations?", a: "Certainly! We welcome you to personalize the space. Our team can assist with setup and teardown." }
            ].map((faq, index) => (
              <Card key={index} className="bg-warm-black/80 border-warm-gold/30">
                <CardHeader>
                  <CardTitle className="text-warm-gold text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-cream/90">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;