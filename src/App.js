import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Checkout from "./Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
