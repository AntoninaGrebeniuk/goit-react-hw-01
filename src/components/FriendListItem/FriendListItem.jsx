import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
