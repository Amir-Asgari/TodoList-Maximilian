const initialExpenses = {
    expenses: {}
}

const reducer = (state = initialExpenses, action)=>{
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                expenses: state.expenses.id
            }
        default:
            return state
    }
}

export default reducer;