export default function Profile({
  name,
  tag,
  location,
  image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
