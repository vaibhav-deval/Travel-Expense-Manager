Travel Expense Tracker
A React-based web application to track group travel expenses, manage members, and visualize expense distributions. The app calculates per-person contributions, balances, and settlements, with data visualization using charts and CSV export/import functionality.
Features

Member Management: Add, edit, or delete trip members.
Expense Tracking: Record expenses with name, amount, description, and timestamp.
Local Storage: Persists members and expenses using browser localStorage.
Settlement Calculations: Computes who owes whom to balance expenses.
Data Visualization:
Pie chart showing expense distribution by member.
Bar chart showing total payments per member.


CSV Export/Import: Export expenses to CSV or import from a CSV file.
Responsive Design: Works on both desktop and mobile devices.

Tech Stack

React: For building the UI.
Chart.js & react-chartjs-2: For pie and bar charts.
Tailwind CSS: For styling.
Papa Parse: For CSV import functionality.
LocalStorage: For data persistence.

Project Structure

TravelExpenseTracker.jsx: Main component orchestrating the app.
MemberManager.jsx: Manages member addition, editing, and deletion.
ExpenseForm.jsx: Form for adding/editing expenses.
ExpenseList.jsx: Displays expenses in a table.
Summary.jsx: Shows total and per-person expenses.
Balances.jsx: Displays individual balances.
Settlement.jsx: Shows settlement transactions.
DataExportImport.jsx: Handles CSV export/import.
ExpenseCharts.jsx: Renders pie and bar charts.

Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository:
git clone <https://github.com/vaibhav-deval/Travel-Expense-Manager.git>
cd travel-expense-tracker


Install dependencies:
npm install

or
yarn install


Install required packages:
npm install react-chartjs-2 chart.js papaparse

or
yarn add react-chartjs-2 chart.js papaparse



Usage

Start the development server:
npm start

or
yarn start


Open http://localhost:3000 in your browser.

Features Usage:

Add members by entering their names and clicking "Add Member".
Record expenses by selecting a member, entering an amount and description, then clicking "Add Expense".
Edit or delete expenses/members using the respective buttons.
View balances and settlement suggestions in the Summary and Settlement sections.
Export expenses to a CSV file or import expenses from a CSV file.
Visualize expense distribution with pie and bar charts.



CSV Import Format
The CSV file for importing expenses should have the following headers:
Name,Amount,Description,Time

Example:
Name,Amount,Description,Time
Alice,50.00,Food,10/10/2023, 12:00 PM
Bob,30.00,Taxi,10/10/2023, 1:00 PM

Notes

Expenses and members are stored in the browser's localStorage and persist across sessions.
Invalid inputs (e.g., empty names, non-numeric amounts) are ignored.
Deleting a member also removes their associated expenses.
The app uses Tailwind CSS for responsive and modern styling.

License
MIT License