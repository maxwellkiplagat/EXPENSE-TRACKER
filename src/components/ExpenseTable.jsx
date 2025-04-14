import './ExpenseTable.css'
function ExpenseTable({ expenses, onDeleteExpense  }) {
  console.log(expenses);
  
 
    return (
      <>
      <h3>EXPENSE TABLE</h3>
        <table>
          <thead >
            <tr className='dataHeader'>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                
                

                <td>
                <button onClick={() => onDeleteExpense(expense.id)} className='deleteBTN'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  
  export default ExpenseTable;
  