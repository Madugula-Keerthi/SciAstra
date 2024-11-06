import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced Chemistry for IIT-JEE',
    description: 'Master organic and inorganic chemistry concepts with practical examples',
    price: 14999,
    discountedPrice: 9999,
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    duration: '6 months',
    level: 'Advanced',
    category: 'Chemistry'
  },
  {
    id: '2',
    title: 'Physics Problem Solving',
    description: 'Learn advanced problem-solving techniques for competitive exams',
    price: 12999,
    discountedPrice: 7999,
    imageUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa',
    duration: '4 months',
    level: 'Intermediate',
    category: 'Physics'
  },
  {
    id: '3',
    title: 'Biology NEET Preparation',
    description: 'Comprehensive biology course covering all NEET topics',
    price: 11999,
    discountedPrice: 8999,
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
    duration: '5 months',
    level: 'Advanced',
    category: 'Biology'
  }
];