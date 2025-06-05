import { useFavorite } from "@/hooks/use-favorite";
import React from "react";

const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorite();

  if (!favorites.length) {
    return null;
  }
  return <div>favoriteCities</div>;
};

export default FavoriteCities;
