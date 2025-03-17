
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { useForm } from "react-hook-form";
import { toast } from '@/hooks/use-toast';

const ContactPage: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // In a real application, you would handle the form submission here
    console.log('Form submitted:', data);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting Pehnaav. We'll respond shortly.",
    });
    reset();
  };

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

      {/* Contact Information & Form Section */}
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Send Us A Message
              </h2>
              <p className="text-gray-700 mb-8">
                Please fill out the form below with your inquiry, and our team will 
                get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500`}
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500"
                    {...register("company")}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500`}
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message as string}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500`}
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message as string}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-wine-800 hover:bg-wine-700 text-white rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
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
