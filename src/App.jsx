import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import './App.css'


function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.name.toLowerCase().includes(search.toLowerCase()) ||
      exp.category.toLowerCase().includes(search.toLowerCase())
  );
  function handleDeleteExpense(id) {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  }

  return (
    <div className='maincontent'>
      <h1>Expense Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ExpenseForm className='ExpenseForm' onAddExpense={handleAddExpense}  />
      <ExpenseTable expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense}/>

    </div>
  );
}

export default App;
