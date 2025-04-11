import React, { useState, useEffect } from 'react';
import { SearchFilters, Business } from './types';
import { businesses } from './data';
import SearchBar from './components/SearchBar';
import BusinessCard from './components/BusinessCard';
import Map from './components/Map';
import { MapPin, Moon, Sun } from 'lucide-react';

function App() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'all',
    rating: null,
  });
  
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const filteredBusinesses = businesses.filter((business) => {
    const matchesQuery = business.name.toLowerCase().includes(filters.query.toLowerCase()) ||
                        business.description.toLowerCase().includes(filters.query.toLowerCase());
    const matchesCategory = filters.category === 'all' || business.category === filters.category;
    const matchesRating = !filters.rating || business.rating >= filters.rating;
    
    return matchesQuery && matchesCategory && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Local Business Directory</h1>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar filters={filters} onFilterChange={setFilters} isDarkMode={isDarkMode} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBusinesses.map((business) => (
                <BusinessCard
                  key={business.id}
                  business={business}
                  onClick={() => setSelectedBusiness(business)}
                  isDarkMode={isDarkMode}
                />
              ))}
              {filteredBusinesses.length === 0 && (
                <div className="col-span-2 text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">No businesses found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Map 
                businesses={filteredBusinesses}
                selectedBusiness={selectedBusiness}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;