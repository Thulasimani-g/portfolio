"use client";

import { HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-glass py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <span>&copy; {new Date().getFullYear()} Thulasimani Ganesan.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <span>Built with</span>
            <HiHeart className="w-4 h-4 text-accent" />
            <span>for enterprise excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
