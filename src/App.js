import logo from './logo.svg';
import './App.css';
import { themes, ThemeContext } from './ThemeContext';
import Page from './page';
import RefPractice from "./RefPractice"
import UseReducerComponent from "./UseReducerComponent"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import store from './store'
import Posts from './components/Posts'
import Products from './components/Products';

function App() {
  return (
    <Provider store={store}>
        {/* // <ThemeContext.Provider value={themes.dark}> */}
        {/* <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to my web page</h1>
              </header>
                </div> */}
        {/* <Page /> */}
        {/* <RefPractice /> */}
        {/* <UseReducerComponent /> */}
        <Products />
        {/* <Posts /> */}
          {/* // </ThemeContext.Provider> */}
    </Provider>
  )
}

export default App;
