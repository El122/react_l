import React from 'react';
import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { AuthContext } from "./context/AuthContext";
import { useRoutes } from "./routes";
import { useAuth } from './hooks/auth.hook'
import "./css/fonts.css";
import "materialize-css";
import './css/App.css';

function App(props) {
  const { token, userId, login, logout} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={
      token, login, logout, userId, isAuthenticated
    }>
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          {routes}
        </div>
      </BrowserRouter >
    </AuthContext.Provider>
  );
}

// function App(props) {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <Navbar />
//         <StoreContext.Provider value={props.store}>
//           <Route path="/profile" render={() => <Profile />} />
//         </StoreContext.Provider>
//         <Route path="/messages" render={() => <DialogsContainer
//           dialogsPage={props.store.getState().dialogsPage}
//           dispatch={props.store.dispatch} />}
//         />
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
