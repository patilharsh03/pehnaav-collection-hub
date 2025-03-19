
import { Category } from '@/components/home/FeaturedCategories';
import { Testimonial } from '@/components/home/Testimonials';

// Sample data for the categories
export const categories: Category[] = [
  {
    id: 'ethnic',
    title: 'Ethnic Wear',
    description: 'Traditional garments with contemporary designs',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80'
  },
  {
    id: 'formal',
    title: 'Formal Wear',
    description: 'Sophisticated attire for professional settings',
    image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&auto=format&fit=crop&w=985&q=80'
  },
  {
    id: 'casual',
    title: 'Casual Collection',
    description: 'Comfortable yet stylish everyday garments',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80'
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
