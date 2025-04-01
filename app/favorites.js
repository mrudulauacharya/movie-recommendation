// /app/favorites.js
import { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="grid">
        {favorites.map((item, index) => (
          <ItemCard key={index} item={item} type={item.type} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
