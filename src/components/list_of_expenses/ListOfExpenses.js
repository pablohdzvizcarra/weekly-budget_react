import React from 'react'
import Spending from '../spending/Spending';
import PropTypes from 'prop-types';

const ListOfExpenses = ({expenses}) => {
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl text-teal-600 mb-6">Listado</h2>
      {expenses.map(expense => (
        <Spending
          key={expense.id}
          expense={expense}
        />
      ))}
    </div>
  )
}

ListOfExpenses.propTypes = {
  expenses: PropTypes.array.isRequired
}

export default ListOfExpenses
