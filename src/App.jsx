import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./components/users/create.jsx";
import Index from "./components/users/Index.jsx";
import Details from "./components/users/Details";
function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/user/index" element={<Index />} />
      <Route path="/user/create" element={<Create />} />
      <Route path="/user/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
