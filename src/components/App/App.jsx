import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import userData from '../../data/userData.json';
import friends from '../../data/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </div>
  );
}