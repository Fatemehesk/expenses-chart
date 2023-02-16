
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=>{
    const saveExpenseHandler=(enteredExpenseDate)=>{
        const expenseDate={
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onSaveExpense(expenseDate);
       
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={saveExpenseHandler}/> 
        </div>
    );

};

export default NewExpense;