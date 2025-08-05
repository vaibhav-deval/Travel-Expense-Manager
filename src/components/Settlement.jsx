const Settlement = ({ transactions }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold">Settlement</h2>
    <ul>
      {transactions.map(({ from, to, amount }, idx) => (
        <li key={idx}>
          <strong>{from}</strong> pays <strong>{to}</strong> ₹{amount.toFixed(2)}
        </li>
      ))}
    </ul>
  </div>
);

export default Settlement;