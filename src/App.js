import React, { useState } from "react";
import Table from "./Table/Table";
import Form from "./Form/Form";
import { Routes, Route } from "react-router-dom";
import EditUser from "./Edit/EditUser";
import './404page.avif'

function App() {
  const [formList, setFormList] = useState([
    {
      id: 1,
      name: "Maheswaran",
      email: "Maheswaran@gmail.com",
      content: "Full Stack Devoloper",
    },
    {
      id: 2,
      name: "Mahizhini",
      email: "Mahizhini@gmail.com",
      content: "Marketing Manager",
    },
    {
      id: 3,
      name: "Mahizhan",
      email: "Mazhizhan@gmail.com",
      content: "IT Support",
    },
    {
      id: 4,
      name: "Yazhan",
      email: "Yazhan@gmail.com",
      content: "Facilitive Manager",
    }
  ]);




  return (
    <>
      <Routes>

        <Route
          path="/"
          element={<Table formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/form"
          element={<Form formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/edit/:id"
          element={<EditUser formList={formList} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function NotFound() {
  return (
    <div className="error">

      <img
        src='./src/404page'
      />
    </div>
  );
}

export default App;