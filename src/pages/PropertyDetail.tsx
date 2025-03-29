
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share, Star, MapPin, Shield, Calendar, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Calendar as CalendarComponent } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import MainLayout from "../components/layout/MainLayout";
import { properties } from "../services/propertyService";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [checkIn, setCheckIn] = React.useState<Date>();
  const [checkOut, setCheckOut] = React.useState<Date>();
  const [guests, setGuests] = React.useState(1);
  
  if (!property) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Property not found</h2>
          <p className="mb-8">The property you are looking for doesn't exist or has been removed.</p>
          <Link to="/" className="text-rose-500 hover:text-rose-600 font-medium">
            Return to home page
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Calculate night count and total
  const nightCount = 3; // Default to 3 nights if no dates selected
  const totalPrice = property.price * nightCount;
  const serviceFee = Math.round(totalPrice * 0.12);
  const totalWithFees = totalPrice + serviceFee;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Back button and header */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to listings
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mt-4">{property.title}</h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-rose-500 fill-current" />
                <span className="ml-1 font-medium">{property.rating}</span>
                <span className="mx-1">•</span>
                <span className="underline">{property.reviewCount} reviews</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-2">
              <Button variant="ghost" size="sm" className="flex items-center">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-l-xl overflow-hidden h-[400px]">
            <img 
              src={property.images[0]} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="overflow-hidden h-[192px]">
                <img 
                  src={image} 
                  alt={`${property.title} - ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - property details */}
          <div className="lg:col-span-2">
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-bold mb-2">
                {property.type} hosted by John Doe
              </h2>
              <p className="text-gray-600">
                {property.beds} {property.beds === 1 ? 'bed' : 'beds'} • {property.baths} {property.baths === 1 ? 'bath' : 'baths'}
              </p>
            </div>

            <div className="border-b pb-6 mb-6">
              <div className="flex items-start mb-4">
                <Shield className="w-8 h-8 mr-4 text-gray-700" />
                <div>
                  <h3 className="font-semibold mb-1">Dedicated workspace</h3>
                  <p className="text-gray-600">
                    A private room with wifi that's well-suited for working.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <Calendar className="w-8 h-8 mr-4 text-gray-700" />
                <div>
                  <h3 className="font-semibold mb-1">Free cancellation before June 20</h3>
                  <p className="text-gray-600">
                    Cancel before check-in on June 20 for a partial refund.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-bold mb-4">About this space</h2>
              <p className="text-gray-700 leading-relaxed">
                This beautiful {property.type.toLowerCase()} in {property.location} offers a comfortable stay with modern amenities. 
                Enjoy the stunning views and convenient location close to major attractions. 
                The space is perfect for {property.beds > 1 ? 'groups' : 'couples'} looking for a memorable stay.
                <br /><br />
                The property features {property.beds} {property.beds === 1 ? 'bedroom' : 'bedrooms'} and {property.baths} {property.baths === 1 ? 'bathroom' : 'bathrooms'}, 
                a fully equipped kitchen, and a cozy living area. High-speed wifi is available throughout the property.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="mr-4 text-gray-700">🌊</span>
                  <span>Beach access</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-gray-700">🏊‍♂️</span>
                  <span>Swimming pool</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-gray-700">🚶‍♂️</span>
                  <span>Walkable area</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-gray-700">📶</span>
                  <span>Fast wifi</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-gray-700">🚗</span>
                  <span>Free parking</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-gray-700">❄️</span>
                  <span>Air conditioning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - booking card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-xl">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xl font-bold">{property.currency}{property.price}</span>
                    <span className="text-gray-600"> night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-rose-500 fill-current" />
                    <span className="ml-1">{property.rating}</span>
                    <span className="mx-1">•</span>
                    <span className="text-gray-600 underline">{property.reviewCount} reviews</span>
                  </div>
                </div>

                <div className="border rounded-lg mb-4">
                  <div className="grid grid-cols-2 divide-x">
                    <div className="p-3">
                      <div className="text-xs font-semibold">CHECK-IN</div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="cursor-pointer">
                            {checkIn ? checkIn.toLocaleDateString() : "Add date"}
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <CalendarComponent
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="p-3">
                      <div className="text-xs font-semibold">CHECKOUT</div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="cursor-pointer">
                            {checkOut ? checkOut.toLocaleDateString() : "Add date"}
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <CalendarComponent
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="border-t p-3">
                    <div className="text-xs font-semibold">GUESTS</div>
                    <div className="flex items-center">
                      <select 
                        className="w-full border-none p-0 h-auto bg-transparent focus:ring-0"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 mb-4">
                  Reserve
                </Button>
                <p className="text-center text-gray-500 text-sm mb-6">
                  You won't be charged yet
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="underline">
                      {property.currency}{property.price} x {nightCount} nights
                    </span>
                    <span>{property.currency}{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Service fee</span>
                    <span>{property.currency}{serviceFee}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-4 border-t">
                    <span>Total before taxes</span>
                    <span>{property.currency}{totalWithFees}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PropertyDetail;
