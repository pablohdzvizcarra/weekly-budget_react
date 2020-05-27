import React, { useState } from 'react'
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from '../error/Error'

const Form = ({setExpense, setAddExpense}) => {

  const [nameExpense, setNameExpense] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  // cuando el usuario agrega un gasto
  const addExpense = e => {
    e.preventDefault();

    // validar
    if (amount < 1 || isNaN(amount) || nameExpense.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    // construir el gasto
    const expense = {
      nameExpense,
      amount,
      id: shortid.generate()
    }

    // pasar el gasto al componente principal
    setExpense(expense);
    setAddExpense(true);

    // resetear el form
    setNameExpense('');
    setAmount(0);


  }

  return (
    <form
      onSubmit={addExpense}
    >
      <h2
        className="text-center text-2xl text-teal-600 mb-6"
      >Agrega tus gastos aqui</h2>

      {error ? <Error message="Ambos campos son obligatiors o presupuesto incorrecto" /> : null}

      <div
        className="block">
        <label
          className="block bold mb-3">
          Nombre Gasto
        </label>
        <input
          type="text"
          placeholder="Ej. Transporte"
          className="py-2 mb-2"
          value={nameExpense}
          onChange={ e => setNameExpense(e.target.value) }
        />
      </div>
      <div>
        <label
          className="block bold mb-3"
        >Cantidad Gasto</label>
        <input
          type="number"
          placeholder="Ej. 300"
          className="py-2 mb-2"
          value={amount}
          onChange={ e => setAmount( +e.target.value ) }
        />
      </div>

      <input
        type="submit"
        value="Agregar Gasto"
        className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-600 rounded opacity-75"
      />
    </form>
  )
}

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setAddExpense: PropTypes.func.isRequired
}

export default Form
