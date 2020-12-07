import logo from './logo.svg';
import { Route, Redirect } from "react-router-dom"
import React from "react"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Teacher } from './components/Teachers/Teacher';

function App() {
  return (
    <>
      <Route render={() => {
          // The user id is saved under the key app_user_id in local Storage. Change below if needed!
            if (localStorage.getItem("app_user_id")) {
                return (
                    <>
                        <Route exact path="/teachers" render={props => <Teacher {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>

   
    
  );
}

export default App;
