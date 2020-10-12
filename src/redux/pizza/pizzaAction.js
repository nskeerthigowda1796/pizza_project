import {INCREMENT_PIZZA,DECREMENT_PIZZA} from '../pizza/pizzaType'
export const incrementPizza =(data)=>{
    return{
        type:INCREMENT_PIZZA,
        data
    }
}
export const decrementPizza =(data)=>{
    return{
        type:DECREMENT_PIZZA,
        data
    }
}
