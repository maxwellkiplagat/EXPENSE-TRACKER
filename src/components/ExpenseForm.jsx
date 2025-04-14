import { useState } from "react";
import './ExpenseForm.css'

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      category,
      description,
    };
    onAddExpense(newExpense);
    setName("");
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="Eform">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Expense Name" />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"/>

      <button type="submit" className="subBTN">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
