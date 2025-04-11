import React from 'react';
import { Search } from 'lucide-react';
import { Category, SearchFilters } from '../types';

interface SearchBarProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
  isDarkMode: boolean;
}

const categories: Category[] = ['cafe', 'bookstore', 'crafts', 'restaurant', 'retail'];

export default function SearchBar({ filters, onFilterChange, isDarkMode }: SearchBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search businesses..."
            className="w-full pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            value={filters.query}
            onChange={(e) => onFilterChange({ ...filters, query: e.target.value })}
          />
        </div>
        
        <select
          className="px-4 py-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          value={filters.category}
          onChange={(e) => onFilterChange({ ...filters, category: e.target.value as Category | 'all' })}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        
        <select
          className="px-4 py-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          value={filters.rating || ''}
          onChange={(e) => onFilterChange({ ...filters, rating: e.target.value ? Number(e.target.value) : null })}
        >
          <option value="">All Ratings</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="2">2+ Stars</option>
        </select>
      </div>
    </div>
  );
}