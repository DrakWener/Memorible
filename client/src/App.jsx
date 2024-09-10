import HomePage from "./pages/HomePage"
import SignIn from "./pages/SignIn";
import SingUp from "./pages/SingUp";
import ResetPassword from "./pages/ResetPassword"
import Profile from "./pages/Profile";

import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TestPage from "./pages/TestPage";


function App() {
  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignIn" element={!user ? <SignIn /> : <Navigate to="/Profile"/>} />
        <Route path="/SignUp" element={!user ? <SingUp /> : <Navigate to="/Profile"/>} />
        <Route path="/ResetPassword" element={<ResetPassword />}/>
        <Route path="/Profile" element={user ? <Profile /> : <Navigate to="/SignIn" />} />
        <Route path="/test" element={<TestPage />}></Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
