import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import {store} from "./redux/store"
import ThemeContextProvider from './context/themeContextProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
      <Provider store={store}> {" "}
        <App />
      </Provider>
    </BrowserRouter>
    </ThemeContextProvider>    
  </React.StrictMode>
);



