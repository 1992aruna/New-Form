import React from "react";
import AppHeader from "./components/AppHeader";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Reports from "./components/Reports";

function App() {
  return (
    <React.Fragment>
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/form" element={<Form />} exact />
          <Route path="/report" element={<Reports />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="*" element={<Dashboard />} exact />
        </Routes>
      </main>
    </React.Fragment>

  );
}

export default App;