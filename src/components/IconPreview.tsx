
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
    toast({
      title: "Icon Downloaded",
      description: `${icon.name} has been downloaded as SVG.`,
      duration: 3000,
    });
    onClose();
  };
  
  const handleDownloadPNG = () => {
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
