import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({
    avatar,
    name,
    isOnline}) {
    return (

        <>
            <span className={s.status}
                  style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
            </span>
            <img className={s.avatar}
                 src={avatar}
                 alt="User avatar"
                 width="60" />
            <p className={s.name}>{name}</p>
        </>
    );
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.oneOf([true, false]),
}
    