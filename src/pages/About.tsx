
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import ImageWithLoader from '@/components/ImageWithLoader';

const AboutPage: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
                About Pehnaav
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Crafting premium wholesale garments with passion, precision, and purpose since 2010
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-wine-50 text-wine-800 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                A Legacy of Excellence in Wholesale Fashion
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010 by textile enthusiast Rajesh Patel, Pehnaav began as a small family-owned wholesale business in the heart of Mumbai's textile district. With a vision to create high-quality garments that blend traditional craftsmanship with contemporary designs, we set out on a journey to revolutionize the wholesale garment industry.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've grown from a team of 5 artisans to over 200 skilled professionals, each bringing their unique expertise to create exquisite garments that stand out in quality and design. What hasn't changed is our unwavering commitment to excellence and our passion for textiles.
              </p>
              <p className="text-lg text-gray-700">
                Today, Pehnaav is proud to be a trusted wholesale partner to retailers across India and beyond, delivering garments that help businesses thrive in the competitive fashion landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl"
            >
              <ImageWithLoader
                src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
                alt="Pehnaav workshop"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-wine-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-wine-100 text-wine-800 rounded-full text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our values form the foundation of everything we do, from designing collections to partnering with retailers
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-full mb-6"
                  style={{ backgroundColor: value.accentColor }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-gold-50 text-gold-800 rounded-full text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                From Concept to Collection
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover the meticulous journey behind creating our premium wholesale garments
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center text-wine-800 font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={18} className="text-gold-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-wine-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-wine-100 text-wine-800 rounded-full text-sm font-medium mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Meet the Experts Behind Pehnaav
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                A dedicated team of professionals committed to excellence in wholesale fashion
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-3 aspect-h-4 relative">
                  <ImageWithLoader
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-wine-700 mb-4">{member.role}</p>
                  <p className="text-gray-700 text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-20 bg-gradient-to-r from-wine-800 to-wine-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Pehnaav Commitment
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
                When you partner with Pehnaav, you're not just buying garments; you're investing in a relationship built on quality, reliability, and excellence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {promises.map((promise, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                  >
                    <div className="text-gold-400 mb-4">{promise.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{promise.title}</h3>
                    <p className="text-white/70 text-sm">{promise.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

// Values data
const values = [
  {
    title: 'Quality First',
    description: "We never compromise on the quality of our fabrics, craftsmanship, or designs. Every garment undergoes rigorous quality checks before reaching our clients.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-wine-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    accentColor: '#982c4e'
  },
  {
    title: 'Innovation',
    description: "We constantly explore new techniques, designs, and fabrics to stay ahead of trends and offer our clients fresh and exciting collections each season.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    accentColor: '#caa814'
  },
  {
    title: 'Sustainability',
    description: "We're committed to sustainable practices in our production processes, minimizing waste and environmental impact while maximizing ethical sourcing.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    accentColor: '#059669'
  }
];

// Process data
const process = [
  {
    title: 'Design & Conceptualization',
    description: 'Our creative team meticulously researches trends, consumer behaviors, and market demands to develop innovative designs that resonate with the end consumer.',
    points: [
      'Trend research and analysis across global markets',
      'Conceptualization of seasonal collections',
      'Design sketching and digital modeling',
      'Material selection and color palette development'
    ]
  },
  {
    title: 'Material Sourcing & Preparation',
    description: 'We partner with trusted suppliers who share our commitment to quality and sustainability, sourcing the finest fabrics and materials for our garments.',
    points: [
      'Ethical sourcing from verified suppliers',
      'Quality testing of all materials',
      'Pre-treatment and preparation processes',
      'Color dyeing and printing using eco-friendly methods'
    ]
  },
  {
    title: 'Crafting & Production',
    description: 'Our skilled artisans bring designs to life, combining traditional craftsmanship with modern production techniques to create garments of exceptional quality.',
    points: [
      'Pattern making and sample development',
      'Cutting and tailoring by experienced craftspeople',
      'Embellishment and detailing work',
      'Rigorous in-process quality checks'
    ]
  },
  {
    title: 'Quality Assurance & Distribution',
    description: 'Before any garment leaves our facility, it undergoes comprehensive quality checks to ensure it meets our stringent standards.',
    points: [
      'Multi-point quality inspection process',
      'Packaging designed for wholesale distribution',
      'Efficient logistics and delivery systems',
      'Post-delivery support and feedback collection'
    ]
  }
];

// Team members data
const team = [
  {
    name: 'Akankshya Mishra Patil',
    role: 'CEO and Designer',
    bio: 'Akankshya drives our vision with a perfect blend of creative insight and strategic leadership, ensuring that every design reflects our brand’s core values while pushing the boundaries of innovation.',
    image: '/team/akanshya.jpg'
  },
  {
    name: 'Shubham Patil',
    role: 'Chief Operations Officer (COO)',
    bio: 'Shubham oversees our day-to-day operations with precision and efficiency, ensuring that every process runs smoothly and aligns with our company’s strategic goals for sustained growth and success.',
    image: '/team/shubham.jpg'
  },
  {
    name: 'Harsh Patil',
    role: 'Chief Technology Officer (CTO)',
    bio: 'Harsh leads our technology strategy, driving innovation and ensuring that all technical solutions are scalable, secure, and aligned with the company’s goals for long-term success.',
    image: '/team/harsh_3.jpg'
  },
  {
    name: 'Akshaya Mishra',
    role: 'CFO and Director',
    bio: 'Akshaya oversees our financial strategy and operations, ensuring robust fiscal health and sustainable growth, while providing visionary leadership to guide the company’s financial direction and long-term goals.',
    image: '/team/ak.jpg'
  },
  {
    name: 'Sujal Asode',
    role: 'Marketing Manager',
    bio: 'Sujal crafts and executes dynamic marketing strategies that elevate our brand, engage our audience, and drive growth, always staying ahead of market trends and customer needs.',
    image: '/team/sujal_2.jpg'
  },
  {
    name: 'Mayur Asode',
    role: 'Supply Chain Manager',
    bio: 'Mayur ensures the seamless flow of products from supplier to customer, optimizing every step of the supply chain to guarantee efficiency, cost-effectiveness, and timely delivery.',
    image: '/team/mayur_2.jpg'
  },
  
];

// Brand promises
const promises = [
  {
    title: 'Superior Quality',
    description: 'Every garment is crafted to meet the highest standards of quality and durability.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: 'Timely Delivery',
    description: 'We understand the importance of timelines in retail and commit to punctual deliveries.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: 'Transparent Pricing',
    description: 'Our pricing structure is clear and transparent, with no hidden costs or surprises.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    title: 'Dedicated Support',
    description: 'Our team is always available to assist you with inquiries, orders, or after-sales support.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
  }
];

export default AboutPage;
