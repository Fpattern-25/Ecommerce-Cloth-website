import { BlogPost } from "@/types";
import collectionBanner from "@/assets/collection-banner.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Minimalist Dressing",
    excerpt: "Discover how to create a sophisticated wardrobe with fewer, high-quality pieces that work together seamlessly.",
    content: "Minimalist dressing is about creating a curated wardrobe that reflects your personal style while maintaining simplicity and elegance...",
    image: collectionBanner,
    author: "Emma Thompson",
    date: "2024-01-15",
    category: "Style Guide",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Sustainable Fashion: Making Conscious Choices",
    excerpt: "Learn about the importance of sustainable fashion and how to build an eco-friendly wardrobe without compromising on style.",
    content: "Sustainable fashion is more than just a trend—it's a movement towards more conscious consumption...",
    image: collectionBanner,
    author: "Sarah Mitchell",
    date: "2024-01-10",
    category: "Sustainability",
    readTime: "7 min read"
  },
  {
    id: "3",
    title: "Capsule Wardrobe Essentials for 2024",
    excerpt: "The ultimate guide to building a versatile capsule wardrobe with timeless pieces that never go out of style.",
    content: "A capsule wardrobe is a small collection of essential items that can be mixed and matched to create various outfits...",
    image: collectionBanner,
    author: "Lisa Chen",
    date: "2024-01-05",
    category: "Fashion Tips",
    readTime: "6 min read"
  }
];