import ExpenseItem from "./ExpenseItems";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">There is no Expenses</h2>;
  }
  return (
    <div className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </div>
  );
};
export default ExpenseList;
