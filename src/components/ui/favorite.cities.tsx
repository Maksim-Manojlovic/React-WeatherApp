import { useFavorite } from "@/hooks/use-favorite";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface FavoriteCityTabletProps {
  id: string;
  name: string;
  lat: number;
  lot: number;
  onRemove: (id: string) => void;
}

const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorite();

  if (!favorites.length) {
    return null;
  }
  return (
    <>
      <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
      <ScrollArea className="w-full pb-4">
        <div className="flex gap-4"></div>
      </ScrollArea>
    </>
  );
};
function FavoriteCityTablet(id, name, lat, lon, onRemove) {}

export default FavoriteCities;
