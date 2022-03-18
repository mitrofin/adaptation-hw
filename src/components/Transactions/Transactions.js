import React from 'react';
import PropTypes from 'prop-types';
import s from './Transactions.module.css';
import { type } from '@testing-library/user-event/dist/type';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead>
        <tr className={s.theader}>
          <th className={s.head}>Type</th>
          <th className={s.head}>Amount</th>
          <th className={s.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <tr className={idx % 2 === 0 ? s.even : s.odd} key={id}>
            <td className={s.type}>{type /* .toUpperCase() */}</td>
            <td className={s.amount}>{amount}</td>
            <td className={s.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* "id": "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
"type": "invoice",
"amount": "828.62",
"currency": "UGX" */
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
