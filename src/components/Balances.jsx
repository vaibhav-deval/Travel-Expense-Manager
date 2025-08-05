const Balances = ({ balances }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold">Balances</h2>
    <ul>
      {balances.map(({ name, balance }) => (
        <li key={name} className={balance < 0 ? "text-red-600" : "text-green-600"}>
          {name}: ₹{balance.toFixed(2)}
        </li>
      ))}
    </ul>
  </div>
);

export default Balances;