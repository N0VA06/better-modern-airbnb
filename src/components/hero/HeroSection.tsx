
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { Calendar as CalendarComponent } from "../ui/calendar";
import ChromaticSmoke from "./ChromaticSmoke";
import TrustBadges from "./TrustBadges";

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (checkIn) params.append("checkIn", checkIn.toISOString());
    if (checkOut) params.append("checkOut", checkOut.toISOString());
    params.append("guests", guests.toString());
    
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <div className="relative min-h-[650px] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ChromaticSmoke />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-center space-y-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find your perfect stay, anywhere in the world
        </motion.h1>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-4 md:p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Location */}
            <div className="flex-1 flex items-center p-2 border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-500 text-left">Location</div>
                <Input
                  className="border-none p-0 h-auto text-md focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Where are you going?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="flex-1 flex items-center p-2 border-b md:border-b-0 md:border-r border-gray-200">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <Popover>
                <PopoverTrigger asChild>
                  <div className="flex-1 cursor-pointer">
                    <div className="text-xs font-medium text-gray-500 text-left">Check in</div>
                    <div className="text-md">
                      {checkIn ? checkIn.toLocaleDateString() : "Add dates"}
                    </div>
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

            {/* Check-out */}
            <div className="flex-1 flex items-center p-2 border-b md:border-b-0 md:border-r border-gray-200">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <Popover>
                <PopoverTrigger asChild>
                  <div className="flex-1 cursor-pointer">
                    <div className="text-xs font-medium text-gray-500 text-left">Check out</div>
                    <div className="text-md">
                      {checkOut ? checkOut.toLocaleDateString() : "Add dates"}
                    </div>
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

            {/* Guests */}
            <div className="flex-1 flex items-center p-2">
              <Users className="h-5 w-5 text-gray-400 mr-2" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-500 text-left">Guests</div>
                <select 
                  className="w-full border-none p-0 h-auto text-md bg-transparent focus:ring-0"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-4 md:mt-0 md:ml-2 flex items-center">
              <Button 
                className="w-full md:w-auto bg-rose-500 hover:bg-rose-600 text-white"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </motion.div>

        <TrustBadges />
      </div>
    </div>
  );
};

export default HeroSection;
