import {createStore} from 'redux'
import pizzaReducer from './pizza/pizzaReducer'
const store=createStore(pizzaReducer)

export default store 