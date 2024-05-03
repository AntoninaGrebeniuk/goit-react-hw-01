import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) {
  return (
    <div className={css.card}>
      <div className={css.description}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.username}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
