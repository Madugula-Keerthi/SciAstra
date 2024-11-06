import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { Clock, BookOpen, TrendingUp } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
        </div>
      </div>
    );
  }

  const discount = Math.round(((course.price - course.discountedPrice) / course.price) * 100);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              className="w-full h-full object-cover"
              src={course.imageUrl}
              alt={course.title}
            />
          </div>
          <div className="p-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded">
                {course.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded">
                {course.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{course.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-indigo-600" />
                <span className="text-lg text-gray-700">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
                <span className="text-lg text-gray-700">{course.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-indigo-600" />
                <span className="text-lg text-gray-700">Online Access</span>
              </div>
            </div>

            <div className="border-t pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-gray-900">₹{course.discountedPrice}</span>
                  {discount > 0 && (
                    <span className="text-xl text-gray-500 line-through">₹{course.price}</span>
                  )}
                  {discount > 0 && (
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded">
                      {discount}% OFF
                    </span>
                  )}
                </div>
                <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}