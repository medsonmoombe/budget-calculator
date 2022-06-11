import React, { useState } from 'react';
import './App.css';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseForm } from './components/ExpenseForm';
import { Alert } from './components/Alert';


const InitialExpenses = [
  { id: 1, charge: "rent", amount: 1600 },
  { id: 2, charge: "car", amount: 100 },
  { id: 3, charge: "soccer ticket", amount: 1400 }
]
console.log(InitialExpenses);
function App() {
  const [Expenses, setExpense] = useState(InitialExpenses);
  console.log(setExpense);
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="main-list">
        <ExpenseForm />
        <ExpenseList Expenses ={ Expenses }/>
      </main>
      <h1 className="total">
        Total spending:{""}
        <span className="all-total">${ Expenses.reduce((acc, curr)=>{
       return acc += curr.amount
        },0)}</span>
      </h1>

    </>
  );
}

export default App;
