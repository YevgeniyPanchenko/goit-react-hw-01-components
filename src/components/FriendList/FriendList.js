import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendListItem.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendUl}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};
