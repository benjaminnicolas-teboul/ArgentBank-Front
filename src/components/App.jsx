import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home/Home.jsx";
import SignIn from "../routes/SignIn/SignIn.jsx";
import User from "../routes/User/User.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";
import AuthLoader from "./AuthLoader.jsx";

const App = () => {
  return (
    <>
    <AuthLoader /> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
        <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
