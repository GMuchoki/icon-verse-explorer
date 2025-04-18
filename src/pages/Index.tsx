
import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { IconGrid } from "@/components/IconGrid";
import { Footer } from "@/components/Footer";
import { IconPreview } from "@/components/IconPreview";
import { iconData, Icon } from "@/data/iconData";
import { MobileFilters } from "@/components/MobileFilters";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewIcon, setPreviewIcon] = useState<Icon | null>(null);
  
  const filteredIcons = useMemo(() => {
    return iconData.filter((icon) => {
      const matchesCategory = selectedCategory === "All" || icon.category.includes(selectedCategory);
      const matchesSearch = 
        searchQuery === "" || 
        icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        icon.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);
  
  return (
    <ThemeProvider>
      <Helmet>
        <title>IconVerse - Free SVG & PNG Icon Library</title>
        <meta name="description" content="Browse and download thousands of free SVG and PNG icons for your web and mobile projects. Search by category or tags." />
        <meta property="og:title" content="IconVerse - Free SVG & PNG Icon Library" />
        <meta property="og:description" content="Browse and download thousands of free SVG and PNG icons for your web and mobile projects." />
        <meta name="keywords" content="icons, svg icons, png icons, free icons, download icons, web icons, ui icons, design resources" />
      </Helmet>
      
      <div className="flex min-h-screen flex-col">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="flex flex-1">
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          
          <main className="flex-1">
            <div className="container py-6">
              <div className="md:hidden mb-6">
                <MobileFilters 
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
              
              <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">
                  {selectedCategory === "All" 
                    ? "All Icons" 
                    : `${selectedCategory} Icons`}
                </h1>
                <p className="text-muted-foreground mt-1">
                  Browse and download free SVG and PNG icons
                </p>
              </div>
              
              {filteredIcons.length > 0 ? (
                <IconGrid icons={filteredIcons} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No icons found matching your criteria
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
        
        <IconPreview 
          icon={previewIcon} 
          isOpen={!!previewIcon} 
          onClose={() => setPreviewIcon(null)} 
        />
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
