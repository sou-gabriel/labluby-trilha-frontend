import { useState } from 'react'
import Card from '../Card/Card'
import ExpensesChart from '../ExpensesChart/ExpensesChart'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import './Expenses.css'
import ExpensesList from '../ExpensesList/ExpensesList'

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses