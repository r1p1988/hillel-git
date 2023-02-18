import React from "react";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import CreateUser from "./pages/CreateUser";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Users />} />
        <Route path={"/:id"} element={<EditUser />} />
        <Route path={"/createuser"} element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
