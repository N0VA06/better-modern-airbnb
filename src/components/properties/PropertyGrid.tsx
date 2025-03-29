
import React from "react";
import PropertyCard, { PropertyData } from "./PropertyCard";
import { motion } from "framer-motion";

interface PropertyGridProps {
  properties: PropertyData[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9] // Custom easing for a more fluid animation
          }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.2 }
          }}
          className="h-full"
        >
          <PropertyCard property={property} />
        </motion.div>
      ))}
      
      {/* Add empty placeholders for better grid alignment when there are few items */}
      {properties.length > 0 && properties.length < 4 && (
        Array.from({ length: Math.min(4 - properties.length, 3) }).map((_, index) => (
          <div key={`placeholder-${index}`} className="hidden xl:block" />
        ))
      )}
    </div>
  );
};

export default PropertyGrid;
