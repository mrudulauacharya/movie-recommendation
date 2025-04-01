import Link from 'next/link';
import Image from 'next/image';

const ItemCard = ({ item, isMovie, storeUrl }) => {
  const { title, author, year, imageUrl, id, key } = item;

  const handleFavorite = () => {
    // Code to add the item to the favorite list (you can store it in local storage or state)
    console.log(`${title} added to favorites!`);
  };

  return (
    <div className="card">
      <Link href={storeUrl} passHref>
        <div className="card-content">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={300}
            priority={true}
          />
          <h3>{title}</h3>
          {isMovie ? (
            <>
              <p>Release Year: {year}</p>
              <p>Rating: 8.5</p>
            </>
          ) : (
            <p>Author: {author}</p>
          )}

          {/* Favorite Button */}
          <button className="favorite-btn" onClick={handleFavorite}>Add to Favorites</button>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
