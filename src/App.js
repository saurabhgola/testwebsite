import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Datacreate from "./Datacreate";
import "./App.css"

function App() {
  // const [formData, setFormData] = useState(null);

  // const handleFormSubmit = (data, mode) => {
  //   if (mode === 'create') {
  //     setFormData(data);
  //   }
  // };
  return (
    <Router>
      <div className="App">
        <div className="navigation_">
        <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <Link to="/edit">Edit</Link>
              </li>
              </div>
        <div className="content">
        <Routes>
            <Route path="/create" element={<Datacreate mode="create" />} />
            <Route path="/edit" element={<Datacreate mode="edit" />} />
          </Routes>
        </div>
        </div>
    </Router>
  );
}

export default App;
