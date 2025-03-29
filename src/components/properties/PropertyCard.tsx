
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { AspectRatio } from "../ui/aspect-ratio";
import { motion } from "framer-motion";

export interface PropertyData {
  id: string;
  title: string;
  location: string;
  images: string[];
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  type: string;
  beds: number;
  baths: number;
  dates?: string;
}

interface PropertyCardProps {
  property: PropertyData;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {property.images.map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={4/3}>
                  <img 
                    src={image} 
                    alt={`${property.title} - image ${index + 1}`}
                    className="object-cover w-full h-full rounded-t-xl"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
        </Carousel>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/60 hover:bg-white/90 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-5 w-5 text-rose-500" />
        </Button>
      </div>
      
      <Link to={`/property/${property.id}`} className="block p-4">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-900 truncate">{property.title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current text-rose-500" />
            <span className="text-gray-700 font-medium">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm truncate">{property.location}</p>
        <p className="text-gray-500 text-sm">{property.type} • {property.beds} beds • {property.baths} baths</p>
        {property.dates && <p className="text-gray-500 text-sm mt-1">{property.dates}</p>}
        <p className="font-semibold mt-2 text-gray-900">
          <span>{property.currency}{property.price}</span>
          <span className="text-gray-500 font-normal"> night</span>
        </p>
      </Link>
    </div>
  );
};

export default PropertyCard;
