import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import Certificate from "./pages/Certificate";

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

    <Route path="/courses" element={<Courses />} />
    <Route path="/course/:id" element={<CourseDetails />} />

    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />

    <Route
      path="/certificate/:id"
      element={<Certificate />}
    />

    <Route path="/admin" element={<Admin />} />
  </Routes>
</BrowserRouter>

);
}

export default App;
