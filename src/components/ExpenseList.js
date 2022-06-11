import React from 'react'
import ExpenseItem from './ExpenseItem';

export const ExpenseList = ({Expenses}) => {
  return (
    <>
<ul className="expense-item">
{ Expenses.map((expense)=>{
    console.log(expense);
    return (
     <ExpenseItem key={expense.id} expense={expense} />   
    )
}) }
</ul>
{ Expenses.length > 0 && <button className="clear-expenses"> Clear Expenses</button>}
    </>    

  )
}
