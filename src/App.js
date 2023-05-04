import { useState } from "react";
import AntLayout from "./components/AntLayout";
import Login from "./components/Login";
// import "./styles/modalStyles.css"

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false) ;

  const logIn = (e) => {
    setLoggedIn(true) ;
  }
  return (
    <div className="App" style={{overflow:"hidden"}}>
      {
        loggedIn ? <AntLayout /> : <Login logIn={logIn}/>
      }
      
    </div>
  );
}

export default App;
