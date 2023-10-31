import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBook from "./Pages/CreateBook";
import DeleteBook from "./Pages/DeleteBook";
import EditBook from "./Pages/EditBook";
import ShowBook from "./Pages/ShowBook";
import "./App.css";

function App() {
  return (
    <div className="Home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
}

export default App;
