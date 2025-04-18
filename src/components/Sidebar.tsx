
import { categories } from "@/data/iconData";
import { cn } from "@/lib/utils";

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function Sidebar({ selectedCategory, setSelectedCategory }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col w-[240px] border-r p-4 sticky top-16 h-[calc(100vh-4rem)]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        <nav className="space-y-1">
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
        </nav>
      </div>

      <div className="mt-auto">
        <div className="bg-muted p-4 rounded-lg text-center text-sm text-muted-foreground">
          <p className="mb-1 font-medium">Advertisement</p>
          <div className="w-full h-[250px] bg-accent flex items-center justify-center">
            Ad Space
          </div>
        </div>
      </div>
    </aside>
  );
}
