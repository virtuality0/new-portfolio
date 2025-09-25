"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import avatar from "@/public/my_ai.png"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[75%] max-w-4xl z-50 bg-card/90 backdrop-blur-md border border-border/50 shadow-lg rounded-2xl">
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={avatar} alt="Ayush Juyal - Full Stack Developer" className="w-8 h-8 rounded-full object-cover" />
            </div>
            <h1 className="text-xl font-bold gradient-text">Ayush.dev</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-card-foreground hover:text-primary transition-colors font-medium text-sm">About</a>
            <a href="#skills" className="text-card-foreground hover:text-primary transition-colors font-medium text-sm">Skills</a>
            <a href="#experience" className="text-card-foreground hover:text-primary transition-colors font-medium text-sm">Experience</a>
            <a href="#projects" className="text-card-foreground hover:text-primary transition-colors font-medium text-sm">Projects</a>
            <a href="#contact" className="text-card-foreground hover:text-primary transition-colors font-medium text-sm">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/50">
            <div className="flex flex-col space-y-3">
              <a 
                href="#about" 
                className="text-card-foreground hover:text-primary transition-colors font-medium text-sm py-2"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-card-foreground hover:text-primary transition-colors font-medium text-sm py-2"
                onClick={closeMenu}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="text-card-foreground hover:text-primary transition-colors font-medium text-sm py-2"
                onClick={closeMenu}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-card-foreground hover:text-primary transition-colors font-medium text-sm py-2"
                onClick={closeMenu}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-card-foreground hover:text-primary transition-colors font-medium text-sm py-2"
                onClick={closeMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
