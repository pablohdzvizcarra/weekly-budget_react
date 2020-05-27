import React from 'react';
import PropTypes from 'prop-types';

const Spending = ({expense}) => {
  return (
    <div className="w-auto h-auto">
      <li className="list-none w-full h-12 ml-4">
        <p className="h-auto capitalize align-middle h-12">
          {expense.nameExpense}
          <span className="float-right bg-teal-500 text-white font-bold py-2 px-4 border border-teal-600 rounded opacity-75">
            ${expense.amount}
          </span>
        </p>
      </li>
    </div>
  )
}

Spending.propTypes = {
  expense: PropTypes.object.isRequired
}

export default Spending
