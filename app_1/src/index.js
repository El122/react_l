import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// let rerenderEntireTree = (store) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App store={store} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// rerenderEntireTree(store);

// store.subscribe(() => {
//   rerenderEntireTree(store);
// });



reportWebVitals();