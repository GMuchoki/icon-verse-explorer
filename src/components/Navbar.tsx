
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span className="hidden font-bold sm:inline-block">IconVerse</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center px-2 md:px-6">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search icons..."
              className="w-full rounded-full bg-background pl-8 pr-8 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
