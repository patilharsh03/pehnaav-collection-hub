
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, ExternalLink, MessagesSquare, Clock, Truck } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const ContactPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-24 bg-wine-900">
        <div className="absolute inset-0 opacity-30">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="small-grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#small-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Connect with our wholesale team to discuss your business needs
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information & FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-wine-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-display font-bold text-wine-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-700 mb-8">
                Our dedicated team is here to assist you with all your wholesale garment inquiries. 
                Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <MapPin className="text-wine-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Plot No. 166A, Uttam Nagar West, New Delhi
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4">
                    <Phone className="text-wine-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      +91 9370088290, +91 8459653179 (Maharashtra Inquiries)<br />
                      +91 9238592077 (Odisha Inquiries)
                      <br />
                      +91 8700389540 (Delhi Corporate Office)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4">
                    <Mail className="text-wine-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      support@pehnaav.co.in<br />
                      inquiry@pehnaav.co.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4">
                    <Instagram className="text-wine-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Social Media</h3>
                    <p className="text-gray-600">
                      <a href="https://instagram.com/pehnaav__?igsh=eXdlZ3BqdzE4MjF4" target="_blank" rel="noopener noreferrer" className="text-wine-700 hover:text-wine-800">
                        @pehnaav__
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-wine-100">
                <h3 className="font-medium text-gray-900 mb-4">Business Hours</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <p className="text-gray-700 font-medium">Monday - Saturday:</p>
                    <p className="text-gray-600">10:00 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Sunday:</p>
                    <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section - replacing the contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 mb-8">
                Find quick answers to common wholesale inquiries below. For specific questions, 
                please reach out to our team directly.
              </p>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">
                    What is the minimum order quantity (MOQ)?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our standard minimum order quantity is 50 pieces per style. However, for first-time buyers,
                    we offer flexibility with a mixed order of 30 pieces across different styles to help you
                    test our products with your customers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">
                    Do you offer customization options?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer various customization options including custom labeling, packaging, and
                    slight design modifications. For full custom designs, we require a minimum order of 100
                    pieces per style with a slightly longer lead time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">
                    What are your payment terms?
                  </AccordionTrigger>
                  <AccordionContent>
                    For new customers, we require a 50% advance payment to initiate production, with the
                    remaining balance due before shipment. Established customers with a good payment history
                    may qualify for more flexible payment terms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">
                    What is your production lead time?
                  </AccordionTrigger>
                  <AccordionContent>
                    Standard production lead time is 2-3 weeks for regular orders. For large volume or custom
                    orders, lead time may extend to 4-6 weeks. We also maintain stock of popular styles that
                    can be shipped within 3-5 business days.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, we currently only ship within India. We provide nationwide shipping services and 
                    have dedicated representatives for Maharashtra, Odisha, and Delhi regions to ensure 
                    efficient delivery and customer service throughout the country.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="space-y-6">
                <h3 className="text-xl font-display font-medium text-gray-900">Quick Contact Options</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="hover:bg-wine-50 transition-colors">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-wine-100 flex items-center justify-center">
                        <MessagesSquare className="h-6 w-6 text-wine-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">WhatsApp</h4>
                        <a href="https://wa.me/919370088290" className="text-wine-700 hover:underline text-sm flex items-center">
                          +91 9370088290 <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:bg-wine-50 transition-colors">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-wine-100 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-wine-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">Call Now</h4>
                        <a href="tel:+918700389540" className="text-wine-700 hover:underline text-sm flex items-center">
                          +91 8700389540
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Schedule a visit to explore our latest collections in person
            </p>
          </div>

          <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.45959161823!2d77.04894567550245!3d28.615984684831844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050fcf48cc6b%3A0x7cf3407cd78a232d!2sMahaveer%20Apartments!5e0!3m2!1sen!2sin!4v1742220634906!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pehnaav Showroom Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-wine-800 to-wine-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Discuss Your Wholesale Needs?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our team is ready to assist you with personalized wholesale solutions tailored to your business.
            </p>
            <a
              href="tel:+919717277631"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-500 hover:bg-gold-600 text-wine-950 font-medium rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg mx-2"
            >
              <Phone size={18} className="mr-2" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
