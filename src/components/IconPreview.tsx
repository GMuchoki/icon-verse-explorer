
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Icon } from "@/data/iconData";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface IconPreviewProps {
  icon: Icon | null;
  isOpen: boolean;
  onClose: () => void;
}

export function IconPreview({ icon, isOpen, onClose }: IconPreviewProps) {
  if (!icon) return null;

  const handleDownloadSVG = () => {
    // Create SVG content
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${icon.svgPath}" /></svg>`;
    
    // Create blob and download link
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    
    // Create download element
    const a = document.createElement("a");
    a.href = url;
    a.download = `${icon.name.toLowerCase().replace(/\s+/g, "-")}.svg`;
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Icon Downloaded",
      description: `${icon.name} has been downloaded as SVG.`,
      duration: 3000,
    });
    onClose();
  };
  
  const handleDownloadPNG = () => {
    // Create a canvas to render the SVG
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      // Draw background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create temporary SVG image
      const img = new Image();
      const svgBlob = new Blob(
        [`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${icon.svgPath}" /></svg>`], 
        { type: "image/svg+xml" }
      );
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to PNG
        canvas.toBlob((blob) => {
          if (blob) {
            const pngUrl = URL.createObjectURL(blob);
            
            // Download the PNG
            const a = document.createElement("a");
            a.href = pngUrl;
            a.download = `${icon.name.toLowerCase().replace(/\s+/g, "-")}.png`;
            document.body.appendChild(a);
            a.click();
            
            // Cleanup
            document.body.removeChild(a);
            URL.revokeObjectURL(pngUrl);
            URL.revokeObjectURL(url);
          }
        }, "image/png");
      };
      
      img.src = url;
    }
    
    toast({
      title: "Icon Downloaded",
      description: `${icon.name} has been downloaded as PNG.`,
      duration: 3000,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{icon.name}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center justify-center p-6">
          <div className="h-32 w-32 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d={icon.svgPath} />
            </svg>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs">
            {icon.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 bg-muted rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 mt-6">
            <Button onClick={handleDownloadSVG}>
              <Download className="mr-2 h-4 w-4" />
              SVG
            </Button>
            <Button onClick={handleDownloadPNG} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              PNG
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
