import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Register from "./Component/auth/Register.js";
import Login from "./Component/auth/Login.js";
import Forgot from "./Component/auth/Forgot.js";
import Verifyotp from "./Component/auth/Verifyotp.js";
import Newpassword from "./Component/auth/Newpassword.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/forgot" element={<Forgot/>}></Route>
          <Route path="/verify" element={<Verifyotp/>}></Route>
          <Route path="/newpassword" element={<Newpassword/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
