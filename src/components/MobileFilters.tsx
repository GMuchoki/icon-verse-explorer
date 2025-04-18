
import { Button } from "@/components/ui/button";
import { categories } from "@/data/iconData";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function MobileFilters({ selectedCategory, setSelectedCategory }: MobileFiltersProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full flex items-center justify-between">
          <span>Filter Icons</span>
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>Categories</SheetTitle>
        <div className="flex flex-col mt-4 space-y-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "w-full px-2 py-1.5 rounded text-sm text-left transition-colors hover:bg-accent",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
