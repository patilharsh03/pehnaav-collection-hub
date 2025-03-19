import React, { useState } from 'react';
import { ArrowRight, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import ImageWithLoader from '@/components/ImageWithLoader';

// Product type definition
interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  minOrder: number;
  price: string;
  tags: string[];
  sizes: string;
}

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-wine-900 to-wine-950">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
                Our Premium Collection
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Explore our extensive range of high-quality wholesale garments designed for the modern retailer
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setFiltersVisible(!filtersVisible)}
              className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              <Filter size={18} className="mr-2" />
              {filtersVisible ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div 
              className={`lg:w-1/4 bg-white p-6 rounded-lg shadow-sm ${
                filtersVisible ? 'block' : 'hidden lg:block'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Categories</h3>
                <button 
                  onClick={() => setFiltersVisible(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-3">
                <CategoryButton
                  active={selectedCategory === 'all'}
                  onClick={() => setSelectedCategory('all')}
                >
                  All Collections
                </CategoryButton>
                <CategoryButton
                  active={selectedCategory === 'ethnic'}
                  onClick={() => setSelectedCategory('ethnic')}
                >
                  Ethnic Wear
                </CategoryButton>
                <CategoryButton
                  active={selectedCategory === 'formal'}
                  onClick={() => setSelectedCategory('formal')}
                >
                  Formal Wear
                </CategoryButton>
                <CategoryButton
                  active={selectedCategory === 'casual'}
                  onClick={() => setSelectedCategory('casual')}
                >
                  Casual Collection
                </CategoryButton>
                <CategoryButton
                  active={selectedCategory === 'seasonal'}
                  onClick={() => setSelectedCategory('seasonal')}
                >
                  Seasonal
                </CategoryButton>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Information</h3>
                <div className="bg-wine-50 p-4 rounded-md border border-wine-100">
                  <p className="text-sm text-wine-800 mb-3">
                    All our products are available for wholesale orders only. Please contact us for pricing details.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-medium text-wine-800 hover:text-wine-700"
                  >
                    Get Quote <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-2xl font-display font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Products' : 
                    `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Collection`}
                </h2>
                <p className="text-gray-600">{filteredProducts.length} products</p>
              </div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProducts.map((product) => (
                  <motion.div 
                    key={product.id} 
                    variants={itemVariants}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                      <ImageWithLoader
                        src={product.image}
                        alt={product.name}
                        className="hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 bg-wine-50 text-wine-800 rounded-full text-xs font-medium mb-3">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </span>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                      <div className="mb-1">
                        <span className="text-wine-700 font-medium">{product.price}</span>
                      </div>
                      <div className="mb-3">
                        <span className="text-gray-700 text-sm">Size: {product.sizes}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Min Order: {product.minOrder} pcs</span>
                        <Link
                          to={`/contact?product=${product.id}`}
                          className="inline-flex items-center text-wine-800 hover:text-wine-700 font-medium text-sm"
                        >
                          Inquire <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {filteredProducts.length === 0 && (
                <div className="bg-white rounded-lg p-8 text-center">
                  <p className="text-gray-600 mb-4">No products found in this category.</p>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-wine-800 hover:text-wine-700 font-medium"
                  >
                    View all products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-wine-800 to-wine-900 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Need Custom Wholesale Solutions?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We offer bespoke manufacturing services tailored to your specific requirements. Contact our team to discuss your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-wine-950 font-medium rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

interface CategoryButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
        active 
          ? 'bg-wine-100 text-wine-800 font-medium' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
};

// Sample products data
const products: Product[] = [
  {
    id: 'p1',
    name: 'Men\'s Shirt',
    category: 'casual',
    description: 'Comfortable shirts for everyday wear',
    image: '/products/men_shirt_1.png',
    minOrder: 20,
    price: "₹200/per piece",
    tags: ['casual', 'printed', 'shirts'],
    sizes: '38 to 44'
  },
  {
    id: 'p2',
    name: 'Designer Lehenga Set',
    category: 'ethnic',
    description: 'Three-piece lehenga set with contemporary designs',
    image: 'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    minOrder: 15,
    price: "₹200/per piece",
    tags: ['lehenga', 'festive', 'wedding'],
    sizes: '38 to 44'
  },
  {
    id: 'p3',
    name: 'Business Formal Suit',
    category: 'formal',
    description: 'Tailored business suit for professional settings',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    minOrder: 25,
    price: "₹200/per piece",
    tags: ['suit', 'business', 'professional'],
    sizes: '38 to 44'
  },
  {
    id: 'p4',
    name: 'Casual Cotton Shirts',
    category: 'casual',
    description: 'Comfortable cotton shirts for everyday wear',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    minOrder: 30,
    price: "₹200/per piece",
    tags: ['cotton', 'casual', 'everyday'],
    sizes: '38 to 44'
  },
  {
    id: 'p5',
    name: 'Designer Kurta Collection',
    category: 'ethnic',
    description: 'Premium kurta collection with traditional prints',
    image: 'https://images.unsplash.com/photo-1574791418596-6aafcbf8222e?ixlib=rb-4.0.3&auto=format&fit=crop&w=956&q=80',
    minOrder: 20,
    price: "₹200/per piece",
    tags: ['kurta', 'traditional', 'festive'],
    sizes: '38 to 44'
  },
  {
    id: 'p6',
    name: 'Women\'s Formal Blazers',
    category: 'formal',
    description: 'Elegantly designed blazers for women',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80',
    minOrder: 20,
    price: "₹200/per piece",
    tags: ['blazer', 'women', 'professional'],
    sizes: '38 to 44'
  },
  {
    id: 'p7',
    name: 'Summer Collection',
    category: 'seasonal',
    description: 'Lightweight fabrics perfect for summer months',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1020&q=80',
    minOrder: 25,
    price: "₹200/per piece",
    tags: ['summer', 'lightweight', 'casual'],
    sizes: '38 to 44'
  },
  {
    id: 'p8',
    name: 'Winter Collection',
    category: 'seasonal',
    description: 'Warm and stylish garments for winter season',
    image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    minOrder: 20,
    price: "₹200/per piece",
    tags: ['winter', 'warm', 'seasonal'],
    sizes: '38 to 44'
  },
  {
    id: 'p9',
    name: 'Denim Collection',
    category: 'casual',
    description: 'Premium quality denim wear for all occasions',
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    minOrder: 30,
    price: "₹200/per piece",
    tags: ['denim', 'casual', 'everyday'],
    sizes: '38 to 44'
  }
];

export default ProductsPage;
