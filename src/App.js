// import React from "react";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import NewExpense from "./components/NewExpense/NewExpense";
// import Expenses from "./components/Expenses/Expenses";
// import ExpensesData from "./data/ExpensesData";
// // import Reducer from "./store/ExpensesReducer";
// import Reducer, { addExpense } from '../src/Redux/ExpensesRedux/ExpensesReducer';


// const store = configureStore({
//   reducer: Reducer,
// });

// const App = () => {
//   const addExpenseHandler = (expense) => {
//     store.dispatch(addExpense(expense));
//   };

  
//   return (
//     <Provider store={store}>
//       <div className='wrapper'>
//         <NewExpense onAddExpense={addExpenseHandler} />
//         <Expenses />
//       </div>
//     </Provider>
//   );
// };

// export default App;

import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'A Book (real)',
    amount: 50,
    date: new Date(2019, 9, 1),
  },
  {
    id: 'e6',
    title: 'Coffee mixed',
    amount: 45,
    date: new Date(2022, 10, 12),
  },
  {
    id: 'e7',
    title: 'Chair ',
    amount: 170,
    date: new Date(2022, 2, 29),
  },
  {
    id: 'e8',
    title: 'Iphone (14 proMax)',
    amount: 1450,
    date: new Date(2022, 11, 11),
  },
  {
    id: 'e9',
    title: 'Airpod (pro)',
    amount: 750,
    date: new Date(2022, 11, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='wrapper'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
