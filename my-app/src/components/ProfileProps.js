import Profile from './Profile/Profile';

function ProfileProps({ items }) {
  return (
    <ul>
      {[items].map(item => (
        <li key={item.username}>
          <Profile
            avatar={item.avatar}
            username={item.username}
            tag={item.tag}
            location={item.location}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProfileProps;
