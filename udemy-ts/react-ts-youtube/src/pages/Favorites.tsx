import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/FavoritesContext';

const Favorites: React.FC = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>Favorites</h1>
      {favoritesCtx.favorites.length === 0 ? (
        <p>no data</p>
      ) : (
        <MeetupList items={favoritesCtx.favorites} />
      )}
    </section>
  );
};

export default Favorites;
