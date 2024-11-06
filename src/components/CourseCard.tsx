import React from 'react';
import { Clock, BookOpen, TrendingUp } from 'lucide-react';
import { Course } from '../types';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const discount = Math.round(((course.price - course.discountedPrice) / course.price) * 100);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          className="h-48 w-full object-cover"
          src={course.imageUrl}
          alt={course.title}
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded">
            {course.category}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded">
            {course.level}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="h-4 w-4" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span>Online</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">₹{course.discountedPrice}</span>
            {discount > 0 && (
              <span className="text-sm text-gray-500 line-through">₹{course.price}</span>
            )}
          </div>
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}