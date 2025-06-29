import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home/Home.jsx";
import SignIn from "../routes/SignIn/SignIn.jsx";
import User from "../routes/User/User.jsx";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
