import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

/* function getRandom() {
    return Math.floor(Math.random() * 256);
} */

function colorRandomizer() {
  return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
}

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section
      className={s.statistics}
      /* style={{ backgroundColor: colorRandomizer() }} */
    >
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: colorRandomizer() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
