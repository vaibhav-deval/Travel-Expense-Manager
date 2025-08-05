import { useState, useEffect } from "react";
import MemberManager from "./components/MemberManager.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Summary from "./components/Summary.jsx";
import Balances from "./components/Balances.jsx";
import Settlement from "./components/Settlement";
import DataExportImport from "./components/DataExportImport.jsx";
import ExpenseCharts from "./components/ExpenseCharts.jsx";

const TravelExpenseTracker = () => {
  const [members, setMembers] = useState(
    () => JSON.parse(localStorage.getItem("members")) || []
  );
  const [expenses, setExpenses] = useState(
    () => JSON.parse(localStorage.getItem("expenses")) || []
  );

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const paymentsByPerson = {};
  expenses.forEach(({ name, amount }) => {
    if (!paymentsByPerson[name]) paymentsByPerson[name] = 0;
    paymentsByPerson[name] += amount;
  });

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const perPerson = members.length ? total / members.length : 0;

  const balances = members.map((name) => ({
    name,
    balance: parseFloat(((paymentsByPerson[name] || 0) - perPerson).toFixed(2)),
  }));

  const creditors = [...balances]
    .filter((p) => p.balance > 0)
    .sort((a, b) => b.balance - a.balance);
  const debtors = [...balances]
    .filter((p) => p.balance < 0)
    .sort((a, b) => a.balance - b.balance);

  const transactions = [];
  let i = 0,
    j = 0;
  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];
    const amount = Math.min(Math.abs(debtor.balance), creditor.balance);
    transactions.push({ from: debtor.name, to: creditor.name, amount });
    debtor.balance += amount;
    creditor.balance -= amount;
    if (Math.abs(debtor.balance) < 0.01) i++;
    if (Math.abs(creditor.balance) < 0.01) j++;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
        <img
          src="/src/assets/favicon.svg"
          alt=""
          className="w-8 h-8 mr-2 inline-block align-middle"
        />
        Travel Expense Tracker
      </h1>
      <MemberManager members={members} setMembers={setMembers} />
      <ExpenseForm
        members={members}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      <Summary total={total} perPerson={perPerson} />
      <Balances balances={balances} />
      <Settlement transactions={transactions} />
      <DataExportImport expenses={expenses} setExpenses={setExpenses} />
      <ExpenseCharts paymentsByPerson={paymentsByPerson} />
    </div>
  );
};

export default TravelExpenseTracker;