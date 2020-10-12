import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from '../src/redux/store'
import PizzaContainer from './Components/PizzaContainer';
// import PizzaComponent from '../src/Components/PizzaComponent';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PizzaContainer/>
     {/* <PizzaComponent/> */}
    </div>
     </Provider>
  )
}

export default App;
