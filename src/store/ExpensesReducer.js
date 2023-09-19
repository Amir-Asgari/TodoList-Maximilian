const initialState = {
    expenses: [],
  };
  
  const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return {
          expenses: [action.expense, ...state.expenses],
        };
      default:
        return state;
    }
  };
  
  export default expensesReducer;