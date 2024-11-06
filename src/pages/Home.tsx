import React from 'react';
import { ArrowRight, Beaker, BookOpen, Users } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

const featuredCourses = [
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
  }
];

const latestPosts = [
  {
    id: '1',
    title: 'How to Prepare for NEET 2024',
    excerpt: 'Expert tips and strategies to crack NEET with flying colors',
    content: '',
    author: 'Dr. Sarah Johnson',
    publishDate: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    category: 'Exam Prep'
  },
  {
    id: '2',
    title: 'Understanding Chemical Bonding',
    excerpt: 'A comprehensive guide to chemical bonding concepts',
    content: '',
    author: 'Prof. Michael Chen',
    publishDate: '2024-03-14',
    imageUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6',
    category: 'Chemistry'
  }
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
            alt="Students studying"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Unlock Your Scientific Potential
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Join SciAstra's comprehensive learning platform designed for aspiring scientists and engineers. Master concepts, solve problems, and achieve your dreams.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Explore Courses
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Expert-Led Courses</h3>
              <p className="mt-2 text-base text-gray-500">
                Learn from experienced educators and industry professionals
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Beaker className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Practical Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                Hands-on experiments and real-world problem solving
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Community Support</h3>
              <p className="mt-2 text-base text-gray-500">
                Join a community of passionate learners and educators
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <Link
              to="/courses"
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest from Blog</h2>
            <Link
              to="/blog"
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}