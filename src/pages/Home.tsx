
import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/hero/HeroSection";
import CategoryFilters from "../components/categories/CategoryFilters";
import PropertyGrid from "../components/properties/PropertyGrid";
import LocationScroll from "../components/sections/LocationScroll";
import { getPropertiesByCategory } from "../services/propertyService";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProperties = getPropertiesByCategory(selectedCategory);

  return (
    <MainLayout>
      <HeroSection />
      <CategoryFilters 
        selectedCategory={selectedCategory} 
        onChange={setSelectedCategory} 
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Popular destinations</h2>
          <LocationScroll />
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            {selectedCategory === "all" 
              ? "Recommended places to stay" 
              : `Best ${selectedCategory} stays`}
          </h2>
          
          {filteredProperties.length > 0 ? (
            <PropertyGrid properties={filteredProperties} />
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl mb-4 text-gray-800">No properties found for this category</h3>
              <p className="text-gray-500">
                Try selecting a different category or adjust your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-rose-50 rounded-xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Want to become a host?</h2>
            <p className="mb-6 max-w-2xl mx-auto text-gray-600">
              Turn your extra space into extra income. StayHub makes it simple to earn from your home and connect with travelers from around the world.
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Learn more about hosting
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
