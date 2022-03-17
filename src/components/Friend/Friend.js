import React from 'react';
import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend({ props }) {
  const { avatar, name, isOnline } = props;
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  props: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

/* "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
"name": "Ajax",
"isOnline": true,
"id": 1213 */
