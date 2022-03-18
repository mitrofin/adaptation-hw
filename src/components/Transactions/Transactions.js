import React from 'react';
import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
}

/* "id": "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
"type": "invoice",
"amount": "828.62",
"currency": "UGX" */
TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
