import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>

      <AuthContextProvider >
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/account" element={<ProtectedRoute ><Account /></ProtectedRoute>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
