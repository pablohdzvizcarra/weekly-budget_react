import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from '../error/Error';

const Question = ({ setBudget, setRemainingBudget, setShowQuestion }) => {

  // Definir el State
  const [money, setMoney] = useState(0);
  const [error, setError] = useState(false);

  // Definir el presupuesto
  const defineBudget = event => {
    setMoney( +event.target.value );
  }

  // Enviar el presupuesto
  const addBudget = event => {
    event.preventDefault();

    // Validar
    if (money < 1 || isNaN(money)) {
      setError(true);
      return;
    }

    // Si pasa la validacion
    setError(false);
    setBudget(money);
    setRemainingBudget(money);
    setShowQuestion(false);

  }

  return (
    <Fragment>
      <form
        className="w-3/4 bg-white m-auto h-auto rounded-lg py-8 px-8"
        onSubmit={ addBudget }
        >
        <h2
          className="text-center text-2xl text-teal-600">
            Coloca tu presupuesto
        </h2>

        { error ? <Error message="El Presupuesto es incorrecto"/> : null }

        <div
          className="block  border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-6 px-4  focus:outline-none "
            type="number"
            placeholder="Ingresa tu presupuesto"
            aria-label="Full name"
            onChange={ defineBudget }
          />
          <input
            className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-2 rounded w-full cursor-pointer"
            type="submit"
            value="Definir Presupuesto"
          />
        </div>
      </form>
    </Fragment>
  )
}

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemainingBudget: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired
}

export default Question

