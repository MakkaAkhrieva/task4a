import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LogIn from "../login/login";
import MainPage from "../pages/main-page";
import { store } from "../../store";
import { Provider } from "react-redux";

import "./app.css";




function App() {
/*   const [isLoggedIn, setIsLoggedIn] = useState(false); */

  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<MainPage /* isLoggedIn={isLoggedIn} */ />} />
        <Route
          path="/login"
          element={<LogIn /* setIsLoggedIn={setIsLoggedIn} */ />}
        />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
