
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Filter, Search, MapPin, SlidersHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import MainLayout from "../components/layout/MainLayout";
import CategoryFilters from "../components/categories/CategoryFilters";
import PropertyGrid from "../components/properties/PropertyGrid";
import { properties } from "../services/propertyService";
import { Input } from "../components/ui/input";

const Listings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  
  // Extract search params from URL if coming from search
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const locationParam = searchParams.get("location");
    if (locationParam) {
      setSearchTerm(locationParam);
    }
  }, [location]);

  // Filter properties by category and search term
  useEffect(() => {
    const filtered = properties.filter(property => {
      const matchesCategory = selectedCategory === "all" || property.type.toLowerCase().includes(selectedCategory);
      const matchesSearch = 
        searchTerm === "" || 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    
    setFilteredProperties(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <MainLayout>
      <div className="bg-white shadow-sm py-4 sticky top-16 z-10">
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
            <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>
      </div>

      <CategoryFilters 
        selectedCategory={selectedCategory} 
        onChange={setSelectedCategory} 
      />
      
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              {searchTerm ? `Results for "${searchTerm}"` : "All properties"}
              <span className="text-gray-500 text-lg font-normal ml-2">
                ({filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'})
              </span>
            </h1>
            <div className="flex items-center cursor-pointer">
              <MapPin className="h-5 w-5 mr-2 text-gray-500" />
              <span className="hidden sm:inline">Show map</span>
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

export default Listings;
