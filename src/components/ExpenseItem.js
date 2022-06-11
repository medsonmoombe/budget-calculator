import React from 'react'

const ExpenseItem = ( {expense} ) => {
    const { id, charge, amount} = expense;
  return (
    <>
    <li className="items" key={id}>
        <div className="item-div">
            <span className="expenses">{charge}</span>
            <span className="amount">{amount}</span>
        </div>
        <div className="delete-item">
            <button>Delete</button>
        </div>
    </li> 
    </>
  )
}
export default ExpenseItem;