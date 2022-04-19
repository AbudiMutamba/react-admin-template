import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import PrivateRoute from "./components/helpers/PrivateRoute";
import SignOut from "./components/SignOut";
import UnAuthorized from "./components/UnAuthorized";
import Missing from "./components/Missing";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-out" element={<SignOut />} />
          <Route path="/unathorized" element={<UnAuthorized />} />
          <Route element={<PrivateRoute allowedRoles={["admin","user"]} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/users" element={<Users />} />
          </Route>
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
