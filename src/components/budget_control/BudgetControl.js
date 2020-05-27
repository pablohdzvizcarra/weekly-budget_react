import React, {Fragment} from 'react';
import { checkBudget } from '../../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({budget, remainingBudget}) => {
  return (
    <Fragment>
      <div className="bg-teal-500 my-2 py-2 px-1 opacity-50 w-full mx-2">
        Presupuesto: ${budget}
      </div>
      <div className={checkBudget(budget, remainingBudget)}>
        Restante: ${remainingBudget}
      </div >
    </Fragment>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remainingBudget: PropTypes.number.isRequired
}

export default BudgetControl
