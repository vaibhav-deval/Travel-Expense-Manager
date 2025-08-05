import Papa from "papaparse";

const DataExportImport = ({ expenses, setExpenses }) => {
  const exportData = () => {
    const csvRows = [["Name", "Amount", "Description", "Time"], ...expenses.map((e) => [e.name, e.amount, e.description, e.time])];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "travel_expenses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImportCSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const imported = results.data
          .map((row) => ({
            name: row.Name?.trim(),
            amount: parseFloat(row.Amount),
            description: row.Description?.trim() || "",
            time: row.Time || new Date().toLocaleString(),
          }))
          .filter((e) => e.name && !isNaN(e.amount));
        setExpenses((prev) => [...prev, ...imported]);
      },
    });
  };

  return (
    <div className="mb-6 text-center space-y-2">
      <button
        onClick={exportData}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all"
      >
        📤 Export CSV
      </button>
      <div>
        <label className="block text-sm font-semibold text-gray-700">📥 Import Expenses CSV</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleImportCSV}
          className="mx-auto block border border-gray-300 rounded p-2"
        />
      </div>
    </div>
  );
};

export default DataExportImport;