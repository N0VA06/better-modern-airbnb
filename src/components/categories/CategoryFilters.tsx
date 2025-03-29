
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  Building, 
  Home, 
  Mountain, 
  Umbrella, 
  Waves, 
  Trees, 
  FireExtinguisher, 
  Castle, 
  Warehouse,
  Palmtree,
  Coffee,
  Tent
} from "lucide-react";

type CategoryItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const categories: CategoryItem[] = [
  { id: "all", label: "All", icon: <Building className="h-5 w-5" /> },
  { id: "house", label: "Houses", icon: <Home className="h-5 w-5" /> },
  { id: "apartment", label: "Apartments", icon: <Warehouse className="h-5 w-5" /> },
  { id: "beachfront", label: "Beachfront", icon: <Waves className="h-5 w-5" /> },
  { id: "mountains", label: "Mountains", icon: <Mountain className="h-5 w-5" /> },
  { id: "tropical", label: "Tropical", icon: <Palmtree className="h-5 w-5" /> },
  { id: "countryside", label: "Countryside", icon: <Trees className="h-5 w-5" /> },
  { id: "cabins", label: "Cabins", icon: <FireExtinguisher className="h-5 w-5" /> },
  { id: "castles", label: "Castles", icon: <Castle className="h-5 w-5" /> },
  { id: "camping", label: "Camping", icon: <Tent className="h-5 w-5" /> },
  { id: "pools", label: "Amazing pools", icon: <Umbrella className="h-5 w-5" /> },
  { id: "cafes", label: "Cafes nearby", icon: <Coffee className="h-5 w-5" /> },
];

interface CategoryFiltersProps {
  selectedCategory: string;
  onChange: (category: string) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ 
  selectedCategory, 
  onChange 
}) => {
  return (
    <div className="border-b">
      <div className="container px-4 py-4 mx-auto">
        <Tabs 
          defaultValue="all" 
          value={selectedCategory} 
          onValueChange={onChange}
          className="w-full overflow-x-auto"
        >
          <TabsList className="flex w-full justify-start overflow-x-auto pb-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex flex-col items-center px-4 py-2"
              >
                <div className="mb-1">{category.icon}</div>
                <span className="text-xs whitespace-nowrap">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoryFilters;
