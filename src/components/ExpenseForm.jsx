import { useState } from "react";

const ExpenseForm = ({ members, expenses, setExpenses }) => {
  const [form, setForm] = useState({ name: "", amount: "", description: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    if (!form.name || !form.amount || isNaN(form.amount)) return;
    const newEntry = {
      name: form.name.trim(),
      amount: parseFloat(form.amount),
      description: form.description.trim(),
      time: new Date().toLocaleString(),
    };
    if (editIndex !== null) {
      const updated = [...expenses];
      updated[editIndex] = newEntry;
      setExpenses(updated);
      setEditIndex(null);
    } else {
      setExpenses([...expenses, newEntry]);
    }
    setForm({ name: "", amount: "", description: "" });
  };

  const editExpense = (index) => {
    const exp = expenses[index];
    setForm({ name: exp.name, amount: exp.amount, description: exp.description });
    setEditIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <select
        name="name"
        value={form.name}
        onChange={handleChange}
        className="border rounded p-2 w-full md:w-1/4"
      >
        <option value="">Select Member</option>
        {members.map((m, idx) => (
          <option key={idx} value={m}>{m}</option>
        ))}
      </select>
      <input
        type="number"
        name="amount"
        placeholder="Amount Paid"
        value={form.amount}
        onChange={handleChange}
        className="border rounded p-2 w-full md:w-1/4"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border rounded p-2 w-full md:w-1/4"
      />
      <button
        onClick={addExpense}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
      >
        {editIndex !== null ? "Update" : "Add"} Expense
      </button>
    </div>
  );
};

export default ExpenseForm;