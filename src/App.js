import React, { useState, useEffect } from 'react';
import './App.scss';
import Question from './components/question/Question';
import Form from './components/form/Form';
import ListOfExpenses from './components/list_of_expenses/ListOfExpenses'
import BudgetControl from './components/budget_control/BudgetControl'

function App() {

  // definir el state
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [addExpense, setAddExpense] = useState(false);

  // useEffetc que actualiza el restante
  useEffect( () => {
    if (addExpense) {

      // Agrega el nuevo presupuesto
      setExpenses([
        ...expenses,
        expense
      ])

      // Resta del presupuesto actual
      const remainingBudgetAll = remainingBudget - expense.amount;
      setRemainingBudget(remainingBudgetAll);

      // Resetear a false
      setAddExpense(false);
    }
  }, [expense, addExpense, expenses, remainingBudget])


  return (
      <div className="bg-all">
        <header>
          <h1 className="text-5xl text-center mb-4">Gasto Semanal</h1>
        </header>

        {showQuestion ?
          (<Question
            setBudget={setBudget}
            setRemainingBudget={setRemainingBudget}
            setShowQuestion={setShowQuestion}
          />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-3/4 bg-white m-auto h-auto rounded-lg py-8 px-8">
              <div>
                <Form
                  setExpense={setExpense}
                  setAddExpense={setAddExpense}

                />
              </div>
              <div>
                <ListOfExpenses
                  expenses={expenses}
                />

                <BudgetControl
                  budget={budget}
                  remainingBudget={remainingBudget}
                />
              </div>
            </div>
          )
        }
      </div>
  );
}

export default App;
