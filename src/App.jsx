import "./Components/Expenses/Expense.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expense from "./Components/Expenses/Expenses";
import { useState } from "react";

const App = () => {
  const InitialExpense = [
    {
      id: "e1",
      title: "Car Insurence",
      amount: 450,
      date: new Date(2021, 5, 5),
    },
    { id: "e2", title: "paper", amount: 34, date: new Date(2021, 9, 3) },
  ];

  const [expense, InteredExpense] = useState(InitialExpense);
  const saveExpenseHandler = (enteredDate) => {
     InteredExpense((preExpenses) => {
       return [enteredDate, ...preExpenses];
     });
    console.log(enteredDate);
  };
  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expense items={expense} />
    </div>
  );
};

export default App;
