import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import Friend from '../Friend/Friend';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <Friend props={friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
