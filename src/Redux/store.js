import {configureStore } from 'redux'

import reducer  from './ExpensesRedux/ExpensesReducer'

const store = configureStore (reducer );

export default store ;