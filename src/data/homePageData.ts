
import { Category } from '@/components/home/FeaturedCategories';
import { Testimonial } from '@/components/home/Testimonials';

// Sample data for the categories
export const categories: Category[] = [
  {
    id: 'ethnic',
    title: 'Ethnic Wear',
    description: 'Traditional garments with contemporary designs',
    image: '/products/designer_kurta_ladies.png'
  },
  {
    id: 'wedding',
    title: 'Wedding Wear',
    description: 'Sophisticated attire for wedding and party settings',
    image: '/products/formal_suit_men.jpg'
  },
  {
    id: 'casual',
    title: 'Casual Collection',
    description: 'Comfortable yet stylish everyday garments',
    image: '/products/men_shirt_1.png'
  }
];

// Sample testimonials
export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    title: 'Owner, Elegance Boutique',
    quote: "Pehnaav has transformed our boutique's collection. The quality of their garments is exceptional, and our customers love the unique designs.",
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    name: 'Rajiv Mehta',
    title: 'Director, Fashion Forward',
    quote: "We've been working with Pehnaav for over 3 years. Their wholesale collection consistently exceeds our expectations in quality and style.",
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
  {
    name: 'Ananya Patel',
    title: 'Manager, Trendsetter Retail',
    quote: "The attention to detail in Pehnaav's garments is remarkable. Our store has seen increased customer satisfaction since partnering with them.",
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
  }
];
