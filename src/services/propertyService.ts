import { PropertyData } from "../components/properties/PropertyCard";

// Mock property data
export const properties: PropertyData[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    location: "Seattle, Washington",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ],
    price: 120,
    currency: "$",
    rating: 4.92,
    reviewCount: 124,
    type: "Apartment",
    beds: 2,
    baths: 1
  },
  {
    id: "2",
    title: "Beachfront Villa with Pool",
    location: "Malibu, California",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    ],
    price: 450,
    currency: "$",
    rating: 4.98,
    reviewCount: 87,
    type: "Villa",
    beds: 4,
    baths: 3
  },
  {
    id: "3",
    title: "Charming Mountain Cabin",
    location: "Aspen, Colorado",
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhYmlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    ],
    price: 195,
    currency: "$",
    rating: 4.85,
    reviewCount: 62,
    type: "Cabin",
    beds: 3,
    baths: 2
  },
  {
    id: "4",
    title: "Historic Downtown Loft",
    location: "New York, New York",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ],
    price: 225,
    currency: "$",
    rating: 4.76,
    reviewCount: 105,
    type: "Loft",
    beds: 1,
    baths: 1
  },
  {
    id: "5",
    title: "Tropical Beachfront Bungalow",
    location: "Kauai, Hawaii",
    images: [
      "https://images.unsplash.com/photo-1570610181658-0c6ea6d2b51d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    ],
    price: 310,
    currency: "$",
    rating: 4.95,
    reviewCount: 92,
    type: "Bungalow",
    beds: 2,
    baths: 1
  },
  {
    id: "6",
    title: "Rustic Countryside Cottage",
    location: "Cotswolds, England",
    images: [
      "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1542320868-f4d80389e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1558521958-0a228e77e984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ],
    price: 175,
    currency: "£",
    rating: 4.89,
    reviewCount: 78,
    type: "Cottage",
    beds: 3,
    baths: 2
  },
  {
    id: "7",
    title: "Luxury Penthouse with City Views",
    location: "Miami, Florida",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVudGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVudGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1551105378-78e609e1d468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlbnRob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ],
    price: 380,
    currency: "$",
    rating: 4.97,
    reviewCount: 112,
    type: "Penthouse",
    beds: 3,
    baths: 2
  },
  {
    id: "8",
    title: "Eco-Friendly Treehouse Retreat",
    location: "Portland, Oregon",
    images: [
      "https://images.unsplash.com/photo-1547393429-098dd122091a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1566750691416-b0e3c1fecb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    ],
    price: 220,
    currency: "$",
    rating: 4.96,
    reviewCount: 84,
    type: "Treehouse",
    beds: 1,
    baths: 1
  },
  {
    id: "9",
    title: "Lakefront Retreat with Private Dock",
    location: "Lake Tahoe, California",
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    ],
    price: 275,
    currency: "$",
    rating: 4.91,
    reviewCount: 57,
    type: "Cabin",
    beds: 4,
    baths: 2
  },
  {
    id: "10",
    title: "Modern Farmhouse with Mountain Views",
    location: "Boulder, Colorado",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    ],
    price: 230,
    currency: "$",
    rating: 4.88,
    reviewCount: 72,
    type: "Farmhouse",
    beds: 3,
    baths: 2
  },
  {
    id: "11",
    title: "Sleek Urban Studio in Arts District",
    location: "Portland, Oregon",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    ],
    price: 140,
    currency: "$",
    rating: 4.79,
    reviewCount: 93,
    type: "Loft",
    beds: 1,
    baths: 1
  },
  {
    id: "12",
    title: "Oceanview Penthouse Suite",
    location: "San Diego, California",
    images: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1520608760-eff2c38b06e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    ],
    price: 345,
    currency: "$",
    rating: 4.94,
    reviewCount: 114,
    type: "Penthouse",
    beds: 2,
    baths: 2
  }
];

// Filter properties by category
export const getPropertiesByCategory = (category: string): PropertyData[] => {
  if (category === 'all') {
    return properties;
  }
  
  const categoryMap: Record<string, string[]> = {
    'house': ['Villa', 'Cottage', 'Farmhouse'],
    'apartment': ['Apartment', 'Loft', 'Penthouse'],
    'beachfront': ['Bungalow'],
    'cabins': ['Cabin'],
    'tropical': ['Bungalow'],
    'countryside': ['Cottage', 'Farmhouse'],
    'castles': [],
    'camping': [],
    'pools': ['Villa'],
    'cafes': ['Loft', 'Apartment'],
    'mountains': ['Cabin', 'Treehouse'],
    'islands': ['Bungalow']
  };
  
  const propertyTypes = categoryMap[category] || [];
  if (propertyTypes.length === 0) {
    return [];
  }
  
  return properties.filter(property => propertyTypes.includes(property.type));
};
