import React from 'react';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48">
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
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishDate}>
              {format(new Date(post.publishDate), 'MMM d, yyyy')}
            </time>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          <Link to={`/blog/${post.id}`} className="hover:text-indigo-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="text-indigo-600 font-medium hover:text-indigo-500"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}