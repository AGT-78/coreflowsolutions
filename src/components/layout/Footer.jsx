import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold bg-gradient-to-r from-[#7209b7] via-[#4cc9f0] to-[#4361ee] bg-clip-text text-transparent">
              AI Agency
            </span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Agency. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-[#4cc9f0] transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-[#4cc9f0] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-[#4cc9f0] transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

