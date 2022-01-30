import { createContext, FC, useState } from 'react';
import { Meetup } from '../models/Meetup';

interface FavoriteContextState {
  favorites: Array<Meetup>;
  totalFavorites: number;
  addFavorite: (meetup: Meetup) => void;
  removeFavorite: (meetupId: string) => void;
  isFavorite: (meetupId: string) => boolean;
}

const FavoritesContext = createContext<FavoriteContextState>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesContextProvider: FC = (props) => {
  const [userFavorites, setUserFavorites] = useState<Array<Meetup>>([]);

  const addFavorite = (meetup: Meetup) => {
    if (isFavorite(meetup.id)) {
      return;
    }
    setUserFavorites((prev) => [...prev, meetup]);
  };

  const removeFavorite = (meetupId: string) => {
    if (!isFavorite(meetupId)) {
      return;
    }
    setUserFavorites((prev) => prev.filter((item) => item.id !== meetupId));
  };

  const isFavorite = (MeetupId: string): boolean => {
    return userFavorites.some((meetup) => meetup.id === MeetupId);
  };

  const context: FavoriteContextState = {
    favorites: userFavorites,
    totalFavorites: userFavorites?.length,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
