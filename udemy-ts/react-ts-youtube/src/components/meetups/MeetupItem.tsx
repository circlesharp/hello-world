import React, { useContext } from 'react';
import { Meetup } from '../../models/Meetup';
import FavoritesContext from '../../store/FavoritesContext';
import Card from '../ui/Card';

import style from './MeetupItem.module.less';

const MeetupItem: React.FC<{ item: Meetup }> = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const isFavorite = favoritesCtx.isFavorite(props.item.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      favoritesCtx.removeFavorite(props.item.id);
    } else {
      favoritesCtx.addFavorite(props.item);
    }
  };

  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.item.image} alt={props.item.title} />
        </div>

        <div className={style.content}>
          <h3>{props.item.title}</h3>
          <address>{props.item.address}</address>
          <p>{props.item.description}</p>
        </div>

        <div className={style.actions}>
          <button className='btn' onClick={handleToggleFavorite}>
            {isFavorite ? 'Remove From Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
