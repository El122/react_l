import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile"
import { UsersPage } from "./components/UsersPage"
import { DialogsContainer } from "./components/Dialogs/DialogsContainer"
// import { StoreContext } from "./StoreContext";

import './css/App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/messages" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersPage />} />
      </div>
    </BrowserRouter >
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
