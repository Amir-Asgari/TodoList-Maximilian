import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };


    const filteredExpenses = props.items.filter((expense) => {
      return filteredYear==='All'|| expense.date.getFullYear().toString() === filteredYear;
      
    });
  


  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
};

export default Expenses;