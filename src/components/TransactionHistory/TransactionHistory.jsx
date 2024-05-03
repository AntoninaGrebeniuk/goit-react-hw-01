import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactions}>
      <thead className={css.tableHead}>
        <tr className={css.headRow}>
          <th className={css.headTitle}>Type</th>
          <th className={css.headTitle}>Amount</th>
          <th className={css.headTitle}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.bodyRow} key={id}>
              <td className={css.bodyText}>{type}</td>
              <td className={css.bodyText}>{amount}</td>
              <td className={css.bodyText}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
