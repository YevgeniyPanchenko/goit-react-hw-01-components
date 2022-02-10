import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

          <tbody className={s.tbody}>
              {items.map(item => (
               <tr className={s.trow} key={item.id}>
                  <td className={s.type}>{item.type}</td>
                  <td className={s.amount}>{item.amount}</td>
                  <td className={s.currency}>{item.currency}</td>
               </tr>   
            ))} 
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
