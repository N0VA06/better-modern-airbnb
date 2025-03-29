
import React, { useState } from "react";
import { Filter, Search, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import MainLayout from "../components/layout/MainLayout";
import CategoryFilters from "../components/categories/CategoryFilters";
import PropertyGrid from "../components/properties/PropertyGrid";
import { properties } from "../services/propertyService";
import { Input } from "../components/ui/input";

const Properties = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter properties by category and search term
  const filteredProperties = properties.filter(property => {
    const matchesCategory = selectedCategory === "all" || property.type.toLowerCase().includes(selectedCategory);
    const matchesSearch = 
      searchTerm === "" || 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10 pr-4 py-2 rounded-full border focus-visible:ring-rose-500"
                placeholder="Search destinations, properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>
      </div>

      <CategoryFilters 
        selectedCategory={selectedCategory} 
        onChange={setSelectedCategory} 
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">
              {searchTerm ? `Results for "${searchTerm}"` : "All properties"}
            </h1>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-gray-500" />
              <span>Show map</span>
            </div>
          </div>
          
          {filteredProperties.length > 0 ? (
            <PropertyGrid properties={filteredProperties} />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl mb-4">No properties found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Properties;
