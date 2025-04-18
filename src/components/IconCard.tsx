
import { useState } from "react";
import { Icon } from "@/data/iconData";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

interface IconCardProps {
  icon: Icon;
}

export function IconCard({ icon }: IconCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleDownloadSVG = () => {
    // In a real app, this would generate and download an SVG
    // Since we can't actually create files in this demo, we'll just show a toast
    toast({
      title: "Icon Downloaded",
      description: `${icon.name} has been downloaded as SVG.`,
      duration: 3000,
    });
  };
  
  const handleDownloadPNG = () => {
    toast({
      title: "Icon Downloaded",
      description: `${icon.name} has been downloaded as PNG.`,
      duration: 3000,
    });
  };

  return (
    <div
      className="relative overflow-hidden bg-card rounded-lg border p-4 transition-all duration-200 
                hover:shadow-md flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-24 w-24 mb-3 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("w-full h-full transition-all duration-300", 
                      isHovered ? "text-primary" : "text-foreground")}
        >
          <path d={icon.svgPath} />
        </svg>
      </div>
      
      <h3 className="font-medium text-sm text-center">{icon.name}</h3>
      
      <div 
        className={cn(
          "absolute inset-x-0 bottom-0 bg-card p-2 transform transition-transform flex justify-center gap-2",
          isHovered ? "translate-y-0" : "translate-y-full"
        )}
      >
        <Button 
          size="sm" 
          variant="outline" 
          className="h-8 text-xs" 
          onClick={handleDownloadSVG}
        >
          <Download className="h-3 w-3 mr-1" />
          SVG
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="h-8 text-xs" 
          onClick={handleDownloadPNG}
        >
          <Download className="h-3 w-3 mr-1" />
          PNG
        </Button>
      </div>
    </div>
  );
}
