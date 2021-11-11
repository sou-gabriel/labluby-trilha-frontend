import { useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false)

  const handleSaveExpenseData = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpenses(expenseData)
    setIsEditing(false)
  }
  
  const handleButtonClick = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleButtonClick}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onCancel={stopEditing} />}
    </div>
  )
}

export default NewExpense