import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LogIn from "../login/login";
import MainPage from "../pages/main-page";

import "./app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={<LogIn setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
