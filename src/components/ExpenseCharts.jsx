import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ExpenseCharts = ({ paymentsByPerson }) => {
  const pieData = {
    labels: Object.keys(paymentsByPerson),
    datasets: [
      {
        label: "Total Paid",
        data: Object.values(paymentsByPerson),
        backgroundColor: ["#60a5fa", "#f87171", "#34d399", "#fbbf24", "#a78bfa", "#fb7185"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: Object.keys(paymentsByPerson),
    datasets: [
      {
        label: "Amount Paid",
        data: Object.values(paymentsByPerson),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-lg font-bold mb-2">Expense Distribution (Pie)</h2>
        <Pie data={pieData} />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Payments Overview (Bar)</h2>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default ExpenseCharts;