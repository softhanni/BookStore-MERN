import React from "react";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/details/:id" element={<ShowBook/>} />
        <Route path="/books/edit/:id" element={<EditBook/>} /> 
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/create" element={<CreateBook/>} />
      </Routes>
    </Router>
  );
};

export default App
