import React from 'react';
import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend({}) {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src="" alt="User avatar" width="48" />
      <p class="name"></p>
    </li>
  );
}

/* "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
"name": "Ajax",
"isOnline": true,
"id": 1213 */
