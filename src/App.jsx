import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import Challenges from "./components/Challenges";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SlideLogin from "./components/SlideLogin";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SlideLogin />} />

            <Route element={<Header />} path="/header" exact />
            <Route element={<Footer />} path="/footer" exact />

            <Route
              element={
                <ProtectedRoutes>
                  <Challenges />
                </ProtectedRoutes>
              }
              path="/challenges"
              exact
            />
     
            <Route
              element={
                <ProtectedRoutes>
                  <Dashboard/>
                </ProtectedRoutes>
              }
              path="/problems"
              exact
            />
            <Route
              element={
                <ProtectedRoutes>
                  <Resources />
                </ProtectedRoutes>
              }
              path="/resources"
              exact
            />
            <Route element={<Contact />} path="/contact" exact />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
