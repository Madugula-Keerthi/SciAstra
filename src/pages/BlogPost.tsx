import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              className="w-full h-full object-cover"
              src={post.imageUrl}
              alt={post.title}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishDate}>
                  {format(new Date(post.publishDate), 'MMMM d, yyyy')}
                </time>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <div className="prose prose-indigo max-w-none">
              <p className="text-gray-600">{post.content}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}