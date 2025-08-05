const ExpenseList = ({ expenses, setExpenses }) => {
  const deleteExpense = (index) => {
    const updated = [...expenses];
    updated.splice(index, 1);
    setExpenses(updated);
  };

  const editExpense = (index) => {
    const exp = expenses[index];
    setExpenses([...expenses], { editIndex: index });
  };

  return (
    <>
      {expenses.length > 0 && (
        <div className="mb-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-2">Expenses</h2>
          <table className="w-full text-left border rounded shadow min-w-[600px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Amount (₹)</th>
                <th className="p-2">Description</th>
                <th className="p-2">Time</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((e, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{e.name}</td>
                  <td className="p-2">{e.amount}</td>
                  <td className="p-2">{e.description}</td>
                  <td className="p-2 text-sm text-gray-500">{e.time}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => editExpense(idx)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteExpense(idx)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ExpenseList;