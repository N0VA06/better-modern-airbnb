
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, User } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-rose-500">StayHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-rose-500 transition-colors`}>
            Home
          </Link>
          <Link to="/properties" className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-rose-500 transition-colors`}>
            Properties
          </Link>
          <Link to="/wishlist" className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-rose-500 transition-colors`}>
            Saved
          </Link>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className={`rounded-full ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <Search className="h-5 w-5" />
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={isScrolled ? "outline" : "ghost"} size="icon" className={`rounded-full ${!isScrolled && 'text-white border-white/20'}`}>
                <User className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 py-4">
                <h2 className="text-xl font-semibold mb-4">Account</h2>
                <Button variant="ghost" className="justify-start">Sign Up</Button>
                <Button variant="ghost" className="justify-start">Log In</Button>
                <hr className="my-2" />
                <Button variant="ghost" className="justify-start">Host your home</Button>
                <Button variant="ghost" className="justify-start">Help</Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={isScrolled ? "outline" : "ghost"} size="icon" className={`rounded-full ${!isScrolled && 'text-white border-white/20'}`}>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 py-4">
                  <h2 className="text-xl font-semibold mb-4">Menu</h2>
                  <Link to="/" className="py-2 hover:text-rose-500 transition-colors">Home</Link>
                  <Link to="/properties" className="py-2 hover:text-rose-500 transition-colors">Properties</Link>
                  <Link to="/wishlist" className="py-2 hover:text-rose-500 transition-colors">Saved</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
