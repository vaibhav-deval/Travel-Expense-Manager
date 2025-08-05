const Summary = ({ total, perPerson }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold">Summary</h2>
    <p>Total Spent: ₹{total.toFixed(2)}</p>
    <p>Per Person: ₹{perPerson.toFixed(2)}</p>
  </div>
);

export default Summary;