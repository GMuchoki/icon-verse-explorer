
import { Icon as IconType } from "@/data/iconData";
import { IconCard } from "./IconCard";

interface IconGridProps {
  icons: IconType[];
}

export function IconGrid({ icons }: IconGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {icons.map((icon) => (
        <IconCard key={icon.id} icon={icon} />
      ))}
    </div>
  );
}
