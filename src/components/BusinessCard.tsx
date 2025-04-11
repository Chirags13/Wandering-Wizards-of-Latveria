import React from 'react';
import { MapPin, Phone, Mail, Globe, Star } from 'lucide-react';
import { Business } from '../types';

interface BusinessCardProps {
  business: Business;
  onClick: () => void;
  isDarkMode: boolean;
}

export default function BusinessCard({ business, onClick, isDarkMode }: BusinessCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={business.imageUrl} 
          alt={business.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="flex items-center bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 text-sm font-medium px-2.5 py-0.5 rounded-full shadow-md">
            <Star className="w-4 h-4 mr-1 fill-current" />
            {business.rating}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{business.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{business.description}</p>
        
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-primary-500" />
            {business.address}
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-primary-500" />
            {business.phone}
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-primary-500" />
            {business.email}
          </div>
          {business.website && (
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-primary-500" />
              <a 
                href={business.website}
                className="text-primary-600 dark:text-primary-400 hover:underline"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}